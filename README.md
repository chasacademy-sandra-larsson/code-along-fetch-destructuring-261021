# Fetch och object destructuring

Code-along: hämta en påhittad person från [randomuser.me](https://randomuser.me/) och visa den på ett kort. Koden fungerar redan, men den är full av `person.name.first` och `person.location.city`. Vi skriver om den med destructuring.

## Kom igång

Öppna mappen i VS Code och starta Live Server. Öppna DevTools (F12). Öppna också [https://randomuser.me/api/](https://randomuser.me/api/) i en egen flik och titta på hur svaret ser ut innan vi börjar.

HTML:en och CSS:en är klara. Vi jobbar i `js/main.js`.

1. **Klicka på knappen.** Det fungerar. Läs `fetchPerson` och `renderPerson` och räkna punkterna.
2. **Plocka ut personen.** `const { results } = data;` och sedan `const [person] = results;`. Klamrar för objekt, hakparenteser för arrayer.
3. **Destructuring i parametern.** `function renderPerson({ name, location, email, picture })`.
4. **Ett steg till in.** `const { first, last } = name;` och samma sak för `location` och `picture`.
5. **Template literals.** `` `${first} ${last}` `` i stället för `+ " " +`.

## Det här övar du på

- **Object destructuring:** `const { a, b } = objekt`.
- **Array destructuring:** `const [first] = array`.
- **Destructuring i en funktions parameter.**
- **Nästlade objekt:** att gå in i ett objekt i ett objekt.
- Repetition: `fetch`, `response.ok`, `try...catch`.

## Bygg vidare

1. Visa personens ålder. Den ligger i `dob.age`.
2. Döp om när du plockar ut: `const { large: imageUrl } = picture;`. När är det bra?
3. Ge ett standardvärde: `const { phone = "Inget nummer" } = person;`. Vad händer om fältet finns?
4. Hämta fem personer på en gång med `https://randomuser.me/api/?results=5` och visa alla.

*// Sandra*
