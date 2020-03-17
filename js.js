window.onscroll = function() {scrollActivate()};

var navbar = document.getElementById("header__nav");
var sticky = header__nav.offsetTop;

function scrollActivate() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed-nav")
  } else {
    navbar.classList.remove("fixed-nav");
  }
}

//Botones tooltips

const btn1 = document.querySelector('.btn-tooltip1');
const tooltip1 = document.querySelector('.tooltip1');
const closeElement = document.querySelector('.experience_list__tooltip--close');

function openTooltip(event) {
  let addClass = event.currentTarget;
  tooltip1.classList.toggle('open-tooltip');
}
function closeTooltip(event) {
  let addClass = event.currentTarget;
  tooltip1.classList.toggle('open-tooltip');
}
btn1.addEventListener('click', openTooltip);
closeElement.addEventListener('click', openTooltip);




