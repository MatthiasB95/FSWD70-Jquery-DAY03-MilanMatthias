$(document).ready(function() {


 $('li',).on('click', function() {
                $(this).animate({
                        opacity: 0.0,
                        paddingright: '+=100'
                    }, 2000, function() {
                        $(this).hide();
                    });
                
/*$('li',).on('click', function() {
var newItem = $('<h1 class="red">New Heading</h1>'); // definition of the new element
            $('li').before(newItem); // insert the new element before the <li> tag

});
*/

$("#btn1").on("click", function() {
          var content = $("#input1").val();
          $("#li1").val(content)
;})