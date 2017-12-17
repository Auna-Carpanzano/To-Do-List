$("li").click(function () {
  if($(this).css("color") === "rgb(128, 128, 128)"){

  }
  $(this).css("color", "gray");
  $(this).css("text-decoration", "line-through");
});
