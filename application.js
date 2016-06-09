$(document).ready(function(){
  $("#submit").click(function(){
    var name=$("input[name=firstname]").val();
    var comment=$("input[name=comment]").val();
    alert(comment);
  })
})
