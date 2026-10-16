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


// Steg 1: Hämta elementen från DOM:en
// ---------------------------------------------------------------

const fetchButton = document.querySelector("#fetch-button");
const status = document.querySelector("#status");
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
  const response = await fetch("https://randomuser.me/api/");

  if (!response.ok) {
    throw new Error(`Servern svarade ${response.status}`);
  }

  const data = await response.json();
  const person = data.results[0];

  return person;
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

function renderPerson(person) {
  nameOutput.textContent = person.name.first + " " + person.name.last;
  locationOutput.textContent = person.location.city + ", " + person.location.country;
  emailOutput.textContent = person.email;

  image.src = person.picture.large;
  image.alt = person.name.first + " " + person.name.last;

  card.hidden = false;
}


// Steg 4: Koppla knappen, med laddar och fel
// ---------------------------------------------------------------
// Den här delen är klar. Testa felet: stava fel i URL:en ovan.

fetchButton.addEventListener("click", async () => {
  status.textContent = "Hämtar…";
  status.dataset.variant = "loading";

  try {
    const person = await fetchPerson();
    renderPerson(person);

    status.textContent = "";
    delete status.dataset.variant;
  } catch (error) {
    card.hidden = true;
    status.textContent = "Det gick inte att hämta någon person. Försök igen.";
    status.dataset.variant = "error";
    console.error(error);
  }
});
