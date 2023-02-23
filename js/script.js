"use strict";
  function myFunction(x) {
    x.classList.toggle("change");
  }

//JAVASCRIPT 4 - PHONE NUMBER FORMATTING
//Implements security features
"use strict";
document.getElementById("phone").addEventListener("keydown", function(e) {
  const txt = this.value;
  // prevent more than 14 characters, ignore the spacebar, allow the backspace
  if ((txt.length == 14 || e.which == 32) & e.which !== 8) e.preventDefault();
  // add spaces after 3 & 7 characters, allow the backspace
  if ((txt.length == 3 || txt.length == 7) && e.which !== 8)
    this.value = this.value + " ";
});
