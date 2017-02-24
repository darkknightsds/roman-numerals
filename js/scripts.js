//Back-end logic:
var numberToConvert = ""
var output = ""
var invalid = "Try again."
var onesColumn = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tensColumn = ["", "X", "XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var hundredsColumn = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var thousandsColumn = ["", "M", "MM", "MMM"]
var convertedNumber = function(input) {
  if (input.length === 1) {
    var ones = input.charAt(0);
    return onesColumn[ones];
  } else if (input.length === 2) {
    var tens = input.charAt(0);
    var ones = input.charAt(1);
    return tensColumn[tens] + onesColumn[ones];
  } else if (input.length === 3) {
    var hundreds = input.charAt(0);
    var tens = input.charAt(1);
    var ones = input.charAt(2);
    return hundredsColumn[hundreds] + tensColumn[tens] + onesColumn[ones];
  } else if (input.length === 4) {
    var thousands = input.charAt(0);
    var hundreds = input.charAt(1);
    var tens = input.charAt(2);
    var ones = input.charAt(3);
    return thousandsColumn[thousands] + hundredsColumn[hundreds] + tensColumn[tens] + onesColumn[ones];
  } else {
    return invalid;
  }
};
//Front-end logic:
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    numberToConvert = $("#numberInput").val();
    output = convertedNumber(numberToConvert);
    $("#result").text(output);
  });
});
