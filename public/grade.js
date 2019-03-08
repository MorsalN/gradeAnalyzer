$( document ).ready(function() {


i = 0;
$(document).ready(function(){
  $("input").keypress(function(){
    $("span").text(i += 1);
  });

function myFunction() {
  var x = document.getElementById("mySelect");
  var option = document.createElement("option");
  option.text = "";
  x.add(option);
}
  
});
