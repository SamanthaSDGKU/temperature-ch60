console.log("functions.js");

//1. function declaration (creating the function)
function sayHello(){
    //body of the fn
    console.log("Hello cohort 60");
}

//2. Call/run/execute/trigger the function (code, console, user)
sayHello();


//Example 1 with 2 parameters
function greet(name,name2="Someone"){
    console.log("Hello " + name + " and " + name2);
}

greet("Raggie");
greet("Elliot","Mike");

// Challenge 1: Double the Number
// Task:
// - Create a function called `doubleNumber` that takes one number as a parameter.
// - The function should display the number multiplied by 2.
// - Print the result when you call the function with different numbers.
function doubleNumber(number){
    let total = number*2;
    console.log(total);
}

doubleNumber(2); // 4
doubleNumber(4); // 8
doubleNumber(6); // 12

// Example 2, with prompt

function welcome(){
    let name = prompt("Enter your name");
    let age = prompt("Enter your age");

    //console.log("Welcome " + name + " the age is " + age);
    console.log(`Welcome ${name} the is ${age}`);
}

// Example 3, with default parameters

function add(num1=0,num2=0){
    let total = num1 + num2;
    console.log("the total is: " + total);
}

add(5,5);
add(6,2);
add(2,7);
add();

// Challenge 2: Combine Names
// Task:
// - Create a function called `combineNames` that takes two parameters: `firstName` and `lastName`.
// - The function should return the full name in the format: `"firstName lastName"`.
// - If either parameter is missing, it should use the default value `"Unknown"` for that parameter.

function combineNames(firstName="Unknown",lastName="Unknown"){
    console.log(`${firstName} ${lastName}`);
}

combineNames("Alice","Johnson"); // Alice Johnson
combineNames("Alice");// Alice Unknown
combineNames(); // Unknown Unknown

// Challenge 3: Convert Minutes to Seconds

// Task:
// - Create a function called `convertToSeconds` that takes one parameter, `minutes`. //2
// - The function should calculate the seconds by multiplying the minutes by 60. // 120
// - Call the function with different values of minutes and print the results.
function convertToSeconds(){
    let minutes = prompt("Enter the minutes");
    document.getElementById("result").innerHTML += `<li class="item">The conversion is: ${60*minutes}s</li>`;
}

// convertToSeconds(1); // 60
// convertToSeconds(10); // 600
// convertToSeconds(3); // 180