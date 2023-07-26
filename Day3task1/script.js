function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting initially

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // Reset previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validate Name
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        name.focus();
        return false;
    }

    // Validate Email
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        email.focus();
        return false;
    }

    // Validate Password
    if (!passwordPattern.test(password.value)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain letters, numbers, and special characters.";
        password.focus();
        return false;
    }

    // If all validations pass, show success message
    showSuccessMessage();
}

function showSuccessMessage() {
    const form = document.getElementById("myForm");
    form.reset();

    const successMessage = document.createElement("div");
    successMessage.classList.add("success");
    successMessage.textContent = "Congratulations! Form submitted successfully.";

    form.appendChild(successMessage);

    // Remove the success message after a few seconds (optional)
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}
