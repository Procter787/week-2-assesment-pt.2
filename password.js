console.log("Welcome to the password validator tool!");
console.log("Please enter a password")
function passwordValidator(password1){
  console.log(password1.length)
  if (password1.length < 10){
    console.log("password is to short")
  } else {console.log("password was succesful")
  }
}

passwordValidator("password1");