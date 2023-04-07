// Assignment Code
var passwordLength = 128;
var selections =[]

var numbers = [1,3,4,5,6,7,8,9,0];
var specialCharacters = ["@","#","%","$","&","?","*","!"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","u","x","y","z"];






function prompts(){
    selections =[]

    passwordLenght = parseInt(prompt("How many charaters would you like your passwrod to be? (Between 8 -128)"))
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128  ){
        alert("Password length has to be between 8 - 128 characters");
        return false;
    }
    if (confirm("Would you like numbers in your password")){
        selections = selections.concat(numbers);
    }

    if (confirm("Would you like special characters in your password")){
        selections = selections.concat(specialCharacters);
    }

    if (confirm("Would you like uppercase letters in your password")){
        selections = selections.concat(uppercaseLetters);
    }

    if (confirm("Would you like lowercase letters in your password")){
        selections = selections.concat(lowercaseLetters);
    }
    return true;
}

var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var password ="";
   for (var x = 0; x < passwordLength; x++){
    var randomChoice = Math.floor(Math.random() * selections.length);
password = password + selections[randomChoice];
   }

   return password;
   
}generateBtn.addEventListener("click", writePassword);

function writePassword() {
   var truePrompts =  prompts();

   if (truePrompts){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
   }
}
