$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var userInput = parseInt($("#numberInput").val());
    var output = convertedNumber(inputNumber);
    $("#result").text(output); 
  });
});
