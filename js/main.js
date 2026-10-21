// Personkortet: hämta en påhittad person från ett API och visa den.
//
// API:et: https://randomuser.me/api/
// Öppna adressen i webbläsaren först och titta på svaret. Personen
// ligger i en array, results, och har objekt i objekt:
//
//   {
//     results: [
//       {
//         name: { first: "Edward", last: "Hughes" },
//         location: { city: "Porirua", country: "New Zealand" },
//         email: "edward.hughes@example.com",
//         picture: { large: "https://..." },
//         ...
//       }
//     ]
//   }
//
// Koden fungerar redan. Klicka på knappen och se. Men den är full av
// punkter: person.name.first, person.location.city ... Vi skriver om
// den med destructuring, ett kortare sätt att plocka ut värden ur ett
// objekt till egna variabler.


function showStatus(variant, message) {
  statusText.dataset.variant = variant;
  statusText.textContent = message;
}

// Steg 1: Hämta elementen från DOM:en
// ---------------------------------------------------------------

const fetchButton = document.querySelector("#fetch-button");
const statusText = document.querySelector("#status");
const card = document.querySelector("#person-card");
const image = document.querySelector("#person-image");
const nameOutput = document.querySelector("#person-name");
const locationOutput = document.querySelector("#person-location");
const emailOutput = document.querySelector("#person-email");

// Steg 2: Hämta en person
// ---------------------------------------------------------------
// Samma mönster som i Pokédexen: fetch, kolla response.ok, json().
//
// TODO: Plocka ut results ur data med { }.
// TODO: results är en array. Plocka ut första personen med [ ].

async function fetchPerson() {
  try {
    const response = await fetch("https://randomuser.me/api/");

    if (!response.ok) {
      throw new Error(`Server svarade med ${response.status}`);
    }

    const data = await response.json();

    // Med ES6 Destrukturering
    const { results } = data; // Destrukturering av objekt
    const [person] = results; // Destrukturering av array - endast första elementet
    return person;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Steg 3: Visa personen
// ---------------------------------------------------------------
// TODO: Plocka ut name, location, email och picture direkt i
//       parametern: function renderPerson({ ... })
// TODO: Plocka sedan ut first och last ur name, city och country ur
//       location, och large ur picture.
// TODO: Skriv om textContent med template literals: `${first} ${last}`
//
// Hur många punkter finns kvar när du är klar?
function renderPerson({ name, location, email, picture }) {

  const { first, last } = name;
  const { city, country } = location;
  const { large } = picture;

  nameOutput.textContent = `${first} ${last}`;
  locationOutput.textContent = `${city} ${country}`;
  emailOutput.textContent = email;

  image.src = large;
  image.alt = `${first} ${last}`;

  card.hidden = false;

}

// Steg 4: Koppla knappen, med laddar och fel
// ---------------------------------------------------------------
// Den här delen är klar. Testa felet: stava fel i URL:en ovan.
fetchButton.addEventListener("click", async () => {

   showStatus("loading", "Hämtar");

  try {
    const person = await fetchPerson();

    renderPerson(person);

    showStatus("", "");

  } catch (error) {
    card.hidden.true;
    showStatus("error", "Det gick inte att ladda någon person");
    console.error(`Error: ${error.message}`);
  }
});
