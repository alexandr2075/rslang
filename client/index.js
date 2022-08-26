import './style.css';
import { getWords } from './src/api/wordsApi';
import WordsPage from './src/components/dictionary/words-page/words-page';

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

// const words = new WordsApi();
console.log(getWords());
const wordsPage = new WordsPage(document.body)