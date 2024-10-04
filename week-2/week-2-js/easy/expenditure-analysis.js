/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categorySpending = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (categorySpending[category]) {
      categorySpending[category] += price;
    } else {
      categorySpending[category] = price;
    }
  });

  const result = Object.keys(categorySpending).map((category) => ({
    category,
    totalSpent: categorySpending[category],
  }));

  return result;
}

//chatGPT generated
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800001,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656076800002,
    price: 5,
    category: "Transport",
    itemName: "Bus Ticket",
  },
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
