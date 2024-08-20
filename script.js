document.addEventListener("DOMContentLoaded", function () {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  function validatePassword() {
    if (password.value === confirmPassword.value) {
      confirmPassword.classList.remove("nomatch");
      confirmPassword.classList.add("match");
    } else {
      confirmPassword.classList.remove("match");
      confirmPassword.classList.add("nomatch");
    }
  }

  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validatePassword);
});
