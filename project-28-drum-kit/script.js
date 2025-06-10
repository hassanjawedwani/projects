function playSound(e) {
  const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audioElement) return;
  audioElement.currentTime = 0;
  audioElement.play();
  const keyElement = document.querySelector(`div[data-key="${e.keyCode}"]`)
  keyElement.classList.add('playing');
}

// ! wrong way to remove class
// setTimeout(() => {
//   document.querySelector(`div[data-key="${e.keyCode}"]`).classList.remove('playing');
// }, 50); 

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound);