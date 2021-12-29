// create the calculator boarder 
// create buttons for different inputs 
// make the buttons show the input once clicked 
// make the result of 2 inputs appear on the screen 
// create a clear button that will erase the data that was input 
// create a equal button that will output the whatever was clicked 
// create a funtion for solving the problem created
// make the calculator enjoyable but make it work !!!

const calculator = document.querySelector('.calculator');
// declaring a variable(numInput) setting it equal to all numbers with the class of number 
const numInput = document.querySelector('.number')
const clearButton = document.querySelector('.clear');
const button = document.querySelector('button');
// Grab a reference to a bunch of elements using document.querySelectorAll
const buttons = document.querySelectorAll('button')
const output = document.querySelector('.output') 
const equalSign = document.querySelector('.equal')

//for loop going over all the buttons 
for(let i = 0; i < buttons.length; i ++){
// adding an evevnt once clicked it will output the button clicked to the display screen 
buttons[i].addEventListener('click', () => {
  output.innerText += buttons[i].innerText;
  })
}

// creating a function for the clear button
function clearInput(){
  //set the output equal to an empty string 
  output.innerText = ''
}
// created and event once clicked will clear the calculator screen
clearButton. addEventListener('click', clearInput)
//created a similar function for the equal sign 
function equalInput(){
  //set the output text to equal the solving function and return the answer in on the calculator screen
  output.innerText = solving(output.innerText)
}
//Added an event once equal sign is clicked it will display the answer of the math problem 
equalSign.addEventListener('click', equalInput)

//Creat a funtion that will output the ansewer of the chosen numbers using the
function solving(numInput){
//created a for loop to constantly look for one of the following inputs
for(let i = 0; i < numInput.length; i++){
  //created an if statement for the first condition 
  if(numInput[i] === '+'){
    //create a variable that turns the numbers into a string and splits it with the + sign 
    let add = numInput.split('+')
    // return the first integer(add[0]) plus the second integer
    return(parseInt(add[0])+parseInt(add[1]))
    }else if(numInput[i] === '-'){
      let subtract = numInput.split('-')
      return(parseInt(subtract[0])-parseInt(subtract[1])) 
    }else if(numInput[i] === '/'){
      let divide = numInput.split('/')
      return(parseInt(divide[0])/parseInt(divide[1]))
    }else if (numInput[i] === '*'){
      let multiply = numInput.split('*')
      return(parseInt(multiply[0])*parseInt(multiply[1]))
    }
  }
}

