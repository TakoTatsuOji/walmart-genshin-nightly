const notes = document.querySelectorAll('[data-keycode]');

let note, aud;

function removeNoteActive(e) {
  if (e.propertyName != 'transform') return;
  e.target.classList.remove('active');

  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
  }
}

function addNoteActiveKb(e) {
  note = document.querySelector(`.note[data-keycode="${e.keyCode}"]`);
  aud = document.querySelector(`audio[data-keycode="${e.keyCode}"]`);

  if (!aud) return;
  aud.currentTime = 0;
  aud.play();
  note.classList.add('active');
}

function addNoteActiveMouse(e) {
  note = document.querySelector(
    `.note[data-keycode="${e.target.dataset.keycode}"]`,
  );
  aud = document.querySelector(
    `audio[data-keycode="${e.target.dataset.keycode}"]`,
  );

  if (e.target.dataset.keycode == note.dataset.keycode) {
    aud.currentTime = 0;
    aud.play();
    e.target.classList.add('active');
  }
}

window.addEventListener('keydown', addNoteActiveKb);
notes.forEach((note) => {
  note.addEventListener('click', addNoteActiveMouse);
  note.addEventListener('transitionend', removeNoteActive);
});
