$(document).ready(function () {
  var isNameValid = false;
  var isEmailValid = false;
  var isPasswordValid = false;
  var isConfirmPasswordValid = false;
  // Validate Username
  function validateUsername() {
    isNameValid = false;
    let usernameValue = $("#username").val();
    if (usernameValue.length == "") {
      $("#err-name").show();
    } else {
      isNameValid = true;
      $("#err-name").hide();
    }
  }

  // Validate Email
  function validateEmail() {
    isEmailValid = false;
    let email = $("#email").val();

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (!regex.test(email)) {
      $("#err-email").show();
    } else {
      isEmailValid = true;
      $("#err-email").hide();
    }
  }

  function validatePassword() {
    isPasswordValid = false;
    let password = $("#password").val();
    if (password.length < 6) {
      $("#err-password").show();
    } else {
      isPasswordValid = true;
      $("#err-password").hide();
    }
  }

  function validateConfirmPassword() {
    isConfirmPasswordValid = false;
    let password = $("#password").val();
    let confirmPassword = $("#confirm-password").val();
    if (password != confirmPassword) {
      $("#err-conpassword").show();
    } else {
      isConfirmPasswordValid = true;
      $("#err-conpassword").hide();
    }
  }

  // Submit button
  $("#signup-btn").click(function () {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    // if (
    //   isNameValid &&
    //   isEmailValid &&
    //   isPasswordValid &&
    //   isConfirmPasswordValid
    // ) {
    //   $.ajax({
    //     success: function () {
    //       alert("Registered Successfully");
    //       window.location.replace("../pages/account_page.html");
    //     },
    //     error: function () {
    //       alert("Logged In Failed");
    //     },
    //   });
    // }
  });
  $("#login-btn").click(function () {
    validateEmail();
    validatePassword();
    // if (isEmailValid && isPasswordValid) {
    //   $.ajax({
    //     success: function () {
    //       alert("Logged In Successful");
    //       window.location.replace("../pages/account_page.html");
    //     },
    //     error: function () {
    //       alert("Logged In Failed");
    //     },
    //   });
    //   // window.location.replace("../pages/account_page.html");
    // }
  });
});
