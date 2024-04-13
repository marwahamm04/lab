$(document).ready(function () {
    let clickCounter = 0;
    let alertShown = false;

    // Hide the alert initially
    $('.alert').hide();

    $('#btn-story').click(function () {
        clickCounter++;
        $('#counter').text(clickCounter);

        const person = $('#person').val();
        const fabricMaterial = $('#Fabric_Material').val();
        const color = $('#Color').val();

        const data = {
            person: person,
            fabricMaterial: fabricMaterial,
            color: color
        };

        $.post("/api/customize", data)
            .done(function (response) {
                console.log("Hijab customization saved successfully");
                let clickMessage = "Thank you for customizing your hijab!";
                $('p').last().text(clickMessage);

                // Show the alert when the button is clicked
                if (!alertShown) {
                    $('.alert').show();
                    alertShown = true;
                }
            }); 
    }); 
});
