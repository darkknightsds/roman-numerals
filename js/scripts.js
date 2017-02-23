//Back-end logic:
var numberToConvert = "";
var invalid = "Try again."
var symbolValues = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
}

var convertedNumber = function(input) {
  if (input === 1) {
    return symbolValues[1];
  } else if (input === 4) {
    return symbolValues[4];
  } else if (input === 5) {
    return symbolValues[5];
  } else if (input === 9) {
    return symbolValues[9];
  } else if (input === 10) {
    return symbolValues[10];
  } else if (input === 40) {
    return symbolValues[40];
  } else if (input === 50) {
    return symbolValues[50];
  } else if (input === 90) {
    return symbolValues[90];
  } else if (input === 100) {
    return symbolValues[100];
  } else if (input === 400) {
    return symbolValues[400];
  } else if (input === 500) {
    return symbolValues[500];
  } else if (input === 900) {
    return symbolValues[900];
  } else if (input === 1000) {
    return symbolValues[1000];
  } else {
    return invalid;
  }
};

// var testFunction = function(input) {
//   if (input == symbolValues) {
//     return symbolValues
//   }
// };

//Front-end logic:
$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    numberToConvert = parseInt($("#numberInput").val());
    console.log(numberToConvert);
    var output = convertedNumber(numberToConvert);
    $("#result").text(output);
  });
});
