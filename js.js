window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header__nav");
var sticky = header__nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed-nav")
  } else {
    navbar.classList.remove("fixed-nav");
  }
}


