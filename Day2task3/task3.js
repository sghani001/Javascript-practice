
// For example:

// countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);

// Output:
// { apple: 3, banana: 2, orange: 1 }

function countOccurrences(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
        }
    }
    return count;
}

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));