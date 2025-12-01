// ===== Elemente holen =====

// Button holen
const button = document.getElementById('action-btn');
// Box holen
const box = document.getElementById('color-box');
// Überschrift holen
const title = document.getElementById('main-title');

// Name & Sterne
const outputForm = document.getElementById('output-box');
const nameInput = document.getElementById('name-input');
const amountInput = document.getElementById('amount-input');
const greetingText = document.getElementById('greeting-text');
const outputText = document.getElementById('output-text');

// Zutaten-Rechner
const personenInput = document.getElementById('personen');
const calcBtn = document.getElementById('calculate-btn');
const ergebnisDiv = document.getElementById('ergebnis');


// ===== 1. Klick-Button oben =====

button.addEventListener('click', () => {
  console.log('Button wurde geklickt');

  // 1. Box-Farbe umschalten
  box.classList.toggle('active');

  // 2. Flammen-Effekt am Button umschalten
  button.classList.toggle('burning');

  // 3. Überschrift anpassen
  if (box.classList.contains('active')) {
    title.textContent = 'Du hast es geschafft 👾';
  } else {
    title.textContent = 'Javascript Mini Übung 🐝';
  }
});


// ===== 2. Name + Sterne-Formular =====

outputForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Seite nicht neu laden

  const name = nameInput.value.trim();
  const amount = Number(amountInput.value);

  if (!name) {
    greetingText.textContent = 'Bitte gib einen Namen ein.';
    return;
  }

  if (isNaN(amount) || amount < 0 || amount > 10) {
    greetingText.textContent = 'Bitte eine Zahl zwischen 0 und 10 eingeben.';
    return;
  }

  // Begrüßungstext
  greetingText.textContent = `Hey ${name}, deine Sterne:`;

  // Sterne generieren
  let stars = '';
  for (let i = 0; i < amount; i++) {
    stars += '⭐';
  }
  outputText.textContent = stars || 'Keine Sterne ausgewählt.';
});


// ===== 3. Kontaktformular / Mail senden =====

function sendMail(event) {
  event.preventDefault(); // Standard-Submit stoppen

  fetch('https://formspree.io/f/xblnhlbg', {
    method: 'POST',
    body: new FormData(event.target),
    headers: {
      Accept: 'application/json',
    },
  })
    .then(() => {
      // nach erfolgreichem Senden auf Danke-Seite gehen
      window.location.href = './send_mail.html';
    })
    .catch((error) => {
      console.log(error);
    });
}


// ===== 4. Zutaten-Rechner =====

// Basis-Rezept für 1 Person (nur als Beispiel)
const baseRecipe = {
  nudeln: 100, // g
  sauce: 80, // g
  kaese: 20, // g
};

calcBtn.addEventListener('click', () => {
  const personen = Number(personenInput.value);

  if (isNaN(personen) || personen < 1) {
    ergebnisDiv.textContent = 'Bitte mindestens 1 Person eingeben.';
    return;
  }

  const nudelnGesamt = baseRecipe.nudeln * personen;
  const sauceGesamt = baseRecipe.sauce * personen;
  const kaeseGesamt = baseRecipe.kaese * personen;

  ergebnisDiv.innerHTML = `
    <strong>Zutaten für ${personen} Person(en):</strong><br>
    🍝 Nudeln: ${nudelnGesamt} g<br>
    🍅 Soße: ${sauceGesamt} g<br>
    🧀 Käse: ${kaeseGesamt} g
  `;
});

// ===== 5. Emoji-Generator =====
const emojiForm   = document.getElementById('emoji-form');
const emojiInput  = document.getElementById('emoji-input');
const emojiAmount = document.getElementById('emoji-amount');
const emojiOutput = document.getElementById('emoji-output');

emojiForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const symbol = emojiInput.value.trim();
  const amount = Number(emojiAmount.value);
  
  // Eingabe validieren
  if (!symbol) {
    emojiOutput.textContent = 'Bitte ein Emoji oder Wort eingeben.';
    return;
  }
  if (isNaN(amount) || amount < 1 || amount > 20) {
    emojiOutput.textContent = 'Bitte eine Zahl zwischen 1 und 20 eingeben.';
    return;
  }
  
  // 2. Wiedrholung erzeugen
  let result = '';
  for (let i = 0; i < amount; i++) {
    result += symbol + ' ';
  }

  // 3. Ergebnis anzeigen
  emojiOutput.textContent = result;
});

// ===== 5. Diamanten-Verteiler =====
const spielerInput     = document.getElementById('spieler');
const diamantBtn       = document.getElementById('diamant-btn');
const diamantErgebnis  = document.getElementById('diamant-ergebnis');

diamantBtn.addEventListener('click', () => {
  const spieler = Number(spielerInput.value);
  if (isNaN(spieler) || spieler < 1) {
    diamantErgebnis.textContent = 'Bitte mindestens 1 Spieler eingeben.';
    return;
  }

  // Diamanten berechnen
  const gesamt = spieler * DIAMANTEN_PRO_SPIELER;
 
  // Ergebnis anzeigen
  diamantErgebnis.innerHTML = `<strong>Diamanten-Verteiung</strong><br>
  Spieler: ${spieler}<br>
   Benötigte Diamanten insgesamt: ${gesamt} 💎 `;
});



