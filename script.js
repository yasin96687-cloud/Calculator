// Id seletor
const input =document.getElementById("calculator"); 
const buttons = document.querySelectorAll("button");

// forEach diya click event banano
   buttons.forEach((button) =>{
   button.addEventListener ("click", () => {
   const value = button.textContent;

// if diya "AC" true naki chaking
   if ( value === "AC" ) {
   input.value = "";
   }
// else if 
   else if ( value === "DEL") {
   input.value = input.value.slice(0,-1); 
   }

  else if ( value == "=") {
  try {
    input.value = eval(input.value);
  }catch (Error) {
    input.value ="Error";
  }
   }

  else if ( value === "%") {
  input.value += "/100" ; 
  } else {
  input.value += value;
  }

   });
 });


