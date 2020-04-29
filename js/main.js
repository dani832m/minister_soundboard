/* Prevent right click */
window.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);

/* Play audio on 'keydown' */
const playAudioOnKeydown = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // If no audio, stop running
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing");
};

/* Play audio on 'click' */
const playAudioOnClick = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.srcElement.dataset.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.srcElement.dataset.key}"]`);

  if (!audio) return; // If no audio, stop running
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing");
};

/* Remove transition */
const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

/* Call 'removeTransition' on every key when transition ends */
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

/* Listen on 'keydown' */
window.addEventListener("keydown", playAudioOnKeydown);

/* Listen on 'click' (every key) */
keys.forEach((key) => key.addEventListener("click", playAudioOnClick));
