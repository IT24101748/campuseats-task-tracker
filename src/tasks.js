// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (!Number.isFinite(price) || !Number.isFinite(quantity) || price < 0 || quantity < 0) {
    throw new Error("price and quantity must be finite values greater than or equal to 0");
  }

  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// API keys belong in environment variables (for example, process.env.API_KEY), never in source code.
console.log(`CampusEats has ${tasks.length} open tasks`);

module.exports = { tasks, calculateTotal, VIP_DISCOUNT };
