// Toggling password using the eye icon
const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#login-pswd-input');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

// ----------------Validation-----------------------
  // Document is ready
$(document).ready(function () {

  var usernameError = false;
  var emailError = false;
  var passwordError = false;

// Button onClick validation
  $("#signup").click(function () {
  validateUsername();
  validateEmail();
  validatePassword();
 
  if (
    usernameError == true &&
    emailError  == true &&
    passwordError == true
  ) {
    window.location.href = 'welcomeEmployee.html';
   }
});

    // Validate Username
    $("#usercheck").hide();
    $("#usernames").keyup(function () {
      validateUsername();
    });

    function validateUsername() {
      let usernameValue = $("#usernames").val();
      if (usernameValue.length == "") {
        $("#usercheck").show();
        $("#usercheck").html("**Username required");
        return false;
      } else if (usernameValue.length < 5 || usernameValue.length > 12) {
        $("#usercheck").show();
        $("#usercheck").html("**length of username must be between 5 and 12");
        return false;
      } else {
        $("#usercheck").hide();
        usernameError = true;
      }
    }

    // Validate Email
$("#emailcheck").hide();
$("#email-id").keyup(function () {
  validateEmail();
}); 
function validateEmail() {
  var regEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let emailValue=$("#email-id").val();
  var validEmail=regEmail.test(emailValue);
  if (!validEmail){
    $("#emailcheck").show();
    $("#emailcheck").html("**invalid email");
    return false;
  }
  else{
    $("#emailcheck").hide();
    emailError=true;
  }
 }

 // Validate Password
 $("#passcheck").hide();
 $("#login-pswd-input").keyup(function () {
   validatePassword();
 });
 function validatePassword() {
   let passwordValue = $("#login-pswd-input").val();
   if (passwordValue.length == "") {
     $("#passcheck").show();
     $("#passcheck").html("**Password required");
     return false;
   }
   else if (passwordValue.length < 3 || passwordValue.length > 10) {
     $("#passcheck").show();
     $("#passcheck").html(
       "**length of your password must be between 3 and 10"
     );
     
     return false;
   } else {
     $("#passcheck").hide();
     passwordError = true;
   }
 }
});

