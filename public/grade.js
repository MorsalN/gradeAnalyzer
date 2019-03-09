$( document ).ready(function() {
  console.log("test")

  i = 4;


  $("#assess").click(function myFunction() {
    $("#assessment").append(`<input type="text" placeholder="" id="per${i}"></input>`)
    $("#grade").append(`<div><input type="text" placeholder="" id="per${i}"></input></div>`)
    $("#gradeweight").append(`<div><input type="text" placeholder="" id="per${i}"></input></div>`)

  }); 
   


  const $gradeweight = document.querySelector('#gradeweight');
  const $result = document.querySelector('#add');
  var currtotal = 0;

  const typeHandler = function(e) {
    // var total = e.target.value;
    // currtotal = 0;
    currtotal = e.target.value;
    $result.innerHTML = currtotal;
  }

  $gradeweight.addEventListener('input', typeHandler) // register for oninput
  $gradeweight.addEventListener('propertychange', typeHandler) // for IE8  

  $("input").change(function() {
  	var grade1=parseFloat(document.getElementById('weight1').value);
    var grade2=parseFloat(document.getElementById('weight2').value);
    var grade3=parseFloat(document.getElementById('weight3').value);
    var grade4=parseFloat(document.getElementById('weight4').value);
    console.log(grade1, grade2, grade3, grade4);
    grade1 = !isNaN(grade1) ? grade1 : 0;
    grade2 = !isNaN(grade2) ? grade2 : 0;
    grade3 = !isNaN(grade3) ? grade3 : 0;
    grade4 = !isNaN(grade4) ? grade4 : 0;
    var total=grade1+grade2+grade3+grade4;
    console.log("the total", total)
    $(".currentgrade").text(total)
  })
});


// $("#send").click(function(e) {
// 		e.preventDefault()
// 		$.ajax({
//             url: '/sendtochatbox',
//             data: $('form').serialize(),
//             type: 'POST',
//             success: function(response) {
//                 // a_message = response;
//                 // console.log("Testing our chatapp", a_message);
//                 // $("#themessage").append("\n" + a_message);
//             },
//             error: function(error) {
//                 console.log(error);
//             }
//         });
