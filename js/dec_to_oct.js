//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to octal when user inputs in the decimal field
decInp.addEventListener("input", () => {
  let decValue = parseInt(decInp.value);
  //Converts the decimal value to binary
  binInp.value = decValue.toString(8);
});

//Convert binary to decimal when user inputs in the binary field
binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  //If the binary number is valid convert it to decimal
  if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 8);
    errorMsg.textContent = "";
  }
  //Else display an error message
  else {
    errorMsg.textContent = "Please Enter An Valid Octal Input";
  }

  //Function to check if the binary number is valid i.e it does not contain any number other than 0 and 1
  function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1" && num[i] != "2" && num[i] != "3" && num[i] != "4" && num[i] != "5" && num[i] != "6" && num[i] != "7") {
        return false;
      }
    }
    return true;
  }
});