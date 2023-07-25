// Task 2: Swap Numbers:

function swapWithoutDestructuring(a, b) 
{
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
  
let x = 10;
let y = 20;
console.log("Before swap: x =", x, "y =", y);
  
[x, y]=swapWithoutDestructuring(x, y);
  
console.log("After swap: x =", x, "y =", y);