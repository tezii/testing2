/**
 * In Class Problems
 * 
 */
// Question 1
/**
 * setup a function called basket
 * This function takes one parameter called `item`
 * setup a if/else statement in this function
 * check to see if the item is equal to: rocks
 * if it is then console log out: Not good
 * else then console log out the sentence:
 * __item__ are good.
 * Make sure the first letter in item is capitalized
 * 
 * call the function basket which passes the value of candies in all lowercase
 * Write a function comment with the @desc and @param
 */

/**
 * @desc A function that evaluates if a given item is "rocks" or something else.
 * @param {string} item - The name of the item to evaluate.
 */
function basket(item) {
    var capitalItem = item.charAt(0).toUpperCase() + item.slice(1);
    if (item == "rocks") {
        console.log("Not good");
    } else {
        console.log(capitalItem + " are good.");
    }
}

basket("candies");


// Question 2
/**
 * set up a function called clock that has the parameter: hour
 * in the function setup if/else statements:
 * if the hour is less than 12 and greater than or equal to 0. Then console log out Good Morning.
 * If the hour is less than 18 then console log out: Good Afternoon
 * else if the hour is less than 24 then console log out Good Evening
 * else then console log out Wrong Time
 * Write a function comment with the @desc and @param
 * 
 * call the function clock with the following values one-by-one 
 * (this means you will call the function multiple times)
 * 6
 * 14
 * 22
 * 30
 * dynamically grab the current time using Date()
 */
/**
 * @desc calls good afternoon when its noon
 * @param {*} hour 
 */

function clock(hour){
    if(hour > 12 && hour >= 0) {
        console.log("Good Morning");
    } if(hour < 18) {
        console.log("Good Afternoon");
    }else if(hour > 24) {
        console.log("Wrong Time");
    }
}
clock(6);
clock(14);
clock(22);
clock(30);
Date();

// Question 3
/**
 * setup a function called music that has one parameter called: genre
 * assign genre to make genre all lower case
 * initialise the variable `go to` to an empty string
 * 
 * then setup a if/else statement with the following:
 * if genre is equal to country or jazz (all lower case). If it is then assign go to, to the value of Cafe
 * else if genre is pop or rock (all lower case). If it is then assign go to, to the value of Arena
 * 
 * under the if/else statements but still in the function then console log go to
 * 
 * under the function call the function music with the following values (first letter uppercase):
 * Jazz
 * Pop
 * add a multiline comment above the function
 */

function music(genre){
genreLowercase = genre.toLowerCase();
var goTo = ""; 

if(genreLowercase === "country" || genreLowercase === "jazz"){
    goTo = "Cafe";
} else if (genreLowercase === "pop" || genreLowercase === "rock") {
    goTo = "Arena";
}
console.log(goTo);
}

music("Jazz");
music("Pop");


// Question 4
/**
 * Setup a variable with a magic number called minimum number to the value of 3
 * 
 * setup a function called picnic that takes who parameters of: number and diet
 * setup a if/else statement with the following:
 * 
 * if diet is equal to vegitarian. 
 * Within this if statement check if number is greater than the minimum number. 
 * If it is then console log: Get a veggie platter
 * else then console log: Get a Tofu Stir-Fry
 * 
 * else if is equal to meat.
 * Within this else if statement check if number is greater than minimum number.
 * If it is then console log: Get subway
 * Else then console log: Bring steak
 * 
 * then under the function call the function picnic with the following parameter values:
 * 2, vegitarian
 * 4, meat
 * add a multiline comment above the function
 */

var MINIMUM_NUMBER = 3;
function picnic(number,diet){
    if(diet === "vegetarian")
    if( number > MINIMUM_NUMBER){
        console.log("Get a veggie platter");
    } else {
    console.log("Get a Tofu Stir-Fry")
    }
    else if(diet==="meat")
    if(number > MINIMUM_NUMBER){
        console.log("Get subway");
    } else {
        console.log("Bring steak");
    }

    }
picnic(2, "vegetarian");
picnic(4, "meat");


// Question 5 - write your own function problem + answer



// Question 6 - write your own function problem + answer




// Question 7 - write your own function problem + answer



// Question 8 - write your own function problem + answer - complex



// Question 9 - write your own function problem + answer - complex






