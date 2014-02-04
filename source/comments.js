$(function(){
  $("#new_comment").hide();
  $("#new_comment_button").click(function(){
    $("#new_comment").show();
  });
  $("#new_comment").submit(function(event){
    event.preventDefault();
    var comment = $("textarea[name='comment']").val();
    var name = $("input[name='name']").val();
    $("#comment_list").append("<li>" + comment + "<span class='author'>" + name + "</span>" + "</li>");
    $("#new_comment").hide();
  })
});