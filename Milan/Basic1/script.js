$(document).ready(function() {
      /* $ ("#animate").show(1000);
       $ ("#animate").delay(5000);
       $ ("#animate").hide(1000);*/
  $(".animate1").remove();         
  $("#animate").remove();


 $('li').on('click', function() {
                $(this).animate({
                        opacity: 0.0,
                        paddingright: '+=100'
                    }, 2000, function() {
                        $(this).hide();
                    });
                });

              });

