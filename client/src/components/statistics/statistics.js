import './statistics.scss';
import CreateComponent from '../../../utils/CreateComponent';
import { getWords } from '../../../api/wordsApi';
import { createUserWord } from '../../../api/userWordsApi';
import Word from '../word/word';
import wordsPageState from '../../../utils/state';

export default class Statistics extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'statistics', '');
    this.wordsRender();
    this.updateMainColor();
  }

  async wordsRender() {
    const data = await getWords(wordsPageState.page - 1, wordsPageState.group);
    data.forEach((item) => {
      this.word = new Word(this.node, item);
      this.userBtnsHandler(item);
    });
  }
