// Shorthand for document ready
$(function(){
  $('#new_comment_button').on( "click", showCommentFields)
});

var showCommentFields = function(event){
  var $new_comment = $('#hidden #new_comment_template li').clone()
  $new_comment.appendTo("#comment_list");
  event.preventDefault();
  $("#new_comment").on( "submit",createComment)
}

var createComment = function(event){
  event.preventDefault();
  var $new_comment = $('#hidden #new_list_item_template li').clone();
  $new_comment.find('.comment_body').text(this.newpost.value);
  $new_comment.find('.author').text(this.authorName.value);
  if (this.newpost.value){
    $new_comment.appendTo("#comment_list");
  }
  this.parentElement.remove();
}