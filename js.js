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


// Bar menu //

// var burger = document.querySelector('.miCheckbox');
// const menu = document.querySelector('.header__nav');

// burger.addEventListener('click', (e) => {
//   burger.classList.add('expanded')
// })

