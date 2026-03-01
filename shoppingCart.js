/*
We have a shopping cart represented by an array of items. Each item has a price and a quantity.

Instruction
Create a function named calculateTotal that receives an array of item objects. Each object has `price` and `quantity`. Return the total cost of the cart.
*/

const calculateTotal = function (cart) {
  let total = 0;

  for (let item of cart) {
    total += item.price * item.quantity;
  }

  return total;
};

module.exports = calculateTotal;
