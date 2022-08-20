
import WordsApi from "./src/api/wordsApi.js";

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

const words = new WordsApi();
console.log(words.getWords())



