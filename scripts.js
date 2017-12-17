$("li").click(function () {
  $(this).toggleClass("completed");
});

$("span").click(function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    var inputText= $(this).val();
    $(this).val("");
    $("ul").append("<li>" + inputText + "</li>");
  }
});
