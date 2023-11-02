/**
 * command lines for windows in place of mac


create folder
    both    mkdir

create file 
    mac        touch 
    win        echo. > filename.txt OR type nul filename.txt

show all files in current directory
    mac        ls
    win        dir 

delete or remove
    mac        rm
    win        del

rename or move file
    mac        mv filename.txt Foldername
    win        move file.txt Foldername
    win        move oldfile.txt newfile.txt

write in file
    mac        nano filename.txt
    win        code filename.txt [this will use visual studio code to modify as regular notepad cannot]

type in file
    mac    cat filename.txt
    win    type filename.txt

create folder and file at same time
    win        mkdr Foldername & echo. > Foldername\filename     - & echo. > back\slash
    mac        mkdr Foldername; touch Foldername/filename        - ; touch forward/slash


skipping right to the desktop from wherever you are
    win        cd %userprofile%\desktop
    mac        cd ~/desktop

removing a file and its contents without confirmation
    win        rmdir /s /q Foldername
    mac        rm -R Foldername
 */

//declare
var number33;

//assign
number34 = 30;

//initialize
var number35 = 20

//design goals
/**
 * 1 - design
 * 2 - test
 * 3 - develop
 */

//                                 String formatting
//curly brace / backticks
var x = 12;
var sentence = `There were ${x} candies in the jar.`
console.log(sentence);

// concatenation
var y = 12;
var sentence = "There were "+x+" candies in the jar.";
console.log(sentence);

//double quotes
var x = 12;
var sentence = "There were "+x+" candies in the jar"

//single quotes
var x = 12;
var sentence = "There were "+x+" candies in the jar"

//Format specifiers example

console.log("%s was here today.", "Tom"); //single line format

console.log("%s has a GPA of %f", "Jimothy", "3.5");

//           modules

//export (user.js)
/*
export function helloUser(user){
    alert(`Welcome ${user}`);
}

//import (main.js
import {helloUser} from `./user.js`;
helloUser("Monika");
*/

//                                   Incrementing
// i=i=1;
// i+=1;
// i++;

 var i = 0;
 console.log(++i); //1 pre
 console.log(i); //1
 console.log(i++); //1 post
 console.log(i); //2

 //                                  Decrementing
//  i=id-1
//  i-=1;
//  i--;

 console.log(--i); //-1 pre
 console.log(i); //-1
 console.log(i--); //-1 post
 console.log(i); //-2 (cant lof negative values)




 //                                   Data types

 //numbers - integers/whole numbers
 var number2 = 2

 //numbers - decimal/float
 var number2 = 2.0

 //numbers - magic numbers
 var PI = 3.14
 var YEAR_STARTED = 1990

 //boolean
var proceed = true;
var proceed = false;

//objects
var students = {
    studentNumber: "A123456",
    phone: 6041231234
} 
console.log(students);

//function
var sentence = createInformation("BCIT", 1960);

function createInformation(school,year){
    return "The school "+school+" was founded in "+year+"."
}
console.log(sentence);

//no value - undefined

var food;
console.log(food);

//no value - empty
var food = "";

 //                      Built in Methods
    Math.floor()

    Math.random()* //maxnumber after ()*___
//example1
console.log(Math.floor(Math.random() * 10)); // Random number between 0 and 9

//example2 - logs random from list
var arr = ["apple", "banana", "cherry", "date"];
var randomIndex = Math.floor(Math.random() * arr.length);
console.log(arr[randomIndex]); // Randomly logs one of the fruits

//example3 - roll dice game
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Returns a number between 1 and 6
}
console.log(rollDice());

//example - randomly selecting a user from a list function version
function selectRandomUser(users) {
    var randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
}
var userList = ["Alice", "Bob", "Charlie", "David"];
var randomUser = selectRandomUser(userList);
console.log(randomUser);




// this is a single line comment

/* this is a multi-line comment */


//            week5

//github

//create new repository on github.com
//git clone (your repository link here)
//git add
//git commit -m "new item"
//git remote set-url origin https://youruser:password@github.com/user/repo.git
        //password is the Key you generate in github
//git push origin main

