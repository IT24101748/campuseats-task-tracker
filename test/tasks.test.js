const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateTotal } = require("../src/tasks");

test("applies the VIP discount", () => {
  assert.equal(calculateTotal(100, 2, "vip"), 180);
});

test("rejects negative values", () => {
  assert.throws(() => calculateTotal(-1, 1, "regular"), /greater than or equal to 0/);
});
