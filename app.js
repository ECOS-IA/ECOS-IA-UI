$(document).ready(function() {

    
    $.ajax({
        url: "http://localhost:3000", 
        success: function(result){
            alert(result)
            $("#div1").html(result);
        }
    });


})


