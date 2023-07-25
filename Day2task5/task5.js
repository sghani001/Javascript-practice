
function groupByCategory(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i].category]) {
            obj[arr[i].category].push(arr[i]);
        } else {
            obj[arr[i].category] = [arr[i]];
        }
    }
    return obj;
}


const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Shirt", category: "Clothing", price: 25 },
    { name: "Jeans", category: "Clothing", price: 50 },
    { name: "Desk", category: "Furniture", price: 200 },
];
const groupedProducts = groupByCategory(products);

console.log(groupedProducts);