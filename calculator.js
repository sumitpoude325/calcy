var container = [];
var input1 = 0;
var input2 = 0;
var operator;
var length;
var result;

// takes input
for (let i = 0; i < document.querySelectorAll(".keys >button").length; i++) {
  document
    .querySelectorAll(".keys > button")
    [i].addEventListener("click", function () {
      if (this.textContent != "enter") {
        container.push(this.textContent);
      }
      display();
      switch (this.textContent) {
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

        case "enter":
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
    });
}
//display
function display() {
  document.querySelector("h1").textContent = String(container.join(""));
}
//erase form display
document
  .querySelector(".remove > button")
  .addEventListener("click", function () {
    container.pop();
    display();
    if (container.length == 0) {
      document.querySelector("h1").textContent = "0";
    }
  });

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
