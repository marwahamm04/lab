$.get("/reviews", function (response)
{
   for(let row of response){


       console.log(row);
       $("#text tbody").append("<tr><td>"+row.testid+" </td><<td>"+row.testimonal+" </td></tr>");
   }
});
