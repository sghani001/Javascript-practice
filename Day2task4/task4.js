// For example:

// sumObjectValues(data);

// Output:
// 36 (5 + 3 + 8 + 4 + 10 + 6)

function sumObjectValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            sum += obj[key];
        } else if (typeof obj[key] === "object") {
            sum += sumObjectValues(obj[key]);
        }
    }
    return sum;
}

let data = {
    a: 5,
    b: 3,
    c: {
        d: 8,
        e: 4
    },
    f: {
        g: 10,
        h: {
            i: 6
        }
    }
};

console.log(sumObjectValues(data));