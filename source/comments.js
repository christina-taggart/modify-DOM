$('#new_comment_button').on('click', function(e){
  $('#new_comment_button').hide();
  e.preventDefault();
  console.log('clicked')
  $('#add_comment_form').css('display', 'inline')
  $('#add_comment_form').on('submit', function(event){
    event.preventDefault();
    var comment_text = $("input[name='comment_text']").val()
    var commenter = $("input[name='commenter_name']").val()
    $('#comment_list').append($("<li>" + comment_text + "<span class='author'>" + commenter + "</span></li>"));
  })
})

