//console.log("Ciaooo");

const { createApp } = Vue

createApp({
  //Options object - Data
  data() {
    return {
      //E' una proprietà ma diventa una variabile per il nostro DOM
      message: 'Hello Vue! Sembra molto più comodo del solo JS',
    }
  },
}).mount('#app')
