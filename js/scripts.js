
function survey(person1,color1,dob, favFood, pet name, ) {
  return person1 + color1 + dob;
}



$(dpcument).ready(function() {
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $(".clickable").click(function() {
    $("#survey-showing").toggle();
    $("#survey-hidden").toggle();
    $(".question-hidden").hide();
    $(".question1-hidden").hide();
    $(".question2-hidden").hide();
    $(".question3-hidden").hide();
    $(".question4-hidden").hide();
    $(".question5-hidden").hide();
    $(".question6-hidden").hide();
    $(".question7-hidden").hide();

  });
});


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
const person1Input = $("input#person1").val();    
const color1Input = $("input#color1").val();
const dob = $("#born").val();
const flavor = $("input:radio[name=flavor]:checked").val();
const result = survey(person1Input+" ", color1Input+" " , dob+" " , flavor);
alert(result).concat(" Is this your final answer?") {
  const submit=confirm("Are you sure? Click OK for yes or Cancel for no.")};
  });
});





$(document).ready(function() {
  $("#formOne").submit(function() {
    $(".person1").append(person1Input);
    $(".color1").append(color1Input);
    $(".dob").append(bornInput);
  });
});




if (flavor === chocolate) {
  $(#outcome1).show();
} else if (result === option 2) {
  $(#outcome2).show();
} else {
  $(#outcome3).show();
}