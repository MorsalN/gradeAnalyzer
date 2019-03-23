$( document ).ready(function() {
  console.log("test")

  i = 4;


  // $("#assess").click(function myFunction() {
  //   $("#final").append(`<input type="text" placeholder="" id="per${i}"></input>`)
  //   $("#grade").append(`<div><input type="text" placeholder="" id="per${i}"></input></div>`)
  //   $("#gradeweight").append(`<div><input type="text" placeholder="" id="per${i}"></input></div>`)

  // }); 
   


  const $desiredgrade = document.querySelector('#desiredgrade');
  const $result = document.querySelector('#add');
  var currtotal = 0;

  const typeHandler = function(e) {
    // var total = e.target.value;
    // currtotal = 0;
    currtotal = e.target.value;
    $result.innerHTML = currtotal;
  }

  $desiredgrade.addEventListener('input', typeHandler) // register for oninput
  $desiredgrade.addEventListener('propertychange', typeHandler) // for IE8  


  $(".rcorners2").on('change', 'input', function() {
   // Store all grades inside an array.

    var currentgrade = [];
    $('#currentgrade input').each(function() {
      // console.log('line 62', parseInt($(this).val()));
      var currentgrade_final = parseInt($(this).val()); // this is turning the grades from a string to an integer 
      currentgrade_final = isNaN(currentgrade_final) ? 0 : currentgrade_final;
      currentgrade.push(currentgrade_final); // this is taking the grades and actually puttin them into the array 
    });

    var finalworth = [];
    $('#finalworth input').each(function() {
      var finalweight = parseInt($(this).val());
      finalweight = isNaN(finalweight) ? 0 : finalweight
      finalworth.push(finalweight);
    });

    var desiredgrade = [];
    $('#desiredgrade input').each(function() {
      var desired_final = parseInt($(this).val());
      desired_final = isNaN(desired_final) ? 0 : desired_final
      desiredgrade.push(desired_final);
    });

    var finaltotal = 0;
    for(var i=0; i< currentgrade.length; i++) {
      finaltotal += (((desiredgrade[i]-(currentgrade[i]/100)*(100-finalworth[i])))/finalworth[i])*100;
      
    }


    $(".currentgrade").text(finaltotal)
  })
});
