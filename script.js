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