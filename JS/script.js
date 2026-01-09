//Andiamo a selezionare il nostro output
const containerOutput = document.getElementById("container");

//Andiamo a creare una variabile endpoint dove inserire il link API
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//Andiamo a creare una chiamta AJAX che riprenda il nostro endpoint

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

        //Andiamo a innestare nell'HTML quello che abbiamo generato
        containerOutput.innerHTML = cardsOutput;
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
  