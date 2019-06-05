$(document).ready(function() {

$("#btn1").click(function() {
          var content = $("#input1").val();
          console.log(content);
          $("#paras").after("<p id=´paras´>"+content+"</p>");

$('#i1').on('click', function() {
                $('#task1').animate({
                        opacity: 0.0,
                        paddingright: '+=100'
                    }, 2000, function() {
                        $('#task1').hide();
});
	});
		});