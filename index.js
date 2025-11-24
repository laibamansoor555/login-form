function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username cannot be empty!"
        });
        return false;
    }

    if (password === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password cannot be empty!"
        });
        return false;
    }

    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*(){}:><?|[\]';.,"]/.test(password);

    if (password.length < 8 || !hasLetter || !hasSymbol) {
        Swal.fire({
            icon: "warning",
            title: "Weak Password",
            text: "Password must be 8+ characters, include a letter and a symbol."
        });
        return false;
    }
Swal.fire({
  title: "Login successful!!",
  icon: "success",
  draggable: true
});

document.getElementById("username").value="";
document.getElementById("password").value="";

    return false;
}
