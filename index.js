const form = document.getElementById("sign-up-form");
const fName = document.getElementById("first_name");
const lName = document.getElementById("last_name");
const email = document.getElementById("user_email");
const phone_number = document.getElementById("phone_number");
const password = document.getElementById("user_password");
const password2 = document.getElementById("confirm_password");
const small2 = document.getElementById("format");
const password_error = document.getElementById("password-error");


form.addEventListener("focusout", event => {

  if (event.target == fName) {
    checkFirstName();
  } else if (event.target == lName) {
    checkLastName();
  } else if (event.target == email) {
    checkEmail();
  } else if (event.target == phone_number) {
    checkPhoneNumber();
  } else if (event.target == password) {
    checkPassword();
  } else if (event.target == password2) {
    checkPassword2();
  }



})

//Check First Name
function checkFirstName() {
  const fNameValue = fName.value.trim();

  if (fNameValue === "") {
    setErrorFor(fName, "First Name cannot be blank");
  } else {
    setSuccessFor(fName);
  }

}

//Check Last Name
function checkLastName() {
  const lNameValue = lName.value.trim();
  if (lNameValue.length == 0) {
    removeSuccessFor(lName);
  } else {
    setSuccessFor(lName);
  }

}



//Check Email
function checkEmail() {
  const emailValue = email.value.trim();
  if (emailValue.length == 0) {
    setErrorFor(email, "Email cannot be blank");
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    setSuccessFor(email);
  } else {
    setErrorFor(email, "Please enter a valid email address");
  }
}

//Check Phone Number
function checkPhoneNumber() {
  const phone_numberValue = phone_number.value.trim();;
  if (phone_numberValue == 0) {
    removeSuccessFor(phone_number);
    removeErrorFor(phone_number);
  } else if (/^(?:\W*\d){11}\W*$/.test(phone_numberValue)) {
    setSuccessFor(phone_number);
  } else {
    setErrorFor(phone_number, "Please enter a valid phone number");
  }
}


//Check Password
function checkPassword() {
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (passwordValue == 0){
    setErrorFor(password, "Password cannot be blank");
    password_error.style.visibility = "hidden";
  } else if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordValue) == false){
   setErrorFor(password, "");
   password_error.style.visibility = "visible";
  } else if(password2Value == 0){
    removeErrorFor(password);
    password_error.style.visibility = "hidden";
  } else if(passwordValue !== password2Value) {
    removeSuccessFor(password);
    password_error.style.visibility = "hidden";
    setErrorFor(password2, 'Passwords does not match');
  } 
}

function checkPassword2() {
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if(password2Value == 0) {
    setErrorFor(password2, 'Password confirmation cannot be blank');
  } else if(passwordValue !== password2Value) {
    removeSuccessFor(password);
    setErrorFor(password2, 'Passwords does not match');
  } else if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordValue) == false){
    setErrorFor(password, "");
    password_error.style.visibility = "visible";
  }else{
    setSuccessFor(password);
    setSuccessFor(password2);
  }

}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".error-text");
  formControl.className = "input error";
  small.innerText = message;
    if (input == phone_number){
    small2.style.visibility = "hidden";
  }
}


function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input success";
  if (input == phone_number){
    small2.style.visibility = "hidden";
  }
}

function removeSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");

}

function removeErrorFor(input){
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  if (input == phone_number){
    small2.style.visibility = "visible";
  }

}