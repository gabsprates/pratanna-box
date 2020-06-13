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
import { BoxesObj } from "./types";
import { createGame } from "./createGame";
import { chars } from "./constants";

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

  const canMove: { [key: string]: () => boolean } = {
    ArrowUp: () => {
      const position = { ...player, y: player.y - 1 };
      if (game.stage[position.y][position.x] === chars.wall) return false;
      if (!boxes[`${position.x},${position.y}`]) return true;

      const boxPosition = { ...position, y: position.y - 1 };
      if (
        game.stage[boxPosition.y][boxPosition.x] !== chars.wall &&
        !boxes[`${boxPosition.x},${boxPosition.y}`]
      ) {
        return true;
      }

      return false;
    },
    ArrowLeft: () => {
      const position = { ...player, x: player.x - 1 };
      if (game.stage[position.y][position.x] === chars.wall) return false;
      if (!boxes[`${position.x},${position.y}`]) return true;

      const boxPosition = { ...position, x: position.x - 1 };
      if (
        game.stage[boxPosition.y][boxPosition.x] !== chars.wall &&
        !boxes[`${boxPosition.x},${boxPosition.y}`]
      ) {
        return true;
      }

      return false;
    },
    ArrowDown: () => {
      const position = { ...player, y: player.y + 1 };
      if (game.stage[position.y][position.x] === chars.wall) return false;
      if (!boxes[`${position.x},${position.y}`]) return true;

      const boxPosition = { ...position, y: position.y + 1 };
      if (
        game.stage[boxPosition.y][boxPosition.x] !== chars.wall &&
        !boxes[`${boxPosition.x},${boxPosition.y}`]
      ) {
        return true;
      }

      return false;
    },
    ArrowRight: () => {
      const position = { ...player, x: player.x + 1 };
      if (game.stage[position.y][position.x] === chars.wall) return false;
      if (!boxes[`${position.x},${position.y}`]) return true;

      const boxPosition = { ...position, x: position.x + 1 };
      if (
        game.stage[boxPosition.y][boxPosition.x] !== chars.wall &&
        !boxes[`${boxPosition.x},${boxPosition.y}`]
      ) {
        return true;
      }

      return false;
    },
  };

  const movements: { [key: string]: () => void } = {
    ArrowUp: () => {
      const position = { ...player, y: player.y - 1 };
      setPlayerPosition({ ...position });
      if (boxes[`${position.x},${position.y}`]) {
        const boxPosition = { ...position, y: position.y - 1 };
        setBoxesPosition({
          ...boxes,
          [`${position.x},${position.y}`]: 0,
          [`${boxPosition.x},${boxPosition.y}`]:
            game.stage[boxPosition.y][boxPosition.x] === chars.target ? 1 : -1,
        });
      }
    },
    ArrowLeft: () => {
      const position = { ...player, x: player.x - 1 };
      setPlayerPosition({ ...position });
      if (boxes[`${position.x},${position.y}`]) {
        const boxPosition = { ...position, x: position.x - 1 };
        setBoxesPosition({
          ...boxes,
          [`${position.x},${position.y}`]: 0,
          [`${boxPosition.x},${boxPosition.y}`]:
            game.stage[boxPosition.y][boxPosition.x] === chars.target ? 1 : -1,
        });
      }
    },
    ArrowDown: () => {
      const position = { ...player, y: player.y + 1 };
      setPlayerPosition({ ...position });
      if (boxes[`${position.x},${position.y}`]) {
        const boxPosition = { ...position, y: position.y + 1 };
        setBoxesPosition({
          ...boxes,
          [`${position.x},${position.y}`]: 0,
          [`${boxPosition.x},${boxPosition.y}`]:
            game.stage[boxPosition.y][boxPosition.x] === chars.target ? 1 : -1,
        });
      }
    },
    ArrowRight: () => {
      const position = { ...player, x: player.x + 1 };
      setPlayerPosition({ ...position });
      if (boxes[`${position.x},${position.y}`]) {
        const boxPosition = { ...position, x: position.x + 1 };
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
      if (canMove[e.key] && canMove[e.key]())
        if (movements[e.key]) movements[e.key]();
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

  const getObj = (x: number, y: number, char: string) => {
    if (player.x === x && player.y === y) {
      if (game.stage[player.y][player.x] === chars.target)
        return getBackground(chars.playerOnTarget);

      return getBackground(chars.player);
    }

    if (boxes[`${x},${y}`]) {
      if (boxes[`${x},${y}`] === 1) return getBackground(chars.boxOnTarget);
      return getBackground(chars.box);
    }

    return getBackground(char);
  };

  const handleButton: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const { arrow } = (e.target as any).dataset;
    if (canMove[arrow] && canMove[arrow]())
      if (movements[arrow]) movements[arrow]();
  };

  return (
    <React.Fragment>
      <table className="app-stage">
        <tbody>
          {game.stage.map((line, y) => (
            <tr key={`line-${y}`}>
              {line.map((column, x) => (
                <td
                  key={`line-${y}-column-${x}`}
                  className={getObj(x, y, column)}
                >
                  &nbsp;
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="app-actions">
        <button data-arrow="ArrowLeft" onClick={handleButton}>
          left
        </button>
        <button data-arrow="ArrowUp" onClick={handleButton}>
          up
        </button>
        <button data-arrow="ArrowDown" onClick={handleButton}>
          down
        </button>
        <button data-arrow="ArrowRight" onClick={handleButton}>
          right
        </button>
      </div>

      <button onClick={() => setReset((_reset) => (_reset % 2) + 1)}>
        reset
      </button>
    </React.Fragment>
  );
};

const getBackground = (char: string) => {
  const bgs: { [char: string]: () => string } = {
    $: () => "app-stage-box",
    "*": () => "app-stage-box--target",
    "#": () => "app-stage-wall",
    ".": () => "app-stage-target",
    "@": () => "app-stage-player",
    "+": () => "app-stage-player--target",
  };

  return bgs[char] ? bgs[char]() : "";
};

export default App;