//Signing in MAC
//git config --global user.email you@example.com"
//git config --global user.name "Your Name"

//Generate Key
//1 go to settings > dev settings > personal access token > generate new token
//- save the token that is generated that will be the password for the path from before^^

/** saving code to github
 * 1 - create repository on github
 * 2 - clone repository on desktop
 *      git clone <repo of https>
 * 3 - then add the forler/file structure into cloned folder
 * 4 - then we need to add the changes we made to repo
 *      git add .
 *      git commit -m "message"
 *      git push
 */



//                              Comparison Operators

let x3 = 7;

//                     > more than
console.log(
    x3 > 10, x3 > 6
);

//                    >= more than or equal to
console.log(
    x3 >= 10, x3 >= 7
);

//                    < less than
console.log(
    x3 < 10, x3 < 6
);

//                     <= less than or equal to
console.log(
    x3 <= 10, x3 <= 7
);

//                   == equal to
console.log(
    x3 == 7, x3 == 6
);

//                 != not equal to
console.log(
    x3 != 7
);

let y1 = "7";

//                 === strict equality
console.log(
    x3 === 7
);

console.log(
    x3 !== y
);

//example idk for what
let a1 = "Time";
let b1 = "Timing";

console.log(
    a1> b1,); // Tim'e' > Tim'i'ng


//                  workbook comparison operators section 10

 //   equal to ==

let number23 = 12;
console.log(
    number23 ==5
); //false

let number3 = 12;
console.log(
    number3 == 12
); //true

let number4 = 12;
console.log(
    number4 == 20
); //false

let number5 = 12;
console.log(
    number5 == "20"
); //false

//            strictly equal to ===

let number6 = 12;
console.log(
    number6 === "5"
); //false

let number7 = 12;
console.log(
    number7 === "12"
); //false

let x11 = 12;
console.log(
    x11 === 20
); //false

let xx = 12;
console.log(
    xx === 12
); //true

//             not equal !=

let xx1 = 12;
console.log(
    xx1 != "5"
); //true

let xx2 = 12;
console.log(
    xx2 != "12"
); //false

let xx3 = 12;
console.log(
    xx3 != 20
); //true

let xx4 = 12;
console.log(
    xx4 != 12
); //false

//                 greater than >

let xx5 = 15;
let yy5 = 25;
console.log(
    xx5>yy5, yy5>xx5
); //false true

let xx6 = 3;
let yy6 = 5;
console.log(
    xx6>yy6, yy6>xx6
); //false true

//               greater than or equal to >=


//                             Logical Operators
/**
 * !  NOT
 * && AND
 * || OR
 * ?? NULL
 */


let bbb = 0; // false
bbb = !bbb // bbb = not false.. TRUE
console.log(typeof bbb, bbb);

let xxx = 1; // true
let yyy = 0; // false
if(xxx && !yyy) {    //and not
    console.log("hello");
}
if(xxx || yyy) {
    console.log("hello");
}

let ax = "Dev Dreamer";
let bx = "";
if (ax || bx) {
    console.log("hello")
}

let cx = "Dev Dreamer";
let dx = "";

if (cx && true && !bx) {
    console.log("hello");
}

let a = -1;
let b = 1;

if (a && b) {
    console.log("hello");
}

//                                   If Statements

//                           If Statemet (single selection)
// if(condition) {
//code to be run if the condition is true
//}

if(true) {
    console.log("The condition is true");
}

if(10 > 1) {
    console.log("The condition is true");
}

//so if the if() is true then it will console.log



//                           If Statement (double selection)


//                                      If Else examples
//single statement examples

var guess = 4;
if(guess===4){
    console.log("You guessed " + guess + " and you are right");
} else {
    console.log("You guessed wrong.")
}

//double statement examples

var guess2;
var message ="";
if(guess2 == 5 || guess2 == 6){
    message = "You guessed" + guess2 + " and you are right";
} else {
    message = "You guessed wrong";
}
console.log(message);

// else if examples

