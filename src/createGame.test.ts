import { createGame } from "./createGame";
import levels from "./db";

describe("createGame", () => {
  const mockLevel = `
#####
#@ *#
# $.#
#####
`;
  it(`must to return game setup for: ${mockLevel}`, () => {
    expect(createGame(mockLevel)).toEqual({
      stage: [
        ["#", "#", "#", "#", "#"],
        ["#", " ", " ", ".", "#"],
        ["#", " ", " ", ".", "#"],
        ["#", "#", "#", "#", "#"],
      ],
      player: { x: 1, y: 1 },
      boxes: { "3,1": 1, "2,2": -1 },
      targets: 2,
    });
  });

  it(`must to return game setup for: ${levels[0]}`, () => {
    expect(createGame(levels[0])).toEqual({
      stage: [
        [" ", " ", "#", "#", "#"],
        [" ", " ", "#", ".", "#"],
        [" ", " ", "#", " ", "#", "#", "#", "#"],
        ["#", "#", "#", " ", " ", " ", ".", "#"],
        ["#", ".", " ", " ", " ", "#", "#", "#"],
        ["#", "#", "#", "#", " ", "#"],
        [" ", " ", " ", "#", ".", "#"],
        [" ", " ", " ", "#", "#", "#"],
      ],
      player: { x: 4, y: 4 },
      boxes: {
        "3,3": -1,
        "3,4": -1,
        "5,3": -1,
        "4,5": -1,
      },
      targets: 4,
    });
  });
});
