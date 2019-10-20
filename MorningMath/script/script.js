var results = document.querySelector('.resultsText');
var excersiseTable = document.querySelector('#table');

var excersises = 10;
var firstNumber = document.querySelectorAll('.firstNumber .row');
var operator = document.querySelectorAll('.operator .row');
var secondNumber = document.querySelectorAll('.secondNumber .row');
var cA = document.getElementById('correctAnswers');
var rightAnswers="";
var exec;
var answer = document.querySelectorAll('.answer');
var correctAnswers = 0;

var operatorChoice = "";
var operatorIndex;
var plus = "+";
var minus = "-";
var multiply = "*";



var generateButton = document.getElementById('generateButton');
var submitButton = document.getElementById('submitButton');


generateButton.addEventListener('click' , generateNumbers);
submitButton.addEventListener('click' , submit);




function generateOperator(){

  operatorIndex = Math.floor((Math.random() * 3) + 1);
  if(operatorIndex===1){
    operatorChoice = plus;
  }else if (operatorIndex===2) {
    operatorChoice = minus;
  }else if (operatorIndex===3) {
    operatorChoice = multiply;
  }
  return operatorChoice;
};

function generateNumbers() {
  submitButton.style.display="block";

  generateButton.style.display ="none";

  excersiseTable.style.display = "flex";


    for ( var i=0; i<firstNumber.length ; i++ ){
      firstNumber[i].textContent = Math.floor((Math.random() * 100) + 1);
    };

    for ( var i=0; i<operator.length ; i++ ){
      operator[i].textContent = generateOperator();
    };

    for ( var i=0; i<secondNumber.length ; i++ ){
      secondNumber[i].textContent = Math.floor((Math.random() * 100) + 1);
    };
};

function calculator(firstNumber, operator, secondNumber) {
    if (operator.textContent === "+") {
      exec = parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent);
    }else if (operator.textContent === "-") {
      exec = parseInt(firstNumber.textContent) - parseInt(secondNumber.textContent);
    }else if (operator.textContent === "*") {
      exec = parseInt(firstNumber.textContent) * parseInt(secondNumber.textContent);
    };
    return exec;
  };

//Not functioning
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function storeRightAnswers(){

  for(var i=0; i<excersises; i++){
  rightAnswers =  parseInt(calculator(firstNumber[i],operator[i],secondNumber[i]));
    if(parseInt(rightAnswers)===parseInt(answer[i].value)){
            correctAnswers +=1 ;
    };
  };
};


  function submit(){
    storeRightAnswers();
    results.style.display = "block";
    cA.textContent = correctAnswers;
    submitButton.style.display = "none";
  };
