let ime = document.getElementById("name");
let lastName = document.getElementById("LastName");
let email = document.getElementById("email");
let confEmail = document.getElementById("confirmEmail");
let pass = document.getElementById("password");
let confPass = document.getElementById("confirmPass");

let error_email = document.getElementById("error_email");
let error_pass = document.getElementById("error_pass");

forma.addEventListener("submit", (e) => validacija(e));

const validacija = (e) => {
  e.preventDefault();
  if (ime.value.length == "") {
    ime.style.border = "3px solid red";
    return false;
  } else {
    ime.style.border = "3px solid green";
  }
  if (lastName.value.length < 3) {
    lastName.style.border = "3px solid red";
    return false;
  } else {
    lastName.style.border = "3px solid green";
  }
  if (email.value.length < 7) {
    email.style.border = "3px solid red";
    return false;
  } else {
    email.style.border = "3px solid green";
  }
  if (confEmail.value.length !== email.value.length) {
    confEmail.style.border = "3px solid red";
    error_email.style.display = "block";
    return false;
  } else {
    confEmail.style.border = "3px solid green";
    error_email.style.display = "none";
  }
  if (pass.value.length < 8) {
    pass.style.border = "3px solid red";
    return false;
  } else {
    pass.style.border = "3px solid green";
  }
  if (confPass.value.length !== pass.value.length) {
    confPass.style.border = "3px solid red";
    error_pass.style.display = "block";
    return false;
  } else {
    error_pass.style.display = "none";
    confPass.style.border = "3px solid green";
  }
};
