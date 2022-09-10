//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to hex when user inputs in the decimal field
decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    //Converts the decimal value to hex
    binInp.value = decValue.toString(16);
  });

//Convert hex to decimal when user inputs in the hex field
binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  //If the hex number is valid convert it to decimal
  if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 16);
    console.log(decInp.value);
    errorMsg.textContent = "";
  }
  //Else display an error message
  else {
    errorMsg.textContent = "Please Enter An Valid Hex Input";
  }

  //Function to check if the hex number is valid 
  function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1" && num[i] != "2" && num[i] != "3" && num[i] != "4" && num[i] != "5" && num[i] != "6" && num[i] != "7" && num[i] != "8" && num[i] != "9" && num[i] != "A" && num[i] != "B" && num[i] != "C" && num[i] != "D" && num[i] != "E" && num[i] != "F") {
        return false;
      }
    }
    return true;
  }
});