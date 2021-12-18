// create the calculator boarder 
// create buttons for different functions 
// make the functions work once clicked on 
// make the result of the function appear on the screen 
// make a clear button that wont accept the previous inputs
// make the calculator enjoyable but make it work !!!
const calculator = document.querySelector('.calculator');

const inputBox = document.createElement('div');
inputBox.setAttribute('class', 'inputBox');
inputBox.setAttribute('data', 1);
calculator.appendChild(inputBox);

const box1 = document.createElement('div');
const box2 = document.createElement('div');
const box3 = document.createElement('div');
const box4 = document.createElement('div');
const box5 = document.createElement('div');
const box6 = document.createElement('div');
const box7 = document.createElement('div');


const button = document.querySelector('button');
// Grab a reference to a bunch of elements using document.querySelectorAll
const buttons = document.querySelectorAll('button')

const output = document.querySelector('.output')
//Create an event once i click the button 


for(let i = 0; i < buttons.length; i ++){
buttons[i].addEventListener('click', () => {
    output.innerText += buttons[i].innerText;
    })
}
