
document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function () {
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const lastName = document.getElementById("lastName").value;
        const confirmEmail = document.getElementById("confirmEmail").value;
        const phone = document.getElementById("phone").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;
        const state = document.getElementById("state").value;
        const Address = document.getElementById("Address").value;
        const country = document.getElementById("country").value;

        // Validate inputs (You can add more validation as needed)
        if (fullName.trim() === '' || lastName.trim() === '' || email.trim() === '' || confirmEmail.trim() === '' || phone.trim() === '' || city.trim() === '' || zip.trim() === '' || state.trim() === ''||Address.trim()===''||country.trim()==='') {
            alert("Please fill in all fields.");
            return;
        }

        const params = {
            from_name: fullName,
            last_name: lastName,
            email_id: email,
            confirm_Email: confirmEmail,
            address_: Address,
            phone_: country+phone,
            city_: city,
            zip_: zip,
            state_: state

        };

        emailjs.send("service_tt817fs", "template_npz92si", params, "qCNcpl7mjbm0lmvE-")
            .then(function (response) {
                alert("Email sent successfully!");
                document.getElementById("fullname").value = '';
                document.getElementById("email").value = '';
                document.getElementById("lastName").value = '';
                document.getElementById("confirmEmail").value = '';
                document.getElementById("phone").value = '';
                document.getElementById("city").value = '';
                document.getElementById("zip").value = '';
                document.getElementById("state").value = '';
                document.getElementById('Address').value="";
                document.getElementById('country').value="";
            })
            .catch(function (error) {
                console.error("Error sending email:", error);
                alert("Failed to send email. Please try again later.");
            });
    });
});



// // image input/
// function previewImage(input) {
//     var preview = document.getElementById('image-preview');
//     var fileName = document.getElementById('file-name');
//     var removeImage = document.getElementById('remove-image');
  
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
  
//       reader.onload = function (e) {
//         preview.src = e.target.result;
//         preview.style.display = 'block';
//         removeImage.style.display = 'inline-block';
//       };
  
//       reader.readAsDataURL(input.files[0]);
//       fileName.textContent = input.files[0].name;
//     }
//   }
  
//   function removeImage() {
//     var input = document.getElementById('image');
//     var preview = document.getElementById('image-preview');
//     var fileName = document.getElementById('file-name');
//     var removeImage = document.getElementById('remove-image');
  
//     input.value = ''; // Clear the file input
//     preview.src = '#'; // Clear the image preview
//     preview.style.display = 'none';
//     removeImage.style.display = 'none';
//     fileName.textContent = 'No file selected';
//   }
  