//andiamo a selezionare il nostro output
const containerOutput = document.getElementById("container");

//andiamo a creare una variabile endpoint dove inserire il link API
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//andiamo a selezionare l'overlay, il button e l'immagine
const overlay = document.getElementById("overlay");
const buttonInput = document.getElementById("overlay-button");
const overlayImg = document.getElementById("overlay-img");

//andiamo a creare una chiamta AJAX che riprenda il nostro endpoint
axios.get(endpoint)
    .then(response => {

        //andiamo ad estrapolare i dati dal nostro endpoint
        const cards = response.data

        //creaiamo una varibile di accumolo che poi ci servirà come otuput a schermo
        let cardsOutput = "";

        //andiamo a ciclare l'array in modo da tirare fuori i dati che ci interessano 
        cards.forEach(card => {

            //andiamo a destrutturare l'oggetto
            const { title, date, url } = card;

            //andiamo a generare il contenuto nella nostra variabile di accumolo
            cardsOutput += cardGenerator(title, date, url)
        });

        //andiamo a innestare nell'HTML quello che abbiamo generato
        containerOutput.innerHTML = cardsOutput;

        //andiamo a selezionare le nostre card
        const cardInput = document.querySelectorAll(".card");

        //andiamo a creare l'evento che al click faccia ricomparire l'overlay
        //dobbiamo ciclare cardInput perchè è una NodeList e non un singolo elemento
        cardInput.forEach(card => {

            //in questo modo possiamo cliccare opgni singola card
            card.addEventListener("click", () => {

                //prendo l'immagine della card cliccata in modo da avere url e alt solo di quella specifica immagine
                const img = card.querySelector(".card-img");

                //inserisco l'url e l'alt nell'immagine nell'overlay
                overlayImg.src = img.src;
                overlayImg.alt = img.alt;

                //faccio si che l'overlay compaia a schermo
                overlay.classList.remove("display-none");
            });
        });

        //andiamo a fare in modo che premendo sul bottone "chiudi" l'overlay scompaia
        buttonInput.addEventListener("click", () => {

            //faccio si che l'overlay scompaia dallo schermo
            overlay.classList.add("display-none");
        })
    })
    .catch(error => {
        //codice da eseguire in caso di errore
        console.error(error.message)
    })


//FUNCTION

function cardGenerator(titleFunction, dateFunction, urlFunction) {
    return `<div class="card">
                <div class="card-pin">
                    <img class="card-pin-img" src="../img/pin.svg" alt="pin">
                </div>
                <div class="card-img-container">
                    <img class="card-img" src="${urlFunction}" alt="${titleFunction} Image">
                </div>
                <div class="card-title">${titleFunction}</div>
                <div class="card-date">${dateFunction}</div>
            </div>`

}
