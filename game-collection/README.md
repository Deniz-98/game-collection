# Game Collection

**Deniz Nakshbandi**

## Projektbeskrivning
Game Collection är en React-applikation där man ska kunna söka efter spel, spara dem i en personlig samling och skriva egna anteckningar/kommentarer. All data hämtas från RAWG API och samlingen sparas i localStorage så den finns kvar även efter en hard refresh.

## API
Jag har använt mig av [RAWG API](https://rawg.io/apidocs). Detta API:et valdes på grund av dens stora utbud på spel (stora spel samt massa indie spel).

## Instruktioner för att köra projektet

1. Klona repot:
   git clone https://github.com/Deniz-98/kunskapskontroll-game-collection

2. Gå in i mappen:
   cd game-collection

3. Installera beroenden:
   npm install

4. Starta projektet:
   npm run dev

5. Öppna http://localhost:5173 i webbläsaren.

## Implementerade features
- Söka efter spel via RAWG API
- Visa detaljsida för enskilt spel med bild och beskrivning
- Spara spel till personlig samling (Create)
- Redigera anteckningar om spel (Update)
- Ta bort spel från samlingen (Delete)
- Samlingen sparas i localStorage (finns kvar efter refresh)
- Klickbara spelnamn i samlingen

## Tekniker
- React + Vite
- React Router DOM
- Axios
- RAWG API
- localStorage

## Kända begränsningar
- Samlingen sparas endast lokalt i webbläsaren (ingen databas)
- Kräver en giltig RAWG API-nyckel