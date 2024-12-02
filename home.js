document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");

    const handleActiveState = (clickedButton) => {
        // Remove active class from all buttons
        document.querySelectorAll(".hover-button").forEach((button) => {
            button.classList.remove("active");
        });

        // Add active class to the clicked button
        clickedButton.classList.add("active");
    };

    // Event listeners for both buttons
    loginButton.addEventListener("click", () => handleActiveState(loginButton));
    signupButton.addEventListener("click", () => handleActiveState(signupButton));
});
