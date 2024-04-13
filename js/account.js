$(function () {
    $("#btn-signup").click(function () {
        
        const payload = {
            username: $("#username").val(),
            password: $("#password").val()
        }

        $.post("/sign-up", payload, function (response) {
            console.log(response);

        });
    })

}); 
