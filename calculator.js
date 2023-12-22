var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".button");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "x") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }
    screen.value += btntext;
  });
}
function check() {
  if (screen.value < 0) {
    screen.value = Math.abs(screen.value);
  } else if (screen.value > 0) {
    screen.value = 0 - screen.value;
  } else {
    screen.value = screen.value;
  }
}
function sin() {
  screen.value = Math.sin(screen.value);
}

function sinInverse() {
  var inputValue = parseFloat(screen.value);

  if (isNaN(inputValue)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  }

  if (inputValue < -1 || inputValue > 1) {
    alert("Input value should be between -1 and 1 (inclusive).");
    return;
  }

  var result = Math.asin(inputValue) * (180 / Math.PI);
  screen.value = result;
}

function cosec() {
  screen.value = 1 / Math.sin(screen.value);
}
function cosecInverse() {
  var inputValue = parseFloat(screen.value);

  if (isNaN(inputValue) || inputValue === 0) {
    alert("Invalid input. Please enter a non-zero valid number.");
    return;
  }

  var result = Math.asin(1 / inputValue) * (180 / Math.PI);
  screen.value = result;
}
function cos() {
  screen.value = Math.cos(screen.value);
}
function cosInverse() {
  var inputValue = parseFloat(screen.value);

  if (isNaN(inputValue)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  }

  if (inputValue < -1 || inputValue > 1) {
    alert("Input value should be between -1 and 1 (inclusive).");
    return;
  }

  var result = Math.acos(inputValue) * (180 / Math.PI);
  screen.value = result;
}
function sec() {
  screen.value = 1 / Math.cos(screen.value);
}
function secInverse() {
  var inputValue = parseFloat(screen.value);

  if (isNaN(inputValue) || inputValue === 0) {
    alert("Invalid input. Please enter a non-zero valid number.");
    return;
  }

  var result = Math.acos(1 / inputValue) * (180 / Math.PI);
  screen.value = result;
}
function tan() {
  screen.value = Math.tan(screen.value);
}
function tanInverse() {
  var inputValue = parseFloat(screen.value);

  if (isNaN(inputValue)) {
    alert("Invalid input. Please enter a valid number.");
    return;
  }

  var result = Math.atan(inputValue) * (180 / Math.PI);
  screen.value = result;
}
function cot() {
  screen.value = 1 / Math.tan(screen.value);
}
function cotInverse() {
  var inputValue = parseFloat(screen.value);

  if (isNaN(inputValue) || inputValue === 0) {
    alert("Invalid input. Please enter a non-zero valid number.");
    return;
  }

  var result = Math.atan(1 / inputValue) * (180 / Math.PI);
  screen.value = result;
}
function reverse() {
  screen.value = 1 / screen.value;
}
function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value);
}
function mod() {
  screen.value = Math.abs(screen.value);
}
function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value = 3.14159265359;
}

function e() {
  screen.value = 2.71828182846;
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
}
function factnum(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factnum(num - 1);
  }
}

function permutation() {
  var n = parseInt(prompt("Please enter the value of n"));
  var r = parseInt(prompt("Please enter the value of r"));

  if (isNaN(n) || isNaN(r)) {
    alert("Please enter valid numbers.");
    return;
  }

  var nfact = factnum(n);
  var nrfact = factnum(n - r);
  var result = nfact / nrfact;
  screen.value = result;
}

function combination() {
  var n = parseInt(prompt("Please enter the value of n"));
  var r = parseInt(prompt("Please enter the value of r"));

  if (isNaN(n) || isNaN(r)) {
    alert("Please enter valid numbers.");
    return;
  }

  var nfact = factnum(n);
  var rfact = factnum(r);
  var nrfact = factnum(n - r);
  var result = nfact / (rfact * nrfact);
  screen.value = result / 2;
}

function degrees_to_radians() {
  screen.value = screen.value * (Math.PI / 180);
}
function toDegrees() {
  screen.value = screen.value * (180 / Math.PI);
}
function findNthRoot() {
  var nthRootValue = parseFloat(screen.value);
  var n = parseFloat(
    prompt("Enter the value of n (the root you want to find):")
  );

  if (isNaN(nthRootValue) || isNaN(n)) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }

  if (n === 0) {
    alert("The root cannot be 0.");
    return;
  }

  var nthRoot = Math.pow(nthRootValue, 1 / n);
  screen.value = nthRoot;
}
function nthPower() {
  var base = parseFloat(screen.value);
  var n = parseFloat(prompt("Enter the value of n (the exponent):"));

  if (isNaN(base) || isNaN(n)) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }

  var result = Math.pow(base, n);
  screen.value = result;
}
function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
function allclear() {
  screen.value = "";
}
function equality() {
  screen.value = eval(screen.value);
}
