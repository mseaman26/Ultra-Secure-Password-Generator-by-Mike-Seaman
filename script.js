// Assignment Code

//global variable declaratios

//this one was provided by the starter code
var generateBtn = document.querySelector("#generate");
var passwordLength 
//these next four refer to the user’s choices regarding what types of characters they want in their password
var wantsLowerCase = false
var wantsUpperCase = false
var wantsNumbers = false
var wantsSpecialChars = false
//the variable that will eventually be the final password, initialized to an empty string
var password = ''

//I created four arrays, one for each type of character

//I didn’t know to algorithmically generate this array, so I just wrote it out
var lowerCaseArray = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//I had learned a little bit about arrow syntax from codecademy, and I used google to help me algorithmically write the upper-case letters array
var upperCaseArray = lowerCaseArray.map(element =>{
  return element.toUpperCase()
})
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//again, I manually wrote out this array.  It didn't take that long, but required a little bit of cleverness regarding some characters that affect strings
var specialCharsArray = [" ","!",`"`,"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
//initializing the array that the password will be choosing characters from.  It will eventually be an array of arrays
var passwordArray = []              
//function declarations

// This is the function that takes the user through the prompts that will lead to a valid password length being chosen
function getAndValidatePaswordLength(){ 
 
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
//the next four functions are simple, just setting boolean values in accordance to what categories of characters the user wants in their password
function checkIfWantsLowerCase(){
  wantsLowerCase = confirm("Do you want your password to include lower case letters?")
}
function checkIfWantsUpperCase(){
  wantsUpperCase = confirm("Do you want your password to include upper-case letters?")
}
function checkIfWantsNumbers(){
  wantsNumbers = confirm("Do you want your password to include Numbers?")
}
function checkIfWantsSpecialChars(){
  wantsSpecialChars = confirm("Do you want your password to include special characters?")
}
//This function is where the previous four functions are called and it makes sure that the user selected at lease one category of characters for their password
//it will take the user back to the beginning of category selection if they failed to chose at least one
function verifyPasswordChars(){
  checkIfWantsLowerCase()
  checkIfWantsUpperCase()
  checkIfWantsNumbers()
  checkIfWantsSpecialChars()
  if(!wantsLowerCase && !wantsUpperCase && !wantsNumbers && !wantsSpecialChars){
    alert("your password must contain at least ONE of the character types, try again")
    verifyPasswordChars()
  }
}
//now that we have the info we need to make a valid password, we begin!
function generatePassword(){
  for(var i = 0; i < passwordLength; i++){
    //"chooseChar" chooses a character from the available character categories. It is declared below
    password = password+chooseChar()
  }
  return password
}
//This function returns an array of arrays.  Each inner array is a list of all the available characters within a selected category. Here we use the .push() method
function makePasswordArray() {
  var array = []
  if(wantsLowerCase){
    array.push(lowerCaseArray)
  }
  if(wantsUpperCase){
    array.push(upperCaseArray)
  }
  if(wantsNumbers){
    array.push(numArray)
  }
  if(wantsSpecialChars){
    array.push(specialCharsArray)
  }
  return array

}
//this function chooses each individual character in the password.  I wanted to give equal weight to each available character category, so that the password wouldn't be dominated by the categories that have longer arrays, such as "special characters"
function chooseChar(){
  //declares a local variable for this particular password
  var passwordArray = makePasswordArray()
  //This line selects an index in passwordArray, which refers to another array nested inside.  These nested arrays represent character categories. A random category is selected by generating a random number that corresponds to the indexes of passwordArray
  var charCategory = Math.floor(Math.random()*passwordArray.length);
  // This was the hardest line of code for me to write in this project.  It takes the selected category number and uses it as an index in passwordArray.  Then another random number is generated to select a character within that nested array
  var char = passwordArray[charCategory][Math.floor(Math.random()*(passwordArray[charCategory].length))];
  return(char);
  
}
// Write password to the #password input
//below is where all our fun code gets executed and eventually the password is displayed in the browser using the pre-written code
function writePassword() { 
  getAndValidatePaswordLength()
  verifyPasswordChars()
  password= generatePassword();
  //this line was provided by my istructor(s)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  //re-initializes the password variable
  password = ''
}

// Add event listener to generate button
//clicking the button will be what executes all the code written above by calling writePassword. It is technically the only function that called by the user (as opposed to being called by another function)
generateBtn.addEventListener("click", writePassword);
