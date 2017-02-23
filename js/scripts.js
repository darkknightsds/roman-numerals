//Back-end logic:
var numberToConvert = ""
var invalid = "Try again."

var onesColumn = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tensColumn = ["X", "XX"]


var convertedNumber = function(input) {
  if (input.length === 1) {
    input = "000" + input;
  } else if (input.length === 2) {
    input = "00" + input;
  }
  console.log(input);
    return onesColumn[input - 1];
  // for (input = 3; input <= 3; input +=1) {
  //     return tensColumn[input - 1];
  //   }
    // } else if (input === "2") {
    //   return onesColumn[1];
    // } else if (input === "0003") {
    //   return onesColumn[2];
    // } else if (input === "4") {
    //   return onesColumn[3];
    // } else if (input === "5") {
    //   return onesColumn[4];
    // } else if (input === "6") {
    //   return onesColumn[5];
    // } else if (input === "7") {
    //   return onesColumn[6];
    // } else if (input === "8") {
    //   return onesColumn[7];
    // } else if (input === "9") {
    //   return onesColumn[8];
    // } else {
    //   return invalid;
    // }
    // }
//   for (var index = 3; index <= 4; index +=1) {
//     if (input === "0013") {
//     return tensColumn[0];
//   } else {
//     return invalid;
//   }
// };
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
