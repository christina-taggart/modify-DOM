// Shorthand for document ready
$(function(){

  $('#new_comment_button').click( function(){
    $(this).css('display', 'none');
    $('.comment-form').css('display', 'block');
  });

  $('#add-comment-button').click( function(event){
    event.preventDefault();
    createComment();
    clearForm();
    $('.comment-form').css('display', 'none');
    $('#new_comment_button').css('display', 'block');
  });

  var commentBody = function(comment, name){
    return ('<li>' + comment + '<span class="author">' + name + '</span>' + '</li>')
  }

  var clearForm = function() {
    $('.comment-form > textarea').val("")
    $('.comment-form > input[name=name]').val("")
  }

  var createComment = function () {
    var comment = $('.comment-form > textarea').val()
    var name = $('.comment-form > input[name=name]').val()
    if(comment.trim() != ""){
      $('#comment_list').append(commentBody(comment, name));
    }
    else{
      alert('You must enter a comment');
    }
  }
});