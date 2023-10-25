
//=> Solve these questions.

// Problem 1: Write a function to calculate the area of a triangle.

function triangle(base,height) {
    let formula = 1/2 * base * height;
    return formula;
}

let result = triangle(12,8);
//console.log(result);


// Problem 2: Write a function to convert degrees to radians.

let degree = 250;
function DegToRad(degree) {
    let radian = degree * (Math.PI/ 180);
    return radian;
}

let result1 = DegToRad(degree).toFixed(2);
//console.log(degree +" Degree = " + result1 + " Radian");
 

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

//getting number from user...

let number = 10;

function calculateFactorial(number) {
    
    if(number < 0) {
        return `Factorial for negative number(${number}) does not exist`;
    }
    else if(number === 0) {
        return `Factorial for ${number} is == 1`;
    }

    else {
        let fact = 1;

        for(i=1; i<=number; i++) {
            fact *= i;
        }
        return `The factorial for ${number} = ${fact}`
    }
}

let fact_result = calculateFactorial(number);

//console.log(fact_result);



// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(number) {
    if(number <= 1) {
        return false;
    }

    //check if the value is divided by 2
    for (let i = 2; i<= Math.sqrt(number); i++) {
        
        if(number % i === 0) {
        return false;
     }
    }

    return true
}

//console.log(isPrime(101));


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

let array1 = [10,20,30];
let array2 = [40,50,60];

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let new_array_result = mergeArrays(array1, array2);
//console.log(new_array_result);



// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" 
//if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
        return true;
    }
    else {
        return false;
    }
}

let leapYear_check = isLeapYear(2020);

//console.log(leapYear_check);



// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

let arr = ["Hassan","Arif","Farjana","Hassan","Ayaat","Aqsa","Arif", "Farjana"];

function removeDuplicates(arr) {
    //return [...new Set(arr)];
    //same as
    return Array.from(new Set(arr));
}
//console.log(removeDuplicates(arr));


// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns 
// the equivalent temperature in Celsius.

function convertToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5/9);

    return celsius;
}
const fahrenheit = 102;
let convResult = convertToCelsius(fahrenheit);
//console.log(`${fahrenheit}°F is = ${convResult.toFixed(2)}°C`);



// Problem 9: Write a function to find the maximum of five numbers.


let numb = [10,4,50, 77,34];

function maxNumber(numb) {
    let max = numb[0];
    for( let i =1; i<numb.length; i++) {
        if(max < numb[i]) {
            max = numb[i];
        }
    }
    return max;
}

//console.log(maxNumber(numb));


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give 
// the output based on the total number of characters in your String. The output will be 'even' or 'odd'. 
// [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

let str = "Hello World!";
function evenOdd(str) {
    
    // check if its a string or not
    if(typeof str !== 'string') {
        return "Please, input string as value";
    }
    //check the characters length as number
    let checkLength = str.length;
    
    if(checkLength % 2 === 0) {
        return "even";
    }
    return "odd";
}

//console.log(evenOdd(str));



/* => Answer any 4 questions.

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

    if else statement executes a set of statements if a specific condition returns true else it jumps to execute 
    the statements of the else block if the condition returns false. */
    
    Example: 
    
    // if(conditional){
    // // set of code to be executed if the condition matches.
    // }

    // else{
    //     // set of code to be executed if the condition does not match.
    // }
    
    /* Switch statements are used to run different sets of code based on the value of a single expression. 
    If none of the cases match, the default set of code is executed.

    example: */
         let expression;
         switch(expression) {
          case x:
            // code block
            break;
          case y:
            // code block
            break;
          default:
            // code block
        }
    /*

    The switch statement is used to decide among multiple options. While if else statement is used to decide between two options.
    if else statements can compare values of all data types. While switch statements can only compare integer and character values.


2. What is JavaScript, and what is its primary purpose in web development?


    [What is JavaScript]
    Answer: JavaScript is a Programming Language. Basically it is used by web developers to add dynamic interactions to web pages, 
    applications, servers, and games too. It works with HTML and CSS providing user interaction.

    JavaScript is a scripting language for creating web page content. It creates elements for improving site visitors’ 
    interaction with web pages, such as dropdown menus, animated graphics, and dynamic background colors, also creates mathmatical 
    solutions and so on.

    [Primary purpose of javaScript in web development]
    JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to the webpage 
    and add special effects to the webpage. On websites, it is mainly used for validation purposes. JavaScript 
    helps us to execute complex actions and also enables the interaction of websites with visitors. Using JavaScript, 
    it is also possible to load the content in a document without reloading the webpage.


3. Explain the difference between var, let, and const when declaring variables in JavaScript.
    
    var variables, a functional scope, can be updated and re-declared within its scope; let variables, a block scope,
    can be updated but not re-declared. While const variables, a block scope, can neither be updated nor re-declared.
    On the other hand, in var and let, reassign is allowed while in const reassign is not allowed. Though redeclaration in
    only allowed in var, not in let and const.



5. What is the difference between "null" and "undefined" in JavaScript?

    null is an assigned value. It means nothing. It represents the intentional absence of any object value. 
    It means that a variable exists, but it has no value. 
    we can use the null value to indicate that a variable or object has no value instead. 
    For example, if we have an object and one of its properties is not applicable, we can set it to null.
    
    */
    let person = {
      name: 'Arif',
      age: 30,
      occupation: null
    };

    /* undefined means a variable has been declared but has not yet been assigned a value. 
    Undefined is a value that represents the absence of a value. It is used to indicate that a variable has not been assigned a value.
    For example, if we declare a variable without assigning a value, it will be undefined by default.
    */

    let x; console.log(x); // undefined

