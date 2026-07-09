const checkValidData = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

    if (!isEmailValid && !isPasswordValid) return "Please fill both fields correctly.";
    if (!isEmailValid) return "Email ID is not valid.";
    if (!isPasswordValid) return "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number.";

    return null;
}

export default checkValidData;