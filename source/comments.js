// Shorthand for document ready
$(function(){
  $("button").on("click", function(){
    $("<form id='new_comment'>Author:<input type='text' name='authorName' /><br/>Comment:<input type='text' name='comment' /><input type='submit' /></form>").appendTo("ul");
  });


  $( "#comment_area" ).on("submit", "form", function(event) {
    event.preventDefault();
    var form = document.querySelector("#new_comment");
    var author = form["authorName"].value;
    var comment = form["comment"].value;
    $("<li>" + comment + "<span class='author'>" + author + "</span></li>").appendTo("ul");
    $("form").css('display', 'none');
  });

});
