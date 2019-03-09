$( document ).ready(function() {
console.log("test")

i = 4;


$("#assess").click(function myFunction() {
  $("#assessment").append(`<input type="text" placeholder="" id="per${i}"></input>`)
  $("#grade").append(`<div><input type="text" placeholder="" id="per${i}"></input></div>`)
  $("#gradeweight").append(`<div><input type="text" placeholder="" id="per${i}"></input></div>`)

});
  

$("#add").click(function calculator() {
	var grade1=parseFloat(document.getElementById('quiz').value);
	console.log("show grade1 after click add assessment", grade1)
    var grade2=parseFloat(document.getElementById('assignment').value);
    var grade3=parseFloat(document.getElementById('midterm').value);
    var grade4=parseFloat(document.getElementById('final').value);
    var total=grade1+grade2+grade3+grade4;
    console.log("the total", total)

    var display=document.getElementById('outputDiv');

    display.innerHTML='Your Final Grade Is: ' +total;
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
