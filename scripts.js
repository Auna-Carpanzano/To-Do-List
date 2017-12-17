$("li").click(function () {
  $(this).toggleClass("completed");
});

$("span").click(function(e){
  $(this).parent().remove();
  e.stopPropagation();
})
