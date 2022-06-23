/** @format */

import processData from "./ctci-bfs-shortest-reach";

describe("test", () => {
  test("case 1:", () => {
    expect(
      processData(
        `2
4 2
1 2
1 3
1
3 1
2 3
2`,
      ),
    ).toBe(
      `6 6 -1
-1 6`,
    );
  });

  test("case 2:", () => {
    expect(
      processData(
        `1
4 2
1 2
1 3
1`,
      ),
    ).toBe(`6 6 -1`);
  });

  test("case 3:", () => {
    expect(
      processData(
        `1
3 1
2 3
2`,
      ),
    ).toBe(`-1 6`);
  });

  test("case 4:", () => {
    expect(
      processData(
        `1
7 4
1 2
1 3
3 4
2 5
2`,
      ),
    ).toBe(`6 12 18 6 -1 -1`);
  });
});
