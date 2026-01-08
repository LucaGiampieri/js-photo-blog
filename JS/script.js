//Andiamo a selezionare il nostro output
const containerOutput = document.getElementById("container");

//Andiamo a creare una variabile endpoint dove inserire il link API
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//Andiamo a creare una chiamta AJAX che riprenda il nostro endpoint

axios.get(endpoint)
    .then(response =>{
        
        //andiamo ad estrapolare i dati dal nostro endpoint
        const cards = response.data
        
        //creaiamo una varibile di accumolo che poi ci servirà come otuput a schermo
        let cardsOutput = "";

        //andiamo a ciclare l'array in modo da tirare fuori i dati che ci interessano 
        cards.forEach(card => {

            //andiamo a destrutturare l'oggetto
            const {title, date, url} = card;
            console.log(title,date,url);
            
            
        });

        
    })
