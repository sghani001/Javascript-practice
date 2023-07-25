// Write a JavaScript function called sumNumbers that takes an array of mixed 
// data types (numbers and strings) as input. The function should sum all the 
// numeric values in the array and return the result. If any element in the 
// array cannot be coerced into a number, ignore it. 
// You can use the typeof operator to check for data types.


// sumNumbers([1, "2", "three", 4, "5"]);
// output :12 (1 + 2 + 4 + 5)

function sumNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        if(typeof(arr[i]) === "number")
        {
            sum += arr[i];
        }
        else if(typeof(arr[i]) === "string")
        {
            if(!isNaN(arr[i]))
            {
                sum += Number(arr[i]);
            }
        }
        else
        {
            continue;
        }
    }
    return sum;
}


console.log(sumNumbers([1, "2", "three", 4, "5"]));