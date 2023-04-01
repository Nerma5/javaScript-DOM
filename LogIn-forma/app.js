const validacija = () => {
  let email = document.forms["forma"]["email"].value;
  let pass = document.forms["forma"]["password"].value;
  let confirmPass = document.forms["forma"]["confirm_password"];

  if (email.value.length == "") {
    alert("Box must be filled");
    return false;
  }
  if (pass.value.length == "") {
    alert("Box must be filled");
    return false;
  }
  if (pass.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  if (confirmPass.value.length != pass) {
    alert("Password must be same");
    return false;
  }
};
