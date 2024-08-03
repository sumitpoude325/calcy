var container = [];
var input1 = 0;
var input2 = 0;
var operator;
var length;
var result;

// takes input
// mouse
for (let i = 0; i < document.querySelectorAll(".keys >button").length; i++) {
  document
    .querySelectorAll(".keys > button")
    [i].addEventListener("click", function () {
      console.log(this.textContent);
      processor(this.textContent);
    });
}
//mouse erase button
document
  .querySelector(".remove > button")
  .addEventListener("click", function () {
    erase();
  });

//keyboard
document.addEventListener("keydown", function (event) {
  processor(event.key);

  // for keyboard erase
  if (event.key == "Backspace") {
    erase();
  }
});

// sorts out the input for processing
function processor(num) {
  console.log("ok" + num);
  if (
    num == "0" ||
    num == "1" ||
    num == "2" ||
    num == "3" ||
    num == "4" ||
    num == "5" ||
    num == "6" ||
    num == "7" ||
    num == "8" ||
    num == "9" ||
    num == "+" ||
    num == "-" ||
    num == "*" ||
    num == "/"
  ) {
    container.push(num);
  }
  display();
  switch (num) {
    case "+":
      length = container.length;
      var bin = container.slice(0, length - 1);
      input1 = Number(bin.join(""));
      break;

    case "-":
      length = container.length;
      var bin = container.slice(0, length - 1);
      input1 = Number(bin.join(""));
      break;

    case "*":
      length = container.length;
      var bin = container.slice(0, length - 1);
      input1 = Number(bin.join(""));
      break;

    case "/":
      length = container.length;
      var bin = container.slice(0, length - 1);
      input1 = Number(bin.join(""));
      break;

    case "Enter":
      var bin2 = container.slice(length);
      input2 = Number(bin2.join(""));

      operator = container[length - 1];
      switch (operator) {
        case "+":
          add();
          break;

        case "-":
          minus();
          break;

        case "*":
          times();
          break;

        case "/":
          divide();
          break;

        default:
          break;
      }

      break;

    default:
      break;
  }
}

//display
function display() {
  document.querySelector("h1").textContent = String(container.join(""));
}
//erase form display
function erase() {
  container.pop();
  display();
  if (container.length == 0) {
    document.querySelector("h1").textContent = "0";
  }
}

// operations
function add() {
  result = input1 + input2;
  document.querySelector("h1").textContent = result;
}

function times() {
  result = input1 * input2;
  document.querySelector("h1").textContent = result;
}

function minus() {
  result = input1 - input2;
  document.querySelector("h1").textContent = result;
}

function divide() {
  result = input1 / input2;
  document.querySelector("h1").textContent = result;
}
