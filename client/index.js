import './style.css';
import { getWords } from './src/api/wordsApi';

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

// const words = new WordsApi();
console.log(getWords());
