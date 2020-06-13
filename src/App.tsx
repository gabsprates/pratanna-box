import React, {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import "./App.css";
import github from "./github.svg";
import levels from "./db";
import { BoxesObj, Coordinates } from "./types";
import { createGame } from "./createGame";
import { chars } from "./constants";

enum KEYS {
  UP = "ArrowUp",
  LEFT = "ArrowLeft",
  DOWN = "ArrowDown",
  RIGHT = "ArrowRight",
}

function App() {
  const [current, setCurrent] = useState(0);
  useLayoutEffect(() => {
    const initialLevel = +(localStorage.getItem("level") || 0);
    setCurrent(initialLevel);
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurrent(+e.target.value);
  };

  const onFinish = useCallback(
    () =>
      setCurrent((_current) => {
        localStorage.setItem("level", `${_current + 1}`);
        return _current + 1;
      }),
    []
  );

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <div className="app-header-top">
            <h1>pratanna-box</h1>
            <a
              rel="noopener noreferrer"
              href="https://github.com/gabsprates/pratanna-box/"
              title="go to github repo"
              target="_blank"
              className="app-link"
            >
              <img src={github} alt="github logo" width="30" height="30" />
            </a>
          </div>

          <div className="app-list">
            <h2>levels:</h2>
            <select
              name="level"
              value={current}
              onChange={handleChange}
              className="app-select"
            >
              {levels.map((level, index) => (
                <option key={level} value={index}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </header>
        <main className="app-board">
          <Game setup={levels[current]} onFinish={onFinish} />
        </main>
      </div>
    </div>
  );
}

const Game = ({ setup, onFinish }: { setup: string; onFinish: () => void }) => {
  const [reset, setReset] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const game = useMemo(() => createGame(setup), [setup, reset]);

  const [player, setPlayerPosition] = useState(game.player);
  useLayoutEffect(() => setPlayerPosition({ ...game.player }), [game.player]);

  const [boxes, setBoxesPosition] = useState<BoxesObj>(game.boxes);
  useLayoutEffect(() => setBoxesPosition({ ...game.boxes }), [game.boxes]);

  const canMove: { [key in KEYS]: () => boolean } = {
    [KEYS.UP]: () => {
      const position = getNewPosition[KEYS.UP](player);
      if (game.stage[position.y][position.x] === chars.wall) return false;
      if (!boxes[`${position.x},${position.y}`]) return true;

      const boxPosition = getNewPosition[KEYS.UP](position);
      if (
        game.stage[boxPosition.y][boxPosition.x] !== chars.wall &&
        !boxes[`${boxPosition.x},${boxPosition.y}`]
      ) {
        return true;
      }

      return false;
    },
    [KEYS.LEFT]: () => {
      const position = getNewPosition[KEYS.LEFT](player);
      if (game.stage[position.y][position.x] === chars.wall) return false;
      if (!boxes[`${position.x},${position.y}`]) return true;

      const boxPosition = getNewPosition[KEYS.LEFT](position);
      if (
        game.stage[boxPosition.y][boxPosition.x] !== chars.wall &&
        !boxes[`${boxPosition.x},${boxPosition.y}`]
      ) {
        return true;
      }

      return false;
    },
    [KEYS.DOWN]: () => {
      const position = getNewPosition[KEYS.DOWN](player);
      if (game.stage[position.y][position.x] === chars.wall) return false;
      if (!boxes[`${position.x},${position.y}`]) return true;

      const boxPosition = getNewPosition[KEYS.DOWN](position);
      if (
        game.stage[boxPosition.y][boxPosition.x] !== chars.wall &&
        !boxes[`${boxPosition.x},${boxPosition.y}`]
      ) {
        return true;
      }

      return false;
    },
    [KEYS.RIGHT]: () => {
      const position = getNewPosition[KEYS.RIGHT](player);
      if (game.stage[position.y][position.x] === chars.wall) return false;
      if (!boxes[`${position.x},${position.y}`]) return true;

      const boxPosition = getNewPosition[KEYS.RIGHT](position);
      if (
        game.stage[boxPosition.y][boxPosition.x] !== chars.wall &&
        !boxes[`${boxPosition.x},${boxPosition.y}`]
      ) {
        return true;
      }

      return false;
    },
  };

  const movements: { [key in KEYS]: () => void } = {
    [KEYS.UP]: () => {
      const position = getNewPosition[KEYS.UP](player);
      setPlayerPosition({ ...position });
      if (boxes[`${position.x},${position.y}`]) {
        const boxPosition = getNewPosition[KEYS.UP](position);
        setBoxesPosition({
          ...boxes,
          [`${position.x},${position.y}`]: 0,
          [`${boxPosition.x},${boxPosition.y}`]:
            game.stage[boxPosition.y][boxPosition.x] === chars.target ? 1 : -1,
        });
      }
    },
    [KEYS.LEFT]: () => {
      const position = getNewPosition[KEYS.LEFT](player);
      setPlayerPosition({ ...position });
      if (boxes[`${position.x},${position.y}`]) {
        const boxPosition = getNewPosition[KEYS.LEFT](position);
        setBoxesPosition({
          ...boxes,
          [`${position.x},${position.y}`]: 0,
          [`${boxPosition.x},${boxPosition.y}`]:
            game.stage[boxPosition.y][boxPosition.x] === chars.target ? 1 : -1,
        });
      }
    },
    [KEYS.DOWN]: () => {
      const position = getNewPosition[KEYS.DOWN](player);
      setPlayerPosition({ ...position });
      if (boxes[`${position.x},${position.y}`]) {
        const boxPosition = getNewPosition[KEYS.DOWN](position);
        setBoxesPosition({
          ...boxes,
          [`${position.x},${position.y}`]: 0,
          [`${boxPosition.x},${boxPosition.y}`]:
            game.stage[boxPosition.y][boxPosition.x] === chars.target ? 1 : -1,
        });
      }
    },
    [KEYS.RIGHT]: () => {
      const position = getNewPosition[KEYS.RIGHT](player);
      setPlayerPosition({ ...position });
      if (boxes[`${position.x},${position.y}`]) {
        const boxPosition = getNewPosition[KEYS.RIGHT](position);
        setBoxesPosition({
          ...boxes,
          [`${position.x},${position.y}`]: 0,
          [`${boxPosition.x},${boxPosition.y}`]:
            game.stage[boxPosition.y][boxPosition.x] === chars.target ? 1 : -1,
        });
      }
    },
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const key = e.key as KEYS;
      if (canMove[key] && canMove[key]()) {
        if (movements[key]) movements[key]();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [player, boxes, game.stage, canMove, movements]);

  useEffect(() => {
    const callback = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (
          Object.values(boxes).filter((value) => value === 1).length ===
          game.targets
        ) {
          alert("good job!");
          onFinish();
        }
      });
    });

    return () => cancelAnimationFrame(callback);
  }, [boxes, game.targets, onFinish]);

  const handleButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const arrow = (e.target as any).dataset.arrow as KEYS;
    if (canMove[arrow] && canMove[arrow]()) {
      if (movements[arrow]) movements[arrow]();
    }
  };

  return (
    <React.Fragment>
      <table className="app-stage">
        <tbody>
          {game.stage.map((line, y) => (
            <tr key={`line-${y}`}>
              {line.map((column, x) => (
                <td
                  key={`line-${y}-column-${x}-${column}`}
                  className={game.getObject(player, boxes, x, y)}
                >
                  &nbsp;
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="app-actions">
        <button data-arrow={KEYS.LEFT} onClick={handleButton}>
          left
        </button>
        <button data-arrow={KEYS.UP} onClick={handleButton}>
          up
        </button>
        <button data-arrow={KEYS.DOWN} onClick={handleButton}>
          down
        </button>
        <button data-arrow={KEYS.RIGHT} onClick={handleButton}>
          right
        </button>
      </div>

      <button onClick={() => setReset((_reset) => (_reset % 2) + 1)}>
        reset
      </button>
    </React.Fragment>
  );
};

const getNewPosition: {
  [key in KEYS]: (position: Coordinates) => Coordinates;
} = {
  [KEYS.UP]: (position) => ({ ...position, y: position.y - 1 }),
  [KEYS.LEFT]: (position) => ({ ...position, x: position.x - 1 }),
  [KEYS.DOWN]: (position) => ({ ...position, y: position.y + 1 }),
  [KEYS.RIGHT]: (position) => ({ ...position, x: position.x + 1 }),
};

export default App;
