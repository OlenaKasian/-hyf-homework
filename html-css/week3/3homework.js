function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("shipping_ad");
    // Get the output text
    var text = document.getElementById("afterclick");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }