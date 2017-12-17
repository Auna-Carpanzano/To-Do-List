$("li").click(function () {
  $(this).toggleClass("completed");
});

$("span").click(function(e){
  $(this).parent().fadeOut();
  e.stopPropagation();
});
