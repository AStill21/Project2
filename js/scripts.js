
// function survey(faveNumberInput) {
//   return faveNumberInput;
// }



$(document).ready(function() {
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
//   $(".clickable").click(function() {
//     $("#survey-showing").toggle();
//     $("#survey-hidden").toggle();
//     $("#python").hide();
//     $("#go").hide();
//     $("#swift").hide();

//   });
// });


// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
// const person1Input = $("input#person1").val();    
// const color1Input = $("input#color1").val();
// const dob = $("#born").val();
// const flavor = $("input:radio[name=flavor]:checked").val();
// const faveNumber = parseInt($('faveNumber').val());
// const result = faveNumber(faveNumberInput) {
//   if (faveNumber >= 25) {
//     $(#python).show();
//   } else if (faveNumber === 50 || faveNumber < 65) {
//     $(#go).show();
//   } else {
//     $(#swift).show();
//   }
// };
// alert(result).concat(" Is this your final answer?") {
//   confirm(prompt("Are you sure? Click OK for yes or Cancel for no."))};
//   });
// });





//  $(document).ready(function() {
//    $("#formOne").submit(function() {
//      $(".person1").append(person1Input);
//      $(".color1").append(color1Input);
//      $(".dob").append(bornInput);
      //$(".faveNumber").append//(faveNumberInput);
//    });
 // });


 $(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const sAnimalInput = $("input#sAnimal").val();
    const petInput= $("input#pet").val();
    const faveDinnerInput = $("input#faveDinner").val();
    const colorInput = $("input#color").val();
    const bornInput = $("input#born").val();

    $(".person1").text(person1Input);
    $(".sAnimal").text(sAnimalInput);
    $(".pet").text(petInput);
    $(".faveDinner").text(faveDinnerInput);
    $(".color").text(colorInput);
    $(".born").text(bornInput);

    if (color="red") {
      $("#python").show();
    } even if (color="blue") {
      $("#go").show();
    } even () {
      $("swift")
    }
    
  });
});

