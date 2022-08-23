import './style.css';
import out from './src/js/MainPage';
import WordsApi from './src/api/wordsApi';
import Auth from './src/auth';

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

const main = out();
app.insertAdjacentHTML('beforeend', main);

// const words = new WordsApi();
console.log(WordsApi.getWords());

const auth = new Auth();
auth.render();

