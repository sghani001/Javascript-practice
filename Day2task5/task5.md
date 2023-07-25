Task 5:
Write a JavaScript function called groupByCategory that takes an array of objects as input. Each object represents a product with properties name, category, and price. The function should return a new object where the keys are the distinct categories found in the input array, and the values are arrays containing the products belonging to each category.

Example: 
const products = [
{ name: "Laptop", category: "Electronics", price: 1000 },
{ name: "Smartphone", category: "Electronics", price: 800 },
{ name: "Shirt", category: "Clothing", price: 25 },
{ name: "Jeans", category: "Clothing", price: 50 },
{ name: "Desk", category: "Furniture", price: 200 },
];
const groupedProducts = groupByCategory(products);
Output: 
{
Electronics: [
{ name: "Laptop", category: "Electronics", price: 1000 },
{ name: "Smartphone", category: "Electronics", price: 800 }
],
Clothing: [
{ name: "Shirt", category: "Clothing", price: 25 },
{ name: "Jeans", category: "Clothing", price: 50 }
],
Furniture: [
{ name: "Desk", category: "Furniture", price: 200 }
]
}