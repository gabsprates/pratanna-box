import React, {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import "./App.css";
import db from "./db";

function App() {
  const initialLevel = +(localStorage.getItem("level") || 0);
  const [current, setCurrent] = useState(initialLevel);
  const levels = db.split("---");

  const handleClick = (e: any) => {
    setCurrent(+e.target.dataset.level);
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
        <aside className="app-list">
          <h1>pratanna-box</h1>
          <a
            href="https://github.com/gabsprates/pratanna-box/"
            title="go to github repo"
            className="app-link"
          >
            go to github repo
          </a>
          <h2>levels:</h2>
          <ul>
            {levels.map((level, index) => (
              <li
                key={level}
                onClick={handleClick}
                data-level={index}
                className={getCssClass(
                  "app-level",
                  index === current ? "app-level--selected" : ""
                )}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </aside>
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

  useEffect(() => {
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
              game.stage[boxPosition.y][boxPosition.x] === chars.target
                ? 1
                : -1,
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
              game.stage[boxPosition.y][boxPosition.x] === chars.target
                ? 1
                : -1,
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
              game.stage[boxPosition.y][boxPosition.x] === chars.target
                ? 1
                : -1,
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
              game.stage[boxPosition.y][boxPosition.x] === chars.target
                ? 1
                : -1,
          });
        }
      },
    };

    const handleKey = (e: KeyboardEvent) => {
      if (canMove[e.key] && canMove[e.key]())
        if (movements[e.key]) movements[e.key]();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [player, boxes, game.stage]);

  useEffect(() => {
    if (
      Object.values(boxes).filter((value) => value === 1).length ===
      game.targets
    ) {
      alert("parabéns!!!");
      onFinish();
    }
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
      {/* <pre>{setup}</pre> */}
      <button onClick={() => setReset((_reset) => _reset + 1)}>reset</button>
    </React.Fragment>
  );
};

const getCssClass = (...arr: string[]) => arr.filter(Boolean).join(" ");

const chars = {
  target: ".",
  wall: "#",
  empty: " ",
  box: "$",
  boxOnTarget: "*",
  player: "@",
  playerOnTarget: "+",
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

type BoxesObj = { [axis: string]: number };

const createGame = (setup: string) => {
  let line = 0;
  let column = 0;
  let columns = 0;
  let targets = 0;

  const player = { x: 0, y: 0 };
  const boxes: BoxesObj = {};

  const handleChar: { [char: string]: (x: number, y: number) => void } = {
    [chars.player]: (x, y) => {
      player.x = x;
      player.y = y;
    },
    [chars.playerOnTarget]: (x, y) => {
      player.x = x;
      player.y = y;
    },
    [chars.box]: (x, y) => {
      boxes[`${x},${y}`] = -1;
    },
    [chars.boxOnTarget]: (x, y) => {
      boxes[`${x},${y}`] = 1;
    },
  };

  const stage = setup
    .replace(/^\n/, "")
    .replace(/\n$/, "")
    .split("")
    .reduce<string[][]>((prev, current) => {
      if (column > columns) columns = column;

      if (!prev[line]) prev[line] = [];

      if (current === "\n") {
        line++;
        column = 0;
        return prev;
      }

      if (handleChar[current]) {
        handleChar[current](column, line);
        if (current === chars.boxOnTarget) {
          targets++;
          prev[line][column] = chars.target;
        } else {
          prev[line][column] = " ";
        }
      } else {
        if (current === chars.target) targets++;
        prev[line][column] = current;
      }

      column++;

      return prev;
    }, []);

  return { stage, lines: line, columns, player, boxes, targets };
};

export default App;
