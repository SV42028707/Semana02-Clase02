const value = Number(prompt("Insert a number"));

const numberLength = function (value) {
  if (value > 0) {
    alert(1);
  } else if (value < 0) {
    alert(-1);
  } else if (value == 0) {
    alert(0);
  } else {
    alert("Please enter a number");
  }
};

numberLength(value);
