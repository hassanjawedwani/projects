const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

const checkNumber = () => {
  let number;
  if (input.value) {
    number = input.value;
  } else {
    alert("Please provide a phone number");
  }
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;
  if (regex.test(number)) {
    output.innerText += `Valid US number: ${number}\n`;
  } else {
    output.innerText += `Invalid US number: ${number}\n`;
  }
};

const enterKeyHandler = (e) => {
  if (e.key === "Enter") {
    checkNumber();
  }
};
input.addEventListener("keydown", enterKeyHandler);
checkBtn.addEventListener("click", checkNumber);
clearBtn.addEventListener("click", () => {
  input.value = "";
  output.innerText = "";
});
