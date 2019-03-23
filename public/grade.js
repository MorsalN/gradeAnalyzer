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

// var gradearray = 
// var gradeweights = 

// foreach x in gradearray

// totalgrade = (grade/100)*gradeweight + 

  $(".rcorners2").on('change', 'input', function() {
   // Store all grades inside an array.
    var grades = [];
    $('#grade input').each(function() {
      // console.log('line 62', parseInt($(this).val()));
      var currentgrade = parseInt($(this).val()); // this is turning the grades from a string to an integer 
      currentgrade = isNaN(currentgrade) ? 0 : currentgrade;
      grades.push(currentgrade); // this is taking the grades and actually puttin them into the array 
    });

    var weights = [];
    $('#gradeweight input').each(function() {
      var currentweight = parseInt($(this).val());
      currentweight = isNaN(currentweight) ? 0 : currentweight
      weights.push(currentweight);
    });

    var total = 0;
    for(var i=0; i< grades.length; i++) {
      total += (grades[i]/100)*weights[i];
    }

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
