# Slutprojekt Apputveckling - NPF Planner

En app för personer med adhd/autism, för att skapa strategier att hantera vardagen.

Appen är byggd med react native och expo. Servern är byggd med node, express och mongodb databas.

react-native-calenders för att visa kalender

react-native-paper för styling

easytimer.js för timer

## Installation

Installera och starta app

```bash
cd app
npm install
npm start

```

Installera och starta server

Servern körs med en lokal databas, för att fungera korrekt behöver man ha en lokal mongodb anslutning så kommer serven skapa upp en db om det inte finns.

```bash
cd server
npm install
npm run dev

```

### Planering Kalender

Kalender där du kan lägga till händelser. Klicka på ett specifikt datum och få detaljer om planerade aktiviteter denna dag.

### Fokus Timer

En timer för att ha fokus i 20 min, sen en break på 5 minuter. För att underlätta att hålla koncentrationen.

### Listor

Skapa checklistor för olika rutiner i vardagen, eller inköpslista/Todo lista.

### Inställningar

Välj vilka komponenter du vill ha med på din hemskärm. Du kan välja mellan planerade aktiviteter/listor/moodtracker.
Välj om du vill ha mörkt eller ljust tema.

### Moodtracker

Registrera dagens mood och se statistik.
