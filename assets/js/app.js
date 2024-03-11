//console.log("Ciaooo");

const { createApp } = Vue

createApp({
    //Options object - Data
    data() {
        return {
            //E' una proprietà ma diventa una variabile per il nostro DOM
            message: 'Hello Vue!',
            img: "./assets/img/lago.jpg",
            mytext: "Stampa la text area",
            selected: [],
            count: 0,
            imgTwo: "./assets/img/montagna.jpg",
        }
    },
    // Methods
    /*   Il cui valore è un oggetto in cui
        potremo inserire tutte le funzioni che ci
        serviranno all'interno del nostro codice   */
    methods: {
        greetings: function () {
            console.log("Ciaooooo");
        },
        //Funzione che mi permette di cambiare immagine
        changeImg: function(){
            if (this.img===this.imgTwo){
                this.img="./assets/img/lago.jpg";
            } else 
            this.img=this.imgTwo
        }
    }
}).mount('#app')
