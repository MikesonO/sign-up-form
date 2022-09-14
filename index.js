const form = document.getElementById("sign-up-form");
const fName = document.getElementById("first_name");
const lName = document.getElementById("last_name");
const email = document.getElementById("user_email");
const phone_number = document.getElementById("phone_number");
const password = document.getElementById("user_password");
const password2 = document.getElementById("confirm_password");


form.addEventListener("focusout", event => {

  if(event.target==fName){
    checkFirstName();
  } else if (event.target == lName){
    checkLastName();
  } else if (event.target == email){
    checkEmail();
  }
  
  

})

//Check First Name
function checkFirstName(){
  const fNameValue = fName.value.trim();

  if(fNameValue === "") {
		setErrorFor(fName, "First Name cannot be blank");
	} else {
		setSuccessFor(fName);
	}

}

//Check Last Name
function checkLastName(){
  const lNameValue = lName.value.trim();
  if(lNameValue.length == 0){
    removeSuccessFor(lName);
  } else {
    setSuccessFor(lName);
  }

}

//Check Email
  function checkEmail(){
    const emailValue = email.value.trim();
    if(emailValue.length == 0){
      setErrorFor(email, "Email cannot be blank");
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){
      setSuccessFor(email);
    } else {
      setErrorFor(email, "Please enter a valid email address");
    }
  }









function checkInputs() {
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const phone_numberValue = phone_number.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();


	if(fNameValue === "") {
		setErrorFor(fName, "First Name cannot be blank");
	} else {
		setSuccessFor(fName);
	}


  if(lNameValue !== "") {
    setSuccessFor(lName);
  } else {
    removeSuccess(lName)
  }

}



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "input error";
	small.innerText = message;
}


function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "input success";
}

function removeSuccessFor(input){
    const formControl = input.parentElement;
    formControl.classList.remove("success");

  }