// Shorthand for document ready
$(function(){
  // Your code goes here
 $('#new_comment_button').on('click', function() {
  $( "<form class='add-comment'><input type='text' name='content'> <input type='text' name='name'><input type='submit' value='comment!'></form>" ).appendTo( "div#comment_area" );
  $('.add-comment').submit( function(event) {
    event.preventDefault();
    var content = $(this).serializeArray()[0].value
    var name = $(this).serializeArray()[1].value
    $("<li>" + content + "<span class='author'>" + name + "</span></li>").appendTo("ul")
    $('.add-comment').remove()
    event.preventDefault();
  })
 });


});



