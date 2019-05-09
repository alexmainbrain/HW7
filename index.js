// @ts-check

const keyboard = ["A", "S", "D", "F", "G", "H", "J", "K"];

function getSound(key) {
  return document.getElementById('soundOn' + key)
}

function getButton(key) {
  return document.getElementById('playOn' + key)
}

document.addEventListener("keydown", function (e) {
  function piano(sound, play) {
    sound.play();
    sound.currentTime = 0;
    play.click();
    play.classList.add("keyPress");
    window.addEventListener("keyup", () => play.classList.remove("keyPress"));
  }
  if (keyboard.includes(e.key.toUpperCase())) {
    return piano(getSound(e.key.toUpperCase()), getButton(e.key.toUpperCase()))
  };
});

document.addEventListener('mousedown', (a)=>{
  function piano(sound, play){
    sound.play();
    sound.currentTime = 0;
    play.click();
    play.classList.add("keyPress");
    window.addEventListener("mouseup", () => play.classList.remove("keyPress"));
  }
  if (keyboard.includes(a.toElement.innerHTML)){
    return piano(getSound(a.toElement.innerHTML), getButton(a.toElement.innerHTML))
  }
})
