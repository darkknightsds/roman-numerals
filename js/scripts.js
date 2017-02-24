//Back-end logic:
var numberToConvert = ""
var output = ""
var ones = ""
var tens = ""
var invalid = "Try again."
var onesColumn = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tensColumn = ["X", "XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var convertedNumber = function(input) {
  if (input.length === 1) {
    return ones = ("000" + input).charAt(3);
  } else if (input.length === 2) {
    return tens = ("00" + input).charAt(2,3);
  } else if (input.length === 3) {
    return input = "0" + input;
  } else {
    return input;
  }
  // for (var index = 1; index = 1; index += 4) {
  //   return onesColumn[input - 1];
  // }
  // for (var index = 1; index = 1; index += 3) {
  //   return tensColumn[input - 1];
  // }
  // for (var index = 1; index = 1; index += 3) {
  //   return tensColumn[input - 1];
  // }
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
// output.forEach(function {
//   return onesColumn[input - 1];
// }

// var assignValueOnes = function(input) {
// return input = onesColumn[input - 1];
// }

// var assignValueTens = function(input) {
// return input = tensColumn[input - 1];
// }


//Front-end logic:
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    numberToConvert = $("#numberInput").val();
    output = convertedNumber(numberToConvert);
    // ones = assignValueOnes(output);
    // tens = assignValueTens(output);
    $("#result").text(output);
});
});
