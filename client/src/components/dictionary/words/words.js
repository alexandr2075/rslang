import './words.scss';

import createComponent from '../../../utils/createComponent';
import { getWords } from '../../../api/wordsApi';
import { createUserWord } from '../../../api/userWordsApi';
import Word from '../word/word';
import wordsPageState from '../../../utils/state';

export default class Words extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
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

  userBtnsHandler(wordData) {
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    this.id = wordData.id;
    this.word.wordBtnBlock.onDifficult = async () => {
      const word = {
        difficulty: 'hard',
        optional: { wordData },
      };
      createUserWord(this.user.id, this.id, word);
    };
  }

  updateMainColor() {
    const root = document.documentElement;
    root.style.setProperty('--main-color', wordsPageState.color[wordsPageState.group]);
  }
}
