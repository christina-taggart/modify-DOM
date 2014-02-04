// Shorthand for document ready
$(function(){

  $("#new_comment_button").on("click", function(){
    $(".comment_form").fadeIn(300)
    $("#new_comment_button").fadeOut(300)
      $(".submit").on("click", function(e){
        var text = $(".comment_form > input[name=text_field]").val()
        var author = $(".comment_form > input[name=author_field]").val()
        e.preventDefault()
        $("#comment_list").append("<li>" + text + "<span class='author'>" + author + "</span></li>")
    })
  });
});