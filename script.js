// Assignment Code
//global variable declaratios
var generateBtn = document.querySelector("#generate");
var passwordLength 
var wantsLowerCase = false
var wantsUpperCase = false
var wantsNumbers = false
var wantsSpecialChars = false
var password = ''
//I didn’t know how to algorithmically generate this array, so I just wrote it out
var lowerCaseArray = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//I had learned a little bit about arrow syntax from codecademy, and I used google to help me algorithmically write the capital letters array
var upperCaseArray = lowerCaseArray.map(element =>{
  return element.toUpperCase()
})
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//
var specialCharsArray = [" ","!",`"`,"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]

var passwordArray = []
//function declarations

//Yes I'm aware that I wrote "Validify" in the funtion title.  Oh well
function getAndValidifyPasswordLength(){ 
 
    passwordLength = (prompt("plase select a password length.  It must be between 8 and 128 characters long")) 
    parsedPasswordLength = parseInt(passwordLength)
    if(!passwordLength){
      alert("You didn't type anything.  Try again. Type a length for your password that is between 8 and 128")
      writePassword()
    } else if(isNaN(parsedPasswordLength)){
      alert("the length has got to be a number. Try again, make sure it's between 8 and")
      getAndValidifyPasswordLength()
    }else if (parsedPasswordLength < 8 || parsedPasswordLength > 128) {
      alert("password must be between 8 and 128 characters")
      getAndValidifyPasswordLength()
    }
  
}
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
function generatePassword(){
  for(var i = 0; i < passwordLength; i++){
    password = password+chooseChar()
  }
  return password
}
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
function chooseChar(){
  var passwordArray = makePasswordArray()
  var charCategory = Math.floor(Math.random()*passwordArray.length);
  var char = passwordArray[charCategory][Math.floor(Math.random()*(passwordArray[charCategory].length))];
  return(char);
  
}
// Write password to the #password input
function writePassword() {
  
  ///present series of prompts
    //prompt length question (8-128) and check to make sure lengh is valid
getAndValidifyPasswordLength()
verifyPasswordChars()
// generatePassword()

// chooseChar()
// for(1 = 0; 1 < 20; i++){
//   chooseChar()
// }
password= generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
password = ''
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
