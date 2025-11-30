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

function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xblnlblg", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    window.location.href = "./send_mail.html";
  }).catch((error) => {
    console.log(error);
  });
}
