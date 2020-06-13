import { BoxesObj } from "./types";
import { chars } from "./constants";

export const createGame = (setup: string) => {
  let line = 0;
  let column = 0;
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

  return { stage, player, boxes, targets };
};
