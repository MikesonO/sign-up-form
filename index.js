const form = document.getElementById("input");
const fName = document.getElementById("first_name");
const lName = document.getElementById("last_name");
const email = document.getElementById("user_email");
const phone_number = document.getElementById("phone_number");
const password = document.getElementById("user_password");
const password2 = document.getElementById("confirm_password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fNameValue = fName.value;
  const lNameValue = lName.value;
  const emailValue = email.value;
  const phone_numberValue = phone_number.value;
  const passwordValue = password.value;
  const password2Value = password2.value;
}