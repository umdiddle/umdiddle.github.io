/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toHamburger() {
    var x = document.getElementById("mylinks");
    if (x.className === "links") {
      x.className += " responsive";
    } else {
      x.className = "links";
    }
  }