/* Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo. */
const array = ["jacopoferroni2706@gmail.com", "lavi.salvatorelli@gmail.com", "leo.salvatorelli@gmail.com", "paola.cardone@gmail.com", "carlo.ferroni@gmail.com", "giulia.ferroni@gmail.com", "erbrasiliano@gmail.com"];
console.log(array);
let indicatore = 0;


const button = document.querySelector(`.verifybutton`);
button.addEventListener(`click`, function() {
    const email = document.getElementById(`e-mail`).value.trim().toLowerCase();
    console.log(email);
    if (email.includes("@") == false) {
        alert(`Quella inserita non è una mail, deve obbligatoriamente contenere [@]`)
    }
    else {
        for(let i = 0; i < array.length; i++) {
            if (email === array[i]) {
                document.querySelector(`.presence`).innerHTML = `L'e-mail è presente nella lista`;
                indicatore = 1;
                break;
            }
        }
    }

    if (indicatore == 0) {
        document.querySelector(`.presence`).innerHTML = `L'e-mail non è presente nella lista`;
    }
})
