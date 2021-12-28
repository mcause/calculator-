// create the calculator boarder 
// create buttons for different functions 
// make the functions work once clicked on 
// make the result of the function appear on the screen 
// make a clear button that wont accept the previous inputs
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

//Creat a funtion that will output the ansewer of the chosen numbers 
function solving(numInput){
//creatred a for loop to look to constantly look for one of the following inputs
for(let i = 0; i < numInput.length; i++){
  //created an if statement for the first condition 
  if(numInput[i] === '+'){
    //create a variable that turns the bumbers into a string and splits it with the + sign 
    let add = numInput.split('+')
    // return the first number(add[0]) and by using parseInt turns the string back to a number 
    return(parseInt(add[0])+parseInt(add[1]))
    }else if(numInput[i] === '-'){
      let minus = minus.split('-')
      return(parseInt(minus[0])-parseInt(minus[1]))
    }else if(numInput[i] === '/'){
      let divide = numInput.split('/')
      return(parseInt(divide[0])/parseInt(divide[1]))
    }else if(numInput[i] === '*'){
      let add = numInput.split('*')
      return(parseInt(multiply[0])*parseInt(multiply[1]))
    }
  }
}



// make an equal sign 
// once clicked it returns the sum of the math problem
  // if clicked again it add the last number to that sum 


// make a clear button that clicked 1 time 
  // clears the previous input 
  // if clicked twice it clears all of the data

  