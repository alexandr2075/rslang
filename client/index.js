import './style.css';
import { getWords } from './src/api/wordsApi';
import Auth from './src/auth';

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

// const words = new WordsApi();
console.log(getWords());

const auth = new Auth();
auth.render();
