import './sprint.scss';
import createComponent from '../utils/createComponent';
import Words from '../components/dictionary/words/words';
import PaginationButtons from '../components/pagination/pagination-buttons';
import wordsPageState from '../utils/state';
import Footer from '../components/footer';
import { getWords } from '../api/wordsApi';

export default class Sprint extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'sprint', '');
    this.screensaver = new createComponent(this.node, 'div', 'screensaver');
    this.container = new createComponent(this.screensaver.node, 'div', 'container');
    this.startButton = new createComponent(this.container.node, 'button', 'start-button', 'Начать');
    
    this.setEventListener();
    this.correctAnswers = [];
    this.wrongAnswers = [];
    this.arrIdWordsCorrectAnswerSprint = [];
    this.arrIdWordsWrongAnswerSprint = [];
  }

  renderSprint() {
    this.englishWords = new createComponent(this.container.node, 'div', 'english-words');
    this.timer = new createComponent(this.englishWords.node, 'div', 'timer');
    this.englishWord = new createComponent(this.englishWords.node, 'p', 'english-word');
    this.wordTranslation = new createComponent(this.englishWords.node, 'p', 'word-translation');
    this.mark = new createComponent(this.englishWords.node, 'div', 'mark', 'xxx');
    // this.header = new WordsHeader(this.wordsContainer.node);
    // this.words = new Words(this.wordsContainer.node);
    this.paginationButtons = new PaginationButtons(this.englishWords.node, 'Неверно', 'Верно');
    this.timerLogic();
    this.gameLogic();
    // this.footer = new Footer(this.wordsContainer.node)
    // this.toMenuHandler();
  }

  timerLogic() {
    let counter = 16;
    const id = setInterval(() => {
      this.timer.node.innerText = counter;
      counter -= 1;
      if (counter === 0) {
        clearInterval(id);
        this.englishWords.destroy();
        this.renderResults();
        // TODO: поменять userId на localStorage.getItem...
        const { correct } = wordsPageState.wordsFromSprint.userId;
        this.arrIdWordsCorrectAnswerSprint.forEach((idWord) => {
          if (Object.prototype.hasOwnProperty.call(correct, idWord)) {
            correct[idWord] += 1;
          } else {
            correct[idWord] = 1;
          }
        });
        const { wrong } = wordsPageState.wordsFromSprint.userId;
        this.arrIdWordsWrongAnswerSprint.forEach((idWord) => {
          if (Object.prototype.hasOwnProperty.call(wrong, idWord)) {
            wrong[idWord] += 1;
          } else {
            wrong[idWord] = 1;
          }
        });
        console.log(wordsPageState);
      }
    }, 1000);
  }

  async getWordArray(n) {
    const defaultWordsFromTheserver = await getWords(n);
    const engl = [];
    const translate = [];
    defaultWordsFromTheserver.forEach((obj) => {
      engl.push({ id: obj.id, english: obj.word });
      translate.push({ id: obj.id, russian: obj.wordTranslate });
    });
    const sortTranslate = [...translate].sort(() => Math.random() - 0.2);
    return { engl, sortTranslate };
  }

  async gameLogic() {
    let index = 0;
    let n = 0;
    let arr = await this.getWordArray(n);
    this.englishWord.node.innerText = arr.engl[index].english;
    this.wordTranslation.node.innerText = arr.sortTranslate[index].russian;

    this.paginationButtons.onNextPage = async () => {
      if (arr.engl[index].id === arr.sortTranslate[index].id) {
        this.mark.node.style.color = 'green';
        this.correctAnswers.push(`верно: ${arr.engl[index].english} - ${arr.sortTranslate[index].russian}`);
        this.arrIdWordsCorrectAnswerSprint.push(arr.engl[index].id);
      }
      if (arr.engl[index].id !== arr.sortTranslate[index].id) {
        this.mark.node.style.color = 'red';
        this.wrongAnswers.push(`неверно: ${arr.engl[index].english} - ${arr.sortTranslate[index].russian}`);
        this.arrIdWordsWrongAnswerSprint.push(arr.engl[index].id);
      }
      index += 1;
      if (index > 19) {
        n += 1;
        arr = await this.getWordArray(n);
        index = 0;
      }
      this.englishWord.node.innerText = arr.engl[index].english;
      this.wordTranslation.node.innerText = arr.sortTranslate[index].russian;
    };
    this.paginationButtons.onPrevPage = async () => {
      if (arr.engl[index].id !== arr.sortTranslate[index].id) {
        this.mark.node.style.color = 'green';
        this.correctAnswers.push(`неверно: ${arr.engl[index].english} - ${arr.sortTranslate[index].russian}`);
        this.arrIdWordsCorrectAnswerSprint.push(arr.engl[index].id);
      }
      if (arr.engl[index].id === arr.sortTranslate[index].id) {
        this.mark.node.style.color = 'red';
        this.wrongAnswers.push(`верно: ${arr.engl[index].english} - ${arr.sortTranslate[index].russian}`);
        this.arrIdWordsWrongAnswerSprint.push(arr.engl[index].id);
      }
      index += 1;
      if (index > 19) {
        n += 1;
        arr = await this.getWordArray(n);
        index = 0;
      }
      this.englishWord.node.innerText = arr.engl[index].english;
      this.wordTranslation.node.innerText = arr.sortTranslate[index].russian;
    };
  }

  renderResults() {
    this.results = new createComponent(this.container.node, 'div', 'results');
    this.close = new createComponent(this.results.node, 'div', 'close', 'x');
    this.resultsList = new createComponent(this.results.node, 'ul', 'results-list', 'results');
    this.close.node.onclick = () => {
      this.results.destroy();
      this.renderSprint();
    };

    this.correctAnswers.forEach((level, index) => {
      level = new createComponent(this.resultsList.node, 'li', `correct-${index}`, `${this.correctAnswers[index]}`);
      level.node.setAttribute('data-correct', index);
      level.node.style.border = '1px solid green';
      level.node.style.color = 'white';
    });
    this.wrongAnswers.forEach((level, index) => {
      level = new createComponent(this.resultsList.node, 'li', `wrong-${index}`, `${this.wrongAnswers[index]}`);
      level.node.setAttribute('data-wrong', index);
      level.node.style.border = '1px solid red';
      level.node.style.color = 'white';
    });
  }

  setEventListener() {
    this.screensaver.node.onclick = (event) => {
      const { target } = event;
      if (target.className === 'start-button') {
        this.startButton.destroy();
        this.renderSprint();
      }
    };
  }
}
