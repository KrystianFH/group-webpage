'use strict'

alert("Hello")

confirm("I am going to ask you a few questions, OK?")



var favorite = prompt('What is your favorite meal of the day, breakfast, lunch, or dinner?')
var welcome;
if (favorite === "breakfast") {
    welcome = "Welcome to our site! Click the Breakfast link to start with breakfast!";
} else if (favorite = "lunch") {
    welcome = "Welcome to our site! Click the Lunch link to start with lunch!";
} else if (favorite = "dinner") {
    welcome = "Welcome to our site! Click the Dinner link to start with dinner!";
} else {
    alert = "Sorry, that answer didn't match the selections";
}

alert(welcome)
    // document.write(welcome);