$(document).bind('mousemove', function(e){
    $('#moveme').css({
       left:  e.pageX - 100,
       top:   e.pageY - 130 
    });
});


 $(document).click(function() {
 		$("#moveme").animate({
 			top: "500px"
 		},"slow","linear")
        $("#moveme").fadeOut("slow");
        $("#moveme").delay(1000);
        $("#moveme").fadeIn("slow");
       	//$("#moveme").css("position", "static");
       	
        
    });
 $(document).click(function() {   
       	$("#moveme").attr("id", "newId");
        
    });





