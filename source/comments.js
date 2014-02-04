// Shorthand for document ready
$(function(){
  // Your code goes here
  $("#new_comment_button").click(function(){
  	$(".comment_form").show();
  		$(".submit").on("click", function(event){
  			var text = $(".comment_form > input[name=text]").val();
  			var author = $(".comment_form > input[name=author]").val();
  			event.preventDefault();
  			$("#comment_list").append("<li>" + text + "<span class= 'author'>" + author);
 			
  		}) 

  })
});

