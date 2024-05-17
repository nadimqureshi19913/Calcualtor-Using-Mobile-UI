let outputString = "";
let output = document.getElementById("output");

function buttonPressed(symbol) {
  if (symbol == "AC") {
    output.innerHTML = "";
    outputString = "";
  } else if (symbol == "=") {
    output.innerHTML = eval(outputString);
    outputString = eval(outputString);
  } else {
    outputString = outputString + symbol;

    output.innerHTML = outputString;
  }
}

let secTarget = document.getElementById("sec");
let minTarget = document.getElementById("min");
let hrTarget = document.getElementById("hr");

let i = 0;
let secValue = 0;
let minValue = 0;
let hrValue = 0;

let printValues = setInterval(function () {
  i = i + 1;
  secValue = i % 60;

  if (secValue < 10) {
    secTarget.innerHTML = "0" + secValue;
  } else {
    secTarget.innerHTML = secValue;
  }
  secValue++;

  if (secValue == 60) {
    secTarget.innerHTML = "00";

    minValue++;
    secValue = 0;
  }

  if (minValue < 10) {
    minTarget.innerHTML = "0" + minValue;
  } else {
    minTarget.innerHTML = minValue;
  }

  if (minValue == 60) {
    minTarget.innerHTML = "00";
    minValue = 0;
    hrValue++;
  }
  if (hrValue < 10) {
    hrTarget.innerHTML = "0" + hrValue;
  } else {
    hrTarget.innerHTML = hrValue;
  }
  if (hrValue == 24) {
    hrTarget.innerHTML = "00";
    hrValue = 0;
  }
}, 1000);
