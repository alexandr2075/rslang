import './style.css';
import WordsApi from "./src/api/wordsApi";

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

const testWords = new WordsApi();
console.log(words.getWords())