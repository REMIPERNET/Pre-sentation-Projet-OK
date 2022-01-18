const spaceHolder = document.querySelectorAll('.space-holder');
const horizontal = document.querySelectorAll('.horizontal');
const sticky = document.querySelectorAll('.sticky');

for (let i = 0; i < spaceHolder.length; i++) {
  spaceHolder[i].style.height = `${calcDynamicHeight(horizontal[i])}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 100; // 100 est le padding (en pixels) desiré sur la droite de la .cards container.
}

window.addEventListener('scroll', () => {
  horizontal[i].style.transform = `translateX(-${sticky[i].offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder[i].style.height = `${calcDynamicHeight(horizontal[i])}px`;
});

}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}