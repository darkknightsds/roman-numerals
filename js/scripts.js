//Back-end logic:
var numberToConvert = "";
var invalid = "Try again."

var onesColumn = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

var convertedNumber = function(input) {
  for (var index = 1; index <=1; index+=1) {
    if (input === "1") {
      return onesColumn[0];
    } else if (input === "2") {
      return onesColumn[1];
    } else if (input === "3") {
      return onesColumn[2];
    } else if (input === "4") {
      return onesColumn[3];
    } else if (input === "5") {
      return onesColumn[4];
    } else if (input === "6") {
      return onesColumn[5];
    } else if (input === "7") {
      return onesColumn[6];
    } else if (input === "8") {
      return onesColumn[7];
    } else if (input === "9") {
      return onesColumn[8];
    } else {
      return invalid;
    }
  }
};

//Front-end logic:
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    numberToConvert = $("#numberInput").val();
    var output = convertedNumber(numberToConvert);
    $("#result").text(output);
  });
});
