
function survey(person1,color1,dob, favFood, pet name, ) {
  return person1 + color1 + dob;
}



$(dpcument).ready(function() {
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("start").click(function() {
    $(".")
  })
});


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
const person1Input = $("input#person1").val();    
const color1Input = $("input#color1").val();
const dob = $("#born").val();
const result = survey(person1Input+" ", color1Input+" " , dob );
alert(result);
  });
});


if (person1Input && )




$(document).ready(function() {
  $("#formOne").submit(function() {
    $(".person1").append(person1Input);
    $(".color1").append(color1Input);
    $(".dob").append(bornInput);

    $("#survey").show();
  });
});