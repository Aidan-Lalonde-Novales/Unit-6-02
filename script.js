// JS that randomly generates a number from 1-6 and checks if the user guessed it correctly.

document.getElementById('submitbutton').addEventListener('click', numberChecker)

function numberChecker () {
  const preUserNumber = document.getElementById('usernumber').value // Makes the value of the textbox into a variable
  const userNumber = parseInt(preUserNumber) // Converts to interger
  if (userNumber > 0) {
    document.getElementById('result').innerHTML = 'Positive!'
  } else if (userNumber === 0) {
    document.getElementById('result').innerHTML = 'Neither! It is a Zero!'
  } else {
    document.getElementById('result').innerHTML = 'Negative!'
  }
}
