'use strict'

var ableToEat = false;

    function askUserName(){
        var internalUserName = prompt('Hi there! What is your name?');
        document.write('<h2>' + 'Welcome '+ internalUserName + '</h2>');
        
        return internalUserName;
    }
        
    
    function confirmContinue(userName){
        confirm(userName + " , I am going to ask you a few questions about food");
    }
    
    function preference(){
        var preference;
        preference = prompt('Are you a vegan?');
        return preference
    }
    
    function checkPoint(preferenceQuestion){
        if(preferenceQuestion === 'yes'){
            alert('No problem, all of the animal products in each recipe can be replaced with your favorite meatless alternatives!');
            ableToEat = false;
        } else {
            alert('Fantastic! Our recipes are not either!');
            ableToEat = true;
        }
    }

    function foodTest() {     
        var answer = 22;
        for(var i = 0; i < 10; i = i + 1){
            var userAnswer = prompt("Please guess a number between 1 and 100");
            if(parseInt(userAnswer) ===  answer){
                alert('You win the right to make all of these recipes as many times as you wish!')
                ableToEat = true; 
                break;
                } else {
                alert("Wrong Answer. Try again")
            }
        }
        if(i > 9){
            ableToEat = false;
        }
    }
    
    var externalUserName = askUserName();
    var preferenceQuestion = preference();
    checkPoint(preferenceQuestion);
    foodTest();
