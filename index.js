function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if ( username === "") {
        alert ("Username can not be empty");
        return false ;
    }
    if (password === "") {
        alert ("Password can not be empty");
        return false ;
    }
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSymbol =  /[!@#$%^&*(){}:><?|[\]';.,"]/.test(password);

    if ( password.length > 8 || !hasLetter || !hasSymbol) {
        alert ("Password must be 8+ characters, include a letter and a symbol.");
        return false;
    } 
    alert ("Login Successful!");
    return true;
}