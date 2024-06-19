let amounts = [];
let unit = [];
let ingredients = [];
let stuff = [];

let pastaVenusmuscheln = [
  [
    'Pasta Venusmuscheln',
    './img/pastavongole.jpg',
    '30',
    '30',
    'simpel',
    '24.11.2023',
    'Felix',
    './img/felix.jpg',
    'Venusmuscheln gründlich reinigen. Pasta al dente kochen. Öl erhitzen, Knoblauch und Chiliflocken anbraten. Muscheln mit Wein dünsten, Pasta hinzufügen, Aromen vereinen. Nach Bedarf Nudelwasser für die Sauce verwenden. Mit frischer Petersilie, Salz und Pfeffer abschmecken. Portionieren und mit Brot servieren, um die köstliche Sauce zu genießen.',
  ],
  [600, ' g', ' Spaghetti oder Linguine'],
  [1, ' kg', ' Venusmuscheln, gereinigt'],
  [4, '', ' Knoblauchzehen, fein gehackt'],
  [2, ' ', ' getrocknete Chilischoten (optional), fein gehackt'],
  [0.5, ' L', ' Trockener Weißwein'],
  [2, ' EL', 'Olivenöl'],
  [1, ' Handvoll', ' frische glatte Petersilie, grob gehackt'],
  ['', ' ', 'Salz und Pfeffer nach Geschmack'],
];

let ungarischeGulaschsuppe = [
  [
    'Ungarische Gulaschsuppe',
    './img/suppe.jpg',
    '15',
    '60',
    'simpel',
    '24.11.2023',
    'El Chef',
    './img/profile.png',
    'Zu Beginn werden die Kartoffeln und die Karotten geschält, gewaschen und in kleine Würfel geschnitten. Auch die Champignons werden geputzt und in Scheiben geschnitten. Zusammen mit den klein gehackten Zwiebeln wird der Rindergulasch in einem Topf mit etwas Öl angebraten. Die Champignonscheiben werden hinzugefügt und mit angebraten. Die Paprika wird ebenso gewürfelt und in den Topf hinzugegeben. Das ganze wird nun mit Salz und Pfeffer abgeschmeckt.   Als nächstes werden die Brühe und der Tomatensaft hinzugefügt und die Suppe zum kochen gebracht. Mit den Gewürzen Kümmel, Tymian und Paprikagewürz wird das ganze verfeinert und zum gewünschten Ergebnis abgeschmeckt.',
  ],
  [500, ' g', ' Rindergulasch'],
  [2, ' große', ' Möhre(n)'],
  [4, ' große', ' Kartoffel(n)'],
  [1, '', ' Zwiebel(n)'],
  [100, ' g', ' Champignons'],
  [1000, ' ml', ' Tomatensaft'],
  [1000, ' ml', ' Brühe'],
  [2, ' ', ' Paprika'],
  ['', ' ', 'Salz und Pfeffer'],
  ['', ' ', 'Majoran'],
  ['', ' ', 'Kümmel'],
  ['', ' ', 'Thymian'],
  ['', ' ', 'Paprikagewürz'],
];

let griechischerSalat = [
  [
    'Griechischer Salat',
    './img/salat.jpg',
    '15',
    '15',
    'simpel',
    '28.09.2020',
    'Britta',
    './img/profile.png',
    'Gurke waschen und ungeschält in dünne Scheiben oder Stücke schneiden. Paprika waschen, entkernen und in dünne Streifen schneiden. Tomaten waschen und achteln. Zwiebeln schälen und in feine Ringe schneiden. Schafskäse würfeln und mit Oregano bestreuen. Oliven abgießen und mit Gurke. Paprika. Tomaten. Zwiebeln und Schafskäse in eine Schüssel geben. Olivenöl. Zitronensaft. Salz und Pfeffer zu einer Sauce verrühren und über den Salat gießen. Umrühren.',
  ],
  [1, '', ' Salatgurke(n)'],
  [2, '', ' Paprikaschote(n)'],
  [500, ' g', ' Tomate(n)'],
  [2, '', ' Zwiebel(n)'],
  [200, ' g', ' Schafskäse'],
  [1, ' Glas', ' Oliven (schwarz, ca. 100g)'],
  ['', ' ', 'Salz und Pfeffer'],
  [1, ' ', ' Zitrone(n)'],
  [200, ' ml', ' Olivenöl'],
  ['', ' ', 'Oregano'],
];

