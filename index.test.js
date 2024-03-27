const { sum, sum2 } = require(".");

test("adds 1 + 2 to equal 3", async () => {
  expect(sum(1, 2)).toBe(3);
  await expect(sum2(1, 2)).resolves.toBe(3);
});
