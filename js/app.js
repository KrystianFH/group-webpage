'use strict'


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
        } else {
            alert('Fantastic! Our recipes are not either!');
        }
    }

    
    
    
    var externalUserName = askUserName(); // value of internalUserName not the variable name
    confirmContinue(externalUserName);  // this is passing an argument
    var preferenceQuestion = preference();
    checkPoint(preferenceQuestion);
