// Shorthand for document ready
$(function(){
  // On click of new comment
    // make button disappear
    // Show comment form
  $('#new_comment_button').click( function(){
    $(this).css('display', 'none');
    $('.comment-form').css('display', 'block');
  });

  // On click of form submit
    // make form disappear
    //append new comment to previous one
    //show new comment button again
});