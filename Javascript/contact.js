document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    
    sendButton.addEventListener("click", function() {
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const problemDescription = document.getElementById("describe-problem").value;
        
        // Validate inputs (You can add more validation as needed)
        if (fullName.trim() === '' || email.trim() === '' || problemDescription.trim() === '') {
            alert("Please fill in all fields.");
            return;
        }
        
        // Assuming you're using EmailJS for sending emails
        const params = {
            from_name: fullName,
            email_id: email,
            message: problemDescription
        };
        
        emailjs.send("service_of3s80h", "template_ez0v6zc", params, "y9J9q7oPt65F4RrRV")
            .then(function(response) {
                alert("Email sent successfully!");
                // Optionally, reset the form after successful submission
                document.getElementById("fullname").value = '';
                document.getElementById("email").value = '';
                document.getElementById("describe-problem").value = '';
            }, function(error) {
                console.error("Error sending email:", error);
                alert("Failed to send email. Please try again later.");
            });
    });
});