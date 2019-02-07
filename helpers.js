
(function (btn) { 
  function clearInputs(inputs, i, len, e) {
    // inputs variable is for the element input and effects all inputs
    inputs = document.querySelectorAll('input');
    len = inputs.length;
    for (i = 0; i < len; i++) {
        inputs[i].value = '';
    }
    if(e) e.preventDefault()
    console.log("Inputs cleared.");
  }
  // btn variable has same name as the button's id
  btn = document.getElementById("btn"); 
  btn.addEventListener("click", clearInputs);
})(); // Clear Inputs


//  Assign length to any array ( len(array_name); )
function len(a) {
  console.log(a.length);
  return a.length;
}
