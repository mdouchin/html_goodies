// START CLOCK SCRIPT

Number.prototype.pad = function (n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ];
  var tags = ["d", "mon", "y", "h", "m", "s"],
    corr = [dy, months[mo], yr, hou.pad(2), min.pad(2), sec.pad(2)];
  for (var i = 0; i < tags.length; i++) {
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }

  // Play sound
  let playSound = false;
  let sound = null;
  let quarterSound =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";
  let hourSound =
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3";

  // Every quarter
  if (min != 0 && min % 15 == 0 && sec == 0) {
    sound = quarterSound;
    playSound = true;
  }
  // Every hours
  if (9 <= hou <= 20 && min == 0 && sec == 0) {
    sound = hourSound;
    playSound = true;
  }
  if (playSound) {
    let audio = new Audio(sound);
    audio.play();
  }
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1000);
}

// Rooster