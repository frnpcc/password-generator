const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.querySelector("#generate-btn")
let passwordElOne = document.querySelector("#password-one")
let passwordElTwo = document.querySelector("#password-two")

generateButton.addEventListener("click", function () {
  console.log("clicked")
  let passwordOne = generatePassword()
  let passwordTwo = generatePassword()
  passwordElOne.textContent = passwordOne
  passwordElTwo.textContent = passwordTwo
} )

function randomIndex() {
  return Math.floor( Math.random() * characters.length )
}

function generatePassword() {
  let password = ""
  for (let i = 0; i < 15; i++) {
    password += characters[randomIndex()]
  }
  return password
}