let franzoesischeCroissants = [
  [
    'Französische Croissants',
    './img/croissant.jpg',
    '30',
    '250',
    'anspruchsvoll',
    '28.11.2023',
    'Felix',
    './img/felix.jpg',
    'Alle Zutaten für den Grundteig in die Küchenmaschine geben und für 3 Minuten im langsamen und für 8 Minuten im schnellen Gang miteinander verkneten und für mehrere Stunden kalt stellen. Jetzt die Butterplatte vorbereiten. Dafür die Butter direkt aus dem Kühlschrank nehmen und mit dem Mehl vermengen. Eine Platte formen (ca. die Form und Größe einer Tafel Schokolade) und in den Kühlschrank geben. Danach die Butterplatte ausrollen, ebenso den Teig in doppelter Länge. Die Butterplatte auf den Teig legen und einschlagen. Das Ganze wieder ausrollen, ein Drittel des Teiges zur Mitte einschlagen und kaltstellen. Zuletzt den Teig halbmondförmig formen und anschließend bei 200°C 20-22 Minuten lang backen.',
  ],
  [500, ' g', ' Weizenmehl'],
  [50, ' g', ' Zucker'],
  [1, '', ' Ei(er) (Gr. M)'],
  [10, ' g', ' Hefe'],
  [20, ' g', ' Butter'],
  [10, ' g', ' Salz'],
  [210, ' ml', ' Wasser'],
  [225, ' g', ' Butter (für die Butterplatte)'],
  [25, ' g', ' Mehl (für die Butterplatte)'],
];

function openmobilemenu() {
  let short = document.getElementById('slidemenu');
  if (short.classList.contains('show-overlay-menu')) {
    short.classList.remove('show-overlay-menu');
  } else {
    short.classList.add('show-overlay-menu');
  }
}

function calculate() {
  let amount = +document.getElementById('amount').value; // Holt den Wert aus dem Inputfeld
  if (amount > 0) {
    // Checkt, ob der manuell eingetippe Wert positiv ist
    let result = amount / 4; // Berechnet den Muliplikationsfaktor
    document.getElementById('ingredients').innerHTML = ''; // Löscht die alte Liste der Zutaten
    for (let i = 1; i < amounts.length; i++) {
      // Schleife: Berechnet die neuen Mengen
      let newamounts = amounts[i] * result;
      createRecipe(newamounts, i); // Startet die Übertragungsfunktion
    }
  } else {
    alert('Ungültig! Der Wert muss mindestens bei 1 Portion liegen!');
  } // Sollte der Inputwert negativ sein gibt es eine Fehlermeldung
}

function createRecipe(amount, i) {
  // Übertragungsfunktion: Füllt die Tabelle mit den Mengen und Zutaten.

  document.getElementById('meal').innerHTML = stuff[0][0];
  document.getElementById('mealIMG').src = stuff[0][1];
  document.getElementById('shortTime').innerHTML = `${stuff[0][2]} Minuten`;
  document.getElementById('longTime1').innerHTML = `${stuff[0][3]} Min.`;
  document.getElementById(
    'longTime2'
  ).innerHTML = `Gesamtzeit: ca. ${stuff[0][3]} Minuten`;
  document.getElementById('difficulity').innerHTML = stuff[0][4];
  document.getElementById('date').innerHTML = stuff[0][5];
  document.getElementById('signature').innerHTML = stuff[0][6];
  document.getElementById('profileIMG').src = stuff[0][7];
  document.getElementById('description').innerHTML = stuff[0][8];
  document.title = 'Kochwelt | ' + stuff[0][0];

  let list = document.getElementById('ingredients');
  if (amount == 0) {
    list.innerHTML += `<tr><td>${ingredients[i]}</td></tr>`;
  } else {
    list.innerHTML += `<tr><td>${amount}${unit[i]}${ingredients[i]}</td></tr>`;
  }
}

function recipe() {
  amounts = [];
  unit = [];
  ingredients = [];
  stuff = [];

  let order = localStorage.getItem('saveRecipe');

  if (order == 1) {
    stuff = pastaVenusmuscheln;
  }
  if (order == 2) {
    stuff = ungarischeGulaschsuppe;
  }
  if (order == 3) {
    stuff = griechischerSalat;
  }
  if (order == 4) {
    stuff = franzoesischeCroissants;
  }

  for (let i = 1; i < stuff.length; i++) {
    amounts[i] = stuff[i][0];
    unit[i] = stuff[i][1];
    ingredients[i] = stuff[i][2];
  }
  calculate();
}

function sendRecipe(callRecipe) {
  localStorage.setItem('saveRecipe', callRecipe);
}

function sendMail(event) {
  event.preventDefault();

  const privacyCheckbox = document.getElementById('privacy');
  if (!privacyCheckbox.checked) {
    alert('Bitte akzeptiere die Datenschutzbestimmungen.');
    return;
  }

  // Continue with form submission if the checkbox is checked
  const data = new FormData(event.target);

  fetch('https://formspree.io/f/xrgwwqoq', {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(() => {
      window.location.href = './send_mail.html';
    })
    .catch((error) => {
      console.log(error);
    });
}
