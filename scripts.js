
var name;

var blankChecker = function blankChecker(){
    if(name === ''){
        name  = prompt('What is your name, for real this time?');

        blankChecker();
    }
};

var nameChecker = function nameChecker(){
    name  = prompt('What is yo name cuh cuh?');

    blankChecker();

    
    document.querySelector('h1').textContent = `Hello, ${name}`;
};


nameChecker();


