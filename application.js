$(document).ready(function(){
  $("button").click(function(){
    var name=$("input[name=firstname]").val();
    var comment=$("input[name=comment]").val();
    $("#Box").append("<b><p>"+name+"</p></b><br>");
    $("#Box").append("<p>"+comment+"</p><br>");
  })
})