var guess3 = 5;
var message = "";
if(guess==5){
    message = "You guessed "+guess+" and you are right.";
} else if(guess==6 || guess == 4) {
    message="You were close. You guessed the number: "+guess+".";
}else {
    message ="You guessed wrong";
}
console.log(message);


// if(condition) {
//     //cose to be ran if the condition is true
// } else {
//     // code to be ran if condition is false
// }


if(true) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}


let game = "Mario";

if(game === "Sonic") {
    console.log("The condition is true");
} else {
    console.log("the condition is false")
}

//section 12 workbook !f / else

let xcx = 10;
if(xcx===10) {
    console.log("It is a match")
}; //it is a match

//                                      Else If

let roll = 2;

if (roll === 4) {
    console.log("You rolled a four");
} else if (roll === 5) {
    console.log("You rolled a five");
} else if (roll === 6) {
    console.log("You rolled a six");
}  else {
    console.log("You rolled less than four");
}

//                Functions layout see class 06 slides for photo

// Check if value is an even number
function num(value) {
    if (value%2==0) {
        console.log("true");
    } else {
        console.log("false");
    }
}

num(2);

function isEven(value) {
    if (value%2 == 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
}

/**
 * 
 * @param {number} num1 The number to raise
 * @param {number} num2 the number to be raised by
 */

// isEven(2);

function power(num1, num2) {
    return Math.pow(num1, num2);
}
console.log( power(5, 3)); // 5x5x5=125


// prompt("What is your name?", "Name");

// console.log( confirm("Continue?"));

// console.log("Hey i am being logged to the console");
// console.warn("This is a WARNING");
// console.error("This is an ERROR");
// //alertabc("this is an error");

// console.log(
//     "%c Hey i am being logged to the console" ,
//     "color: lime; font-size: 20px; font-weight: bold");

// alert("Js is cool");
// console.log( prompt("What country are you from ?", "Country"));
// console.log(confirm("Continue?"));
// console.log("I am learning JS");

// // functions: functions are objects

// function games() {
//     console.log("Sonic the hedgehog");
//     console.log("Super Mario");
//     console.log("Donkey Kong");
// }

// games();

// let greeting = "Hey there!"; // global variable

// function games() {
//     let title = "Zelda"; // local variable
//     console.log(title, greeting);
// }

// games(); // invoking the function
// console.log(greetings);

// function myName() {
//     let name = "Alex";
//     console.log(name);
// }

// myName();
// myName();
// myName();
// myName();
// myName();

//         functions workbook section 13 commenting


//                                   Math Objects

const PIE = Math.PIE;
console.log(PIE);

console.log(PI.toFixed(2));

let min = Math.max(1, 2, 3, 100, 43, 7, 5000);
console.log(min);

//pow method(power)
let pow = Math.pow(5, 3);
console.log(pow);

let random = Math.random() .toFixed(1);
console.log(random);

console.log(
    Math.floor(5.7)
);
console.log(
    Math.round(5.4)
);


//randomizing 3 numbers and choosing the highest

let num1 = Math.random(1) .toFixed(1)*10;
let num2 = Math.random(1) .toFixed(1)*10;
let num3 = Math.random(1) .toFixed(1)*10;
console.log(num1, num2, num3);

let max = Math.max(num1, num2, num3);
console.log(max);


 function randomIntergers(){
 console.log((Math.floor(Math.random()*100)) % 6+1);
 }
 randomIntergers();
 

/** Math.ciel()
 * used to round rumbers up to a whole number
 * console.log(Math.ciel(7.213)); //8
 * */ 

/** Math.floor()
 * used to round rumbers down to a whole number
 * console.log(Math.ciel(7.213)); //7
 * */ 

/**functions good practice
 * -short functions are better
 * -divide long functions into multiple functions
 * -each function should have a descriptive name
 * -functions should only do one thing
 */
//  

//                               Functions without returns

/**
 * @desc calculates total for order
 * @param {*} quantity 
 * @param {*} price 
 * @returns 
 */
function ordered(quantity, price){
    var total = quantity * price;
    return total;
}
var cost = ordered(3, 5);
console.log(cost); //15



// function expressions

let games1 = function funcName() {
    console.log("Sonic");
    console.log("Mario");
    console.log("Zelda");
};

let anotherWayToCall = games1;
anotherWayToCall();

myFunc();

function myFunc() {
    console.log("My function declaration");
}

let colours = function funcName() {
    console.log("Red");
    console.log("Green");
    console.log("Blue");
}

// colours();
let myColours = colours;
myColours();

function favGame(game) {
    console.log(`My favourtie game is ${game}`);
}

favGame("Sonic 2");
favGame("RuneScape");
favGame("Minecraft");


//                                Functions with returns

function test() {
    return "hello";
    return "goodbye";
}
console.log(test());

let login = function(password) {
    if(password === "test123") {
        return "Successfully logged in" 
    } else {
        return "Password inncorrect. please try again";
    }
};
let result = login("test123");

console.log(result);


let favNum = function(num) {
    if(num === "six") {
    return `My favourite number is ${num}`;
    }
}
let results = favNum("six");
console.log(results);

//or

function favNum2(num) {
    return num;
}
var myFavNum = favNum2(6);

console.log(`My fav number is ${num}`);


function password(a) {
    if (a.length > 8) {
        return console.log("you chose " + a);
    } else {
        return console.log("Not enough letters");
    }
}

password("PurpleRhino123");
password("Circle77");

let name = function(a) {
    if (a.length > 9) { //then
        return console.log("Welcome: " + a); 
     } else {
                return console.log("you inputted incorrect");
            }
        }

name("alexanderguldemet");
name("alex");


//class 07 excersize questions:

// Question 1 
console.log("Question 1");
/**
 * @desc gets the max number of three numbers  provided
 * @param {maxNumberOne} num1 option 1
 * @param {maxNumberTwo} num2 option 2
 * @param {maxNumberThree} num3 option 3
 * @returns  max number 
 */

function maximum(num1, num2, num3){
    return Math.max(num1, num2, num3);
    }
    var maxNumberOne = maximum(12, 18, 3);
    console.log(Math.max(maxNumberOne)); //18
    var maxNumberTwo = maximum(100, 4, 20);
    console.log(Math.max(maxNumberTwo)); //87
    var maxNumberThree = maximum(24, 41, 87);
    console.log(Math.max(maxNumberThree)); //100
    
    console.log(Math.max(maxNumberOne, maxNumberTwo, maxNumberThree));
    //100
    
    

    // Question 2
    console.log("Question 2");
    /**
     * @desc rolls dice to get between 1 and 6
     * @returns {number} where the dice lands
     */
    function diceRoll() {
//         return Math.floor(Math.random() *6) + 1;
//     }
    }
/**
     * @desc rolls dice
     * @param {number} diceNumber where the dice lands
     * @returns results
     */
    function isWinner(diceNumber) {
        if (diceNumber === 4) {
            console.log("Winner");
        }else {
            console.log("You lost")
        }
    }
    var number = diceRoll();
    isWinner(number);
    //You lost
    
    
//Question 3
console.log("Question 3");
    /**
     * @desc logs the chosen fibonacci value
     * @param {number} number where it is
     * @returns fibonacci value series
     */
    function fibonacci(number) {
        if (number === 0 || number === 1)  { // if number is strctly equal to 0 or 1, then return fib #
        return number; 
    } 
    return fibonacci(number - 1) + fibonacci(number - 2);
    }
    var count = fibonacci(6);
    console.log(count); 
    //8
    
  
 //Question 4
 console.log("Question 4");
    /**
     * @desc reads location then capitalizes it
     * @param {string} location 
     * @returns  capitalized location
     */
    function capitalise(location){
        return location.charAt(0).toUpperCase() + location.slice(1);
    }
    
    /**
     * @desc gets location and logs the formatted location and applies string under
     * @param {string} location name
     */
    function checkLocation(location) {
        var locationFormatted = capitalise(location);
        console.log(locationFormatted);
        if (locationFormatted === 'Vancouver') {
            console.log('It is rainy here');
        }
    }
    
    checkLocation('vancouver');
    /**
     * Vancouver
     * It is rany here
    */
    

    console.log("Question 5");
    /**
     * Question 5
    Create your own function question with at least one if/else statement and at least 2 functions
    (one with return and one without a return) and using .toFixed() method and a random whole
    number generator between and including -5 to and not including 6 somewhere. Make sure
    to write the question and answer. Always use camel casing as needed
    
     /**
     * Create a tool that adjusts price with two functions:
     * make adjustment function should generate a random whole number between -5 and 5 and return.
     * show the price after adjustment with second function. (original price with adjustment applied)
     * log the price rounded to 2 decimal places
    */
    /** 
     * @desc gives a random adjusted value between -5 and 5
     * @return {number}  random adjusted value
     */
    
    function newAdjustment() {
        return Math.floor(Math.random() * 11) - 5; //will randomize
    }
    
    /**
     * @desc shows price after adjustment
     * @param {number} price original price
     */
    

    function showAdjustedPrice(price) { //applies adjustment to price
        if(price != 0){
        var adjustedPrice = price + newAdjustment();
        console.log(`The adjusted price is $${adjustedPrice.toFixed(2)}`);}
        else { console.log("The price does not need to be adjusted");
        }
    }

    showAdjustedPrice(33);
    //the adjusted price is $38.00 (will be different every time)
    
    
    console.log("Question 6");
    /**
     * Question 6
    Create your own function question with at least one if/else statement and at least 2 functions
    (one with return and one without a return) and using .toUpperCase() and .slice() somewhere.
    Make sure to write the question and answer. Always use camel casing as needed.
     */
    /**
    build a new site tool for headlines. if it starts with "BREAKING" leav it alone
    if not then the first word should be capitalized and follwed by "BREAKING"
    make a function for breaking news that checks if the headline starts with "BREAKING"
    make a function for the format of headline as param.
    in the function, if headline is "BREAKING" then log as it
    otherwise capitalise the first word of headline and add BREAKING in front of it then log it.
    provide the log results. use .toUpperCase() and .slice() methods
    demonstrate the utility
    */
    
    /**
     * @desc looks for "BREAKING"
     * @param {string} headline current news headline.
     * @return {boolean} true if the headline starts with "BREAKING:", false if not
     */
    function isBreakingNews(headline) {
        return headline.slice(0, 9).toUpperCase() === "BREAKING:";
    }
    
    /**
     * @desc formats headline based on specific
     * @param {string} headline  news headline
     */
    function formatHeadline(headline) {
        if (isBreakingNews(headline)) {
            console.log(headline);
        } else {
            var firstWord = headline.split(' ')[0].toUpperCase();
            console.log("BREAKING: " + firstWord + headline.slice(firstWord.length));
        }
    }
    
    // demonstrating utility
    formatHeadline("world peace achieved today");
    formatHeadline("BREAKING: CITY experiences heavy rainfall");
    
    
    //BREAKING: WORLD peace achieved today
    //BREAKING: CITY experiences heavy rainfall


    //function conversion format - 3 part function

/**
 * manipulate with multiplication
 * @param {*} parameter 
 * @returns 
 */
function functionNameOne(parameter){
    return parameter * 2.5 //with manipulation
}
/**
 * manipulate with division
 * @param {*} parameter 
 * @returns 
 */
function functionNameTwo(parameter){
    return parameter / 2.5 //with other manipulation
}
/**
 * applying manipulation to selected
 * @param {*} p1 
 * @param {*} p2 
 */
function masterFunction(p1,p2){
    var namedFunction;
    if (p1.toUpperCase(1) === "THIS"){
        namedFunction = functionNameOne(p2);
        console.log(namedFunction.toFixed(2));
    } else if (p1.toUpperCase(1) === "THAT"){
        namedFunction = functionNameTwo(p2);
        console.log(namedFunction.toFixed(2));
    }
}

masterFunction("This",1000);
masterFunction("That",1000);




//string manipulation function for inputting numbers with interuptions

/**
 * adjusting time format to add a colon and HRS to the end
 * @param {*} parameter 
 * @returns 
 */
function timeFormat(parameter){
    var formattedTime = "The time is " + parameter.slice(0,2) + ":" + parameter.slice(2,4)+ " HRS"; //string format or syntax with 'concatentaion'
    return formattedTime;
    }
    
    var inputtedTime = "0500";
    
    console.log(timeFormat(inputtedTime));




    // idk how to do this so here is how lol
/**
 * Create a command that will allow the user to answer the question in the terminal. 
 * (You can type in the terminal once you run the file enter in your name and hit enter on your keyboard)
 * This will take a standard input and create a standard output afterwards.
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you? ', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});


/**
 * Different ways to setup functions if you are curious. 
 * However you will always use the first function declaration.
 */

// Function Declaration
function sum1(x, y) {
    return x + y;
};

// Function Expression: ES5
var sum2 = function(x, y) {
    return x + y;
};

// Function Expression: ES6+
const sum3 = (x, y) => { return x + y };

console.log(sum1(2,3));
console.log(sum2(2,3));
console.log(sum3(2,3));

/**
 * setup a function called number check.
 * This function will have a parameter called number
 * 
 * setup the following in the function:
 * if number is 3 then return 0
 * Else if a number greater than 1 return 1
 * else return sentenial value -1
 * 
 * under the function then: 
 * console log out the calling of the function number check with the argument of 3
 * console log out the calling of the function number check with the argument of 2
 * console log out the calling of the function number check with the argument of 1
 * console log out the calling of the function number check with the argument of 0
 */

/**
 * @desc
 * @param {*} number 
 * @returns 
 */
function numberCheck(number) {
    if(number == 3) {
        return 0;
    } else if(number >= 1) {
        return 1;
    } else {
        return -1;
    }
}

console.log(numberCheck(3));
console.log(numberCheck(2));
console.log(numberCheck(1));
console.log(numberCheck(0));


//12-1
var x121 = 10;
if (x121 === 10){
    console.log("It is a match.");
}

//12-2
var x122 = 10;
if(x122 > 5){
    console.log("The value is larger than 5.");
}

//12-3
var x123 = 10;
if(x > 5){
    var VALIDATION = 5;
    console.log(`The value is larger than ${VALIDATION}.`);
} 

//12-4
var guess124 = 2;
if (guess124 == 2){
    console.log(`You guessed ${guess124} and you are right.`);
} else {
    console.log(`You guessed wrong.`);
}

//12-5
var guess125 = 5;
    if (guess125 == 2){
    console.log(`You guessed 2 and you are right.`);
} else {
    console.log(`You guessed wrong`);
}

//12-6
var chosenValue = Math.ceil(Math.random()*3);
if (chosenValue == 0) {
    console.log(`This is the zero value.`);
} if (chosenValue == 1){
    console.log(`This is the one value`);
} if (chosenValue == 2){
    console.log(`This is the second value`);
} else {
console.log(`This is not a number between 0 and 2 inclusive`);
}

//12-7
var date127 = new Date();
var hour127 = date127.getHours();
var sentence127 = "";
if(hour127 < 12){
    sentence127 = `Good Morning.`;
} else if(hour127 < 18){
    sentence127 = `Good Afternoon.`;
} else if(hour127 < 24){
    sentence127 = `Good Evening.`;
} else {
    sentence127 = `Error in time.`;
}
console.log(sentence127);

//12-8
var guess128 = 2;
if (guess128 == 2 || guess128 == 3){
    console.log(`You guessed ${guess128} and you are right.`);
} else {
    console.log(`You guessed wrong.`);
}
//12-9
var guessOne129 = 2;
var guessTwo129 = Math.floor(Math.random()*3);
var sentence129 = ``;
if(guessOne129 == 2 && guessTwo129 != 1){
    sentence129 = `Your first guess is ${guessOne129}. Your second guess is ${guessTwo129}. You got it right.`;
} else {
    sentence129 = `You guessed wrong`;
}
console.log(sentence129);

//12-10
var guessOne1210 = 2;
var guessTwo1210 = Math.floor(Math.random()*3);
var sentence1210 = "";
if(guessOne1210 == 2 && guessTwo1210 != 1){
    `Your first guess is ${guessOne1210}. Your second guess is ${guessTwo1210}. You got it right`;
} else {
    sentence1210 = `You guessed wrong.`
}
console.log(sentence1210);

//12-11
var firstName1211 = `Steve`;
var age1211 = 14;
var country1211 = `Canada`;
var message1211 = "";
var MINIMUM_AGE = 16;
var LAW_IN_COUNTRY = `Canada`;
if(age1211 >= MINIMUM_AGE && country1211 === LAW_IN_COUNTRY){
    message1211 = `You are able to get your license.`;
} else { 
    message1211 = `You are too young.`
}
console.log(message1211); //You are too young.

//13 functions

//13-1-1



function chipBox(
    optionOne = `Doritos`,
    optionOneNumber = 5,
    optionTwo = `Pringles`,
    optionTwoNumber = 4)
{
var optionTotalNumber = optionOneNumber + optionTwoNumber;
 return `I have ${optionOneNumber} ${optionOne} and ${optionTwoNumber} ${optionTwo}. This gives me a total of ${optionTotalNumber} chips.`;
}
var chips131 = chipBox();
console.log(chips131); //I have 5 Doritos and 4 Pringles. This gives me a total of 9 chips.  

//13-2-1

function myFunction132(a1321, b1321){
return a1321 * b1321;
}
var x1321 = myFunction132(5, 10);
console.log(x1321);//50

//13-2-2

/**
 * @desc 
 * @param {*} quantity132 
 * @param {*} price132 
 * @returns 
 */
function myShoppingList(quantity132=4, price132=12){
return quantity132 * price132;
}
var shopping = myShoppingList();
console.log(shopping); //48

//13-2-3
/**
 * @desc no idea
 * @param {*} b1323 
 * @param {*} a1323 
 * @returns 
 */
function myFunction(b1323 = 6, a1323 = 5){
    return a1323*b1323
}
var x1323 = myFunction();
console.log(x1323); //30

function addingFive(x1323, d1323=5){
addedVar = x1323 + d1323;
}
var z1323 = addingFive();
console.log(z1323);//undefined, question is scuffed


//13-2-6

function sentenceFunction(name, age){
return `My name is ${name} and I am ${age} years old.`
}
var personOne = sentenceFunction(`George Smith`, `25`);
console.log(personOne);


//13-2-7


//midterm



var width = 10;
var height = 5;
var depth = 5;

var cube = width * height * depth;
console.log(cube); //250 


//3
/**
 * @desc showing funds in wallet
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function divides(x, y){
    return y % x === 0
}
var wallet = 10.00;
var sentence = `The wallet has $${wallet.toFixed(2)} in total.`;
console.log(sentence); //The wallet has $10.00 in total.

//4
/**
 * @desc assigning age to the pet
 * @param {*} petName 
 * @param {*} age 
 * @returns 
 */
function checker(petName, age){
    if (age > 10){
        return petName + " is " + age + " and is a senior."
    } else if (age == 1 || age == 2){
        return petName + " is " + age + " and is a puppy."
    } else {
        return petName + " is average."
    }
}
var pet = checker(`Bob`, Math.round(Math.random) * 15);
console.log(pet); //Bob is average

//6
var first = 10;
var second = 16;
var third = 15;

console.log(first > second || second > third);

//8

var cardboardBoxOne = 15;
var cardboardBoxTwo = 12;
var cardboardBoxThree = 20;
var average = (cardboardBoxOne + cardboardBoxTwo + cardboardBoxThree) / 3
console.log(average.toFixed(2)); //15.67



//                                              Arrays

//1
var supers = ['Superman', 'Batman', 'Flash', 'Aquaman', ['good', 'evil', 'neutral']]; //0, 1, 2, 3, [Array in an array]

supers[2] = 'Wonder Woman'; // replacing value 2
delete supers[0]; // delete a value

console.log(supers[4][2]);


//2
var countries = ['Canada', 'United States', 'Mexico'];

countries[3] = 'Turkey';

console.log(countries);


//3
var colors = ['red', 'green', 'blue', ['magenta', 'cyan', 'yellow']];

console.log(colors[3][2]);