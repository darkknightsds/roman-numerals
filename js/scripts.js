//Back-end logic:
var numberToConvert = ""
var output = ""
var ones = ""
var tens = ""
var hundreds = ""
var invalid = "Try again."
var onesColumn = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tensColumn = ["X", "XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var hundredsColumn = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var thousandsColumn = ["M", "MM", "MMM"]
var convertedNumber = function(input) {
  if (input.length === 1) {
    var ones = input.charAt(0);
    return onesColumn[ones - 1];
  } else if (input.length === 2) {
    var tens = input.charAt(0);
    var ones = input.charAt(1);
    return tensColumn[tens - 1] + onesColumn[ones - 1];
  } else if (input.length === 3) {
    var hundreds = input.charAt(0);
    var tens = input.charAt(1);
    var ones = input.charAt(2);
    return hundredsColumn[hundreds - 1] + tensColumn[tens - 1] + onesColumn[ones - 1];
  } else if (input.length === 4) {
    var thousands = input.charAt(0);
    var hundreds = input.charAt(1);
    var tens = input.charAt(2);
    var ones = input.charAt(3);
    return thousandsColumn[thousands - 1] + hundredsColumn[hundreds - 1] + tensColumn[tens - 1] + onesColumn[ones - 1];
  } else {
    return invalid;
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
