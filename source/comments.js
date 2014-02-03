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
  $('#add-comment-button').click( function(event){
    event.preventDefault();
    var comment = $('.comment-form > textarea').val()
    var name = $('.comment-form > input[name=name]').val()
    $('#comment_list').append(comment_body(comment, name));
    $('.comment-form').css('display', 'none');
    $('#new_comment_button').css('display', 'block');


  });

  var comment_body = function(comment, name){
    return ('<li>' + comment + '<span class="author">' + name + '</span>' + '</li>')
  }

});