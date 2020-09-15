$("document").ready(function(){
    $("#btn-wish").click(function(){
      $("#message").animate({"margin-top": "-10rem"});
      $("#message").fadeIn('slow');
    });
    $("#btn-more").click(function(){
      $("#nuham").fadeIn('slow');
    });
  $("#btn-exit").click(function(){
      $("#message").fadeOut('slow');
    });
  });