function sendMail() {
    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Simple form validation
    if (!name || !email || !subject || !message) {
        showToast("Please fill in all fields", "error");
        return;
    }

    // Additional email validation (you can use a more sophisticated validation method)
    if (!isValidEmail(email)) {
        showToast("Please enter a valid email address", "error");
        return;
    }

    // If all validations pass, proceed to send the email
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    }

    emailjs.send("service_xhtt1et", "template_obvt2bh", parms).then(function(response) {
        showToast("Email Sent Successfully", "success");
        
        // Clear the input fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    });
}

function showToast(message, type) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top", 
        position: "right",
        backgroundColor: type === "success" ? "green" : "red",
    }).showToast();
}

function isValidEmail(email) {
    // You can use a more sophisticated email validation regex or library
    // This is a simple example, and it may not cover all edge cases
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}