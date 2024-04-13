$(function () {
    $("#btn-msg").click(function () {
        $("form").submit(function() {
            // Retrieve form data
            const data = {
                name: $("#name").val(),
                phonenumber: $("#phonenumber").val(),
                password: $("#password").val(),
                email: $("#email").val()
            };
            
            // Send data via AJAX
            $.post("/api/contactform/create", data, function(data) {
                console.log("Contact Message Received");
                alert("Contact message has been sent successfully!");
            });


            return false; 
    
        }); 
        alert("didnt run!");

    });
});
