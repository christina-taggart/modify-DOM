$(function(){
  $("#new_comment").hide();
  $("#new_comment_button").click(showCommentForm);
  $("#new_comment").submit(addComment);
});

var showCommentForm = function(){
  $("#new_comment").show();
};

var addComment = function(event){
  event.preventDefault();

  var comment = this["comment"].value;
  var name = this["name"].value;

  var template = $("#comment-template").clone();
  template.find(".msg-txt").text(comment);
  template.find(".author").text(name);

  $("#comment_list").append(template);
  $("#new_comment").hide();
};