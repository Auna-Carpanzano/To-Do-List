$("li").click(function () {
  $(this).toggleClass("completed");
});

$("span").click(function(e){
  alert("clicked the span");
  e.stopPropagation();
})
