import './sprint.scss';
import CreateComponent from '../../utils/createComponent';
import PaginationButtons from '../../components/pagination/pagination-buttons';
import wordsPageState from '../../utils/state';
import { getWords } from '../../api/wordsApi';
import done from '../../../assets/images/done.jpg';
import falsy from '../../../assets/images/falsy.jpg';

export default class Sprint extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'sprint', '');
    this.screensaver = new CreateComponent(this.node, 'div', 'screensaver');
    this.container = new CreateComponent(this.screensaver.node, 'div', 'container');
    this.gameDifficultySelection = new CreateComponent(this.container.node, 'div', 'difficulty-selection');
    this.difficulty = new CreateComponent(this.gameDifficultySelection.node, 'p', 'difficulty', 'Выберите сложность игры');
    wordsPageState.levels.forEach((level, index) => {
      level = new CreateComponent(this.gameDifficultySelection.node, 'div', `level-btn ${wordsPageState.levels[index].slice(3)}`, `${wordsPageState.levels[index]}`);
      level.node.setAttribute('data-group', index);
      level.node.style.border = `1px solid ${wordsPageState.color[index]}`;
      level.node.style.color = wordsPageState.color[index];
    });

    this.setEventListener();
    this.correctAnswers = [];
    this.wrongAnswers = [];
    this.arrIdWordsCorrectAnswerSprint = [];
    this.arrIdWordsWrongAnswerSprint = [];
  }

  switchToRenderSprint(num) {
    this.gameDifficultySelection.destroy();
    this.renderSprint(num);
  }

  setEventListener() {
    this.screensaver.node.onclick = (event) => {
      const { target } = event;
      if (target.dataset.group === '0') {
        this.switchToRenderSprint(0);
      } else if (target.dataset.group === '1') {
        this.switchToRenderSprint(1);
      } else if (target.dataset.group === '2') {
        this.switchToRenderSprint(2);
      } else if (target.dataset.group === '3') {
        this.switchToRenderSprint(3);
      } else if (target.dataset.group === '4') {
        this.switchToRenderSprint(4);
      } else if (target.dataset.group === '5') {
        this.switchToRenderSprint(5);
      }
    };
  }

  renderSprint(group) {
    this.englishWords = new CreateComponent(this.container.node, 'div', 'english-words');
    this.timer = new CreateComponent(this.englishWords.node, 'div', 'timer');
    this.englishWord = new CreateComponent(this.englishWords.node, 'p', 'english-word word-rendering');
    this.wordTranslation = new CreateComponent(this.englishWords.node, 'p', 'word-translation word-rendering');
    this.mark = new CreateComponent(this.englishWords.node, 'div', 'mark');
    this.containerPaginationButtons = new CreateComponent(this.englishWords.node, 'div', 'container-pagination');
    this.paginationButtons = new PaginationButtons(this.containerPaginationButtons.node, 'Неверно', 'Верно');
    this.timerLogic();
    this.gameLogic(group);
  }

  timerLogic() {
    let counter = 60;
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
      }
    }, 1000);
  }

  static async getWordArray(n, group) {
    const defaultWordsFromTheserver = await getWords(n, group);
    const engl = [];
    const translate = [];
    defaultWordsFromTheserver.forEach((obj) => {
      engl.push({ id: obj.id, english: obj.word });
      translate.push({ id: obj.id, russian: obj.wordTranslate });
    });
    const sortTranslate = [...translate].sort(() => Math.random() - 0.2);
    return { engl, sortTranslate };
  }

  async gameLogic(group) {
    let index = 0;
    let n = 0;
    let arr = await Sprint.getWordArray(n, group);
    this.englishWord.node.innerText = arr.engl[index].english;
    this.wordTranslation.node.innerText = arr.sortTranslate[index].russian;
// onNextPage-это кнопка "верно"
    this.paginationButtons.onNextPage = async () => {
      if (arr.engl[index].id === arr.sortTranslate[index].id) {
        this.mark.node.style.backgroundImage = `url(${done})`;
        this.correctAnswers.push(`верно: ${arr.engl[index].english} - ${arr.sortTranslate[index].russian}`);
        this.arrIdWordsCorrectAnswerSprint.push(arr.engl[index].id);
      }
      if (arr.engl[index].id !== arr.sortTranslate[index].id) {
        this.mark.node.style.backgroundImage = `url(${falsy})`;
        this.wrongAnswers.push(`неверно: ${arr.engl[index].english} - ${arr.sortTranslate[index].russian}`);
        this.arrIdWordsWrongAnswerSprint.push(arr.engl[index].id);
      }
      index += 1;
      if (index > 19) {
        n += 1;
        arr = await Sprint.getWordArray(n);
        index = 0;
      }
      this.englishWord.node.innerText = arr.engl[index].english;
      this.wordTranslation.node.innerText = arr.sortTranslate[index].russian;
    };
    // onPrevPage-это кнопка "неверно"
    this.paginationButtons.onPrevPage = async () => {
      if (arr.engl[index].id !== arr.sortTranslate[index].id) {
        this.mark.node.style.backgroundImage = `url(${done})`;
        this.correctAnswers.push(`неверно: ${arr.engl[index].english} - ${arr.sortTranslate[index].russian}`);
        this.arrIdWordsCorrectAnswerSprint.push(arr.engl[index].id);
      }
      if (arr.engl[index].id === arr.sortTranslate[index].id) {
        this.mark.node.style.backgroundImage = `url(${falsy})`;
        this.wrongAnswers.push(`верно: ${arr.engl[index].english} - ${arr.sortTranslate[index].russian}`);
        this.arrIdWordsWrongAnswerSprint.push(arr.engl[index].id);
      }
      index += 1;
      if (index > 19) {
        n += 1;
        arr = await Sprint.getWordArray(n);
        index = 0;
      }
      this.englishWord.node.innerText = arr.engl[index].english;
      this.wordTranslation.node.innerText = arr.sortTranslate[index].russian;
    };
  }

  renderResults() {
    this.results = new CreateComponent(this.container.node, 'div', 'results');
    this.close = new CreateComponent(this.results.node, 'div', 'close', 'x');
    this.titleResults = new CreateComponent(this.results.node, 'div', 'title-results', 'Результаты');
    this.containerResultsList = new CreateComponent(this.results.node, 'div', 'container-results');
    this.resultsList = new CreateComponent(this.containerResultsList.node, 'ul', 'results-list');

    this.correctAnswers.forEach((level, index) => {
      level = new CreateComponent(this.resultsList.node, 'li', `correct-${index} li-list`, `${this.correctAnswers[index]}`);
      level.node.setAttribute('data-correct', index);
      level.node.style.border = '1px solid green';
      level.node.style.color = 'white';
    });
    this.wrongAnswers.forEach((level, index) => {
      level = new CreateComponent(this.resultsList.node, 'li', `wrong-${index} li-list`, `${this.wrongAnswers[index]}`);
      level.node.setAttribute('data-wrong', index);
      level.node.style.border = '1px solid red';
      level.node.style.color = 'white';
    });

    // удаление стр результатов и отрисовка стр выбора сложности игры
    this.close.node.onclick = () => {
      this.container.destroy();
      this.container = new CreateComponent(this.screensaver.node, 'div', 'container');
      this.gameDifficultySelection = new CreateComponent(this.container.node, 'div', 'difficulty-selection');
      this.difficulty = new CreateComponent(this.gameDifficultySelection.node, 'p', 'difficulty', 'Выберите сложность игры');
      wordsPageState.levels.forEach((level, index) => {
        level = new CreateComponent(this.gameDifficultySelection.node, 'div', `level-btn ${wordsPageState.levels[index].slice(3)}`, `${wordsPageState.levels[index]}`);
        level.node.setAttribute('data-group', index);
        level.node.style.border = `1px solid ${wordsPageState.color[index]}`;
        level.node.style.color = wordsPageState.color[index];
      });
    };
  }
}
