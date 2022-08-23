import out from './src/js/MainPage';
import WordsApi from './src/api/wordsApi';

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

const main = out();
app.insertAdjacentHTML('beforeend', main);

const words = new WordsApi();
console.log(words.getWords());
