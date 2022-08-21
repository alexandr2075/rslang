import './style.css';
import { getWords } from './src/api/wordsApi';
import Auth from './src/auth';

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

const main = out();
app.insertAdjacentHTML('beforeend', main);

const words = new WordsApi();
console.log(words.getWords());


