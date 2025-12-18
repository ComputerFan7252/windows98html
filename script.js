function startMenu() {
  var sm = document.getElementById("start-menu");
  if (sm.style.display === "none") {
    sm.style.display = "flex";
  } else {
    sm.style.display = "none";
  }
}

function openNotepad() {
  var sm = document.getElementById("window notepad");
  if (sm.style.display === "none") {
    sm.style.display = "block";
  }
}

function closeNotepad() {
  var sm = document.getElementById("window notepad");
  if (sm.style.display === "block") {
    sm.style.display = "none";
  }
}
