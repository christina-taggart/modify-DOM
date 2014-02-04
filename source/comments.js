//Shorthand for document ready
$(function(){
	$("#new_comment_button").on("click", function() {
		$("<form id='new_comment' > Content: <input type='text' name='content'><br> Name: <input type='text' name='name'> <input id='create_comment' type='submit' value='Add New Comment'> </form>").appendTo("ul");
	} )
	});
	// $("#comment_area").on("submit", "form", function(event) {
	// 	console.log("This is here")
	// 	event.preventDefault
		 $( "#comment_area" ).on("submit", "form", function(event) {
    event.preventDefault();
    var form = document.querySelector("#new_comment");
    var name = form["name"].value;
    var content = form["content"].value;
    $("<li>" + content + "<span class='author'>" + name + "</span></li>").appendTo("ul");
    $("form").css('display', 'none');
  });
		
