function sum(num) {
    // Check if value is a number
    if (typeof num !== "number" || num % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;

    for (let i = 0; i <= num; i++) {
        total += i;
    }

    return total;
}

// Tests
console.log(sum(5));      // 15
console.log(sum(10));     // 55
console.log(sum("5"));    // The value passed is not a number
console.log(sum(5.5));    // The value passed is not a number


function factorial(num) {
    let result = 1;
    let display = "";

    for (let i = num; i >= 1; i--) {
        result *= i;

        display += i;

        if (i > 1) {
            display += " * ";
        }
    }

    console.log(display);
    console.log("Output:", result);
}

// Test
factorial(4);
// 4 * 3 * 2 * 1
// Output: 24


function funkyMath() {

    if (arguments.length === 2) {
        return arguments[1] - arguments[0];
    }

    if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    }

    if (arguments.length === 4) {
        let firstPair = arguments[0] + arguments[1];
        let secondPair = arguments[2] + arguments[3];

        return firstPair / secondPair;
    }

    return "Invalid number of arguments";
}

// Tests
console.log(funkyMath(5, 10));       // 5
console.log(funkyMath(2, 3, 4));     // 9
console.log(funkyMath(8, 2, 3, 5));  // 1.25


let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Odd Numbers:", oddNumbers);

// Remove odd numbers from original array
numbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even Numbers Remaining:", numbers);


let me = {
    firstName: "Khaalid",
    lastName: "Hattas",
    age: 20,
    favouriteColour: "Blue",
    dreamCar: "BMW M4"
};

console.log(me);


// ==========================
// 6. ADD FAVOURITE FOOD
// ==========================
me.favouriteFood = "Pizza";

console.log(me);


// ==========================
// 7. DELETE AGE PROPERTY
// ==========================
delete me.age;

console.log(me);