// button holen
const button = document.getElementById("action-btn");
// box holen
const box = document.getElementById("color-box");
// überschrift holen
const title = document.getElementById("main-title");

// auf klicke reagieren
button.addEventListener("click", () => {
  console.log("Button wurde geklickt");
  //1. box Farbe umschalten
  box.classList.toggle("active");
  button.classList.toggle("burning");

  // übeschrift anpassen !!
  if (box.classList.contains("active")) {
    title.textContent = "Du hast es geschaft 👻";
  } else {
    title.textContent = "Javascript Mini Übung 🕷️";
  }
});
