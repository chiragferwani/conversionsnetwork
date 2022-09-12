//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to binary when user inputs in the decimal field
decInp.addEventListener("input", () => {
  let decValue = parseInt(decInp.value);
  //Converts the decimal value to binary
  //binInp.value = OctToBin(decInp.value);
  if (octValidator(decInp.value)) {
	binInp.value = OctToBin(decInp.value);
	errorMsg.textContent = "";
  }
  //Else display an error message
  else {
    errorMsg.textContent = "Please Enter An Valid Octal Input";
  }
  function OctToBin(octnum)
{
    let i = 0;
   
    let binary = "";
      
    while (i<octnum.length) {
          
        let c=octnum[i];
        switch (c) {
        case '0':
            binary += "000";
            break;
        case '1':
            binary += "001";
            break;
        case '2':
            binary += "010";
            break;
        case '3':
            binary += "011";
            break;
        case '4':
            binary += "100";
            break;
        case '5':
            binary += "101";
            break;
        case '6':
            binary += "110";
            break;
        case '7':
            binary += "111";
            break;
        }
        i++;
    }
   
    return binary;
}
function octValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1" && num[i] != "2" && num[i] != "3" && num[i] != "4" && num[i] != "5" && num[i] != "6" && num[i] != "7") {
        return false;
      }
    }
    return true;
  }
 
});

//Convert binary to decimal when user inputs in the binary field
binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  //If the binary number is valid convert it to decimal
  if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 2).toString(8);
    errorMsg.textContent = "";
  }
  //Else display an error message
  else {
    errorMsg.textContent = "Please Enter An Valid Binary Input";
  }

  //Function to check if the binary number is valid i.e it does not contain any number other than 0 and 1
  function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1") {
        return false;
      }
    }
    return true;
  }
});