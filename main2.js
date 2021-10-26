/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */
const button1 = document.querySelector(`.gira`);
let utente;
let computer;
button1.addEventListener(`click`, function() {
    utente = Math.floor(Math.random() * 6) + 1;
    computer = Math.floor(Math.random() * 6) + 1;
    document.querySelector(`.ut`).innerHTML = `${utente}`;
    document.querySelector(`.cpu`).innerHTML = `${computer}`;

    if (utente > computer) {
        document.querySelector(`.risultato`).innerHTML = `Complimenti hai VINTO!`;
    } if (utente == computer) {
        document.querySelector(`.risultato`).innerHTML = `Parità!`;
    } if (utente < computer) {
        document.querySelector(`.risultato`).innerHTML = `Complimenti, sei rimasto quello che veramente sei... un perdente!`;
    }
})