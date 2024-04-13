$(function () {


    $.get("/prices", function (response) {
    

        $("#price1").text(response.undercap);
        $("#price2").text(response.undercap);
        $("#price3").text(response.undercap);
        $("#price4").text(response.jersey);
        $("#price5").text(response.modal);
        $("#price6").text(response.chiffon);
        $("#price7").text(response.jersey);
        $("#price8").text(response.modal);
        $("#price9").text(response.chiffon);

    

        


        console.log(response);

    });


    

});