
# Ultra-Secure-Password-Generator-by-Mike-Seaman

This project is an application that generates a random password that fulfills certain criteria selected by the user.  The user simply clicks the big red button and follows the instructions in the following prompts to generate their password!  First they are asked to choose a valid password length.  Then the user chooses at least one of the following character categories for their password: lower-case letters, upper-case letters, numbers, and special characters. This was a fun and challenging project, working entirely within a JavaScript file.  

## Video of the application
<img src="./assets/PW_Gen.gif" width=800px alt="gif of a demonstration of the password generator app">

## Link to the deployed application
https://mseaman26.github.io/Ultra-Secure-Password-Generator-by-Mike-Seaman/

## Languages used
This project was entirely worked on in javascript.  There was some starter HTML and CSS code (as well as some starter code in JS). 

## Notable Features
- A button listener
- Alerts, Confirms, and Prompts
- Generation of randomized data that adheres to parameters set by the user
- password generation that gives theoretically equal representation to the character categories selected by the user.

## Notable Methods
- Function declarations and calls
- Global and local variables
- If/then statements
- "for" loops
- Work with arrays including methods and nested arrays

## My favorite part of my code in this project
The function for selecting each character in the password was a fun little puzzle.  It's a short function, but I like it. It's kind of the heart of this whole project. This involved an array containing more arrays (which is the argument "arr" in this case). It involved choosing characters from the nested arrays, each representing a category of characters that is allowed by the user to be in the password.  The line where the variable "char" is defined (line 36)required me to use a pen and paper.
```Javascript
function chooseChar(arr){
  //This line selects an index in passwordArray (which is a variable that exists in the generatePassword function), which will refer to another array nested inside.  These nested arrays represent character categories. A random category is selected by generating a random number that corresponds to the indexes of passwordArray
  var charCategory = Math.floor(Math.random()*arr.length);
  // This was the hardest line of code for me to write in this project.  It takes the selected category number and uses it as an index in passwordArray.  Then another random number is generated to select a character within that nested array
  var char = arr[charCategory][Math.floor(Math.random()*(arr[charCategory].length))];
  return(char);
  
}
```
## Another section of code that was interesting to me
I decided to create separate alerts for different scenarios when the user is inputting their desired password length.  These included: 
- the user types nothing at all
- the user types something that isn't a number
- the user types a number, but it isn't within the range required for a valid password length
The way I used the parseInt function was strange, but it was the only thing that worked for me at the time
```JavaScript
function getAndValidatePaswordLength(){ 
    //store the user response to the length prompt into a variable
    passwordLength = (prompt("plase select a password length.  It must be between 8 and 128 characters long")) 
    // In order to make distinct prompts for when the user types nothing and for when the user types a non-number, 
    // I had to make a separate parsed variable.  At least, that was what worked for me
    parsedPasswordLength = parseInt(passwordLength)
    //If the user types nothing at all
    if(!passwordLength){
      alert("You didn't type anything.  Try again. Type a length for your password that is between 8 and 128")
      //takes the user back to the beginning of the function if their length choice is invalid
      getAndValidatePaswordLength()
      //if the user types a non-number
    } else if(isNaN(parsedPasswordLength)){
      alert("the length must be a number. Try again, make sure it's between 8 and 128")
      getAndValidatePaswordLength()
      //if the user types a number that is outside the desired range
    }else if (parsedPasswordLength < 8 || parsedPasswordLength > 128) {
      alert("password must be between 8 and 128 characters")
      getAndValidatePaswordLength()
    }
  
}
```

##Learning points from this project
There was a TON of learning during the completion of this project.  Some key learning points included
- Learning to keep code as organized as possible throughout the process
- Typing pseudo code into VS code using comments, as well as using a pen and paper at times
- All kinds of JavaScript and programming logic, such as variables, scope, function declarations and calls, many methods, and more
- I learned to detect when it's a good time to take a break and I learned that the solution can suddenly pop out at you after a healthy break
- became reaquainted with the satisfaction of making a program work!

## By Mike Seaman
