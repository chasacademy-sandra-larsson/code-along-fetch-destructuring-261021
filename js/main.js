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



// Steg 3: Visa personen
// ---------------------------------------------------------------
// TODO: Plocka ut name, location, email och picture direkt i
//       parametern: function renderPerson({ ... })
// TODO: Plocka sedan ut first och last ur name, city och country ur
//       location, och large ur picture.
// TODO: Skriv om textContent med template literals: `${first} ${last}`
//
// Hur många punkter finns kvar när du är klar?




// Steg 4: Koppla knappen, med laddar och fel
// ---------------------------------------------------------------
// Den här delen är klar. Testa felet: stava fel i URL:en ovan.
