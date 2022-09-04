import './words.scss';

import createComponent from "../../../utils/createComponent";
import { getWords } from "../../../api/wordsApi";
import { createUserWord, getAllUserWords, updateUserWordById } from '../../../api/userWordsApi';
import Word from '../word/word'
import wordsPageState from "../../../utils/state";

export default class Words extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.wordsRender();
    this.updateMainColor();
  }

  async wordsRender() {
    this.wordsContainer = new createComponent(this.node, 'div', 'user-words__container')
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    const userData = await getAllUserWords(this.user.id).then(res => res.json());

    const data = await getWords(wordsPageState.page - 1, wordsPageState.group);
    data.forEach((item) => {
      this.word = new Word(this.wordsContainer.node, item);
      userData.forEach(word => {
        if (word.wordId === this.word.id && word.difficulty === 'hard') {
          const btn = this.word.wordBtnBlock.node.childNodes[0].firstChild;
          btn.classList.add('active');
          console.log(btn);
        }
      })
      this.userBtnsHandler(item);
    });
  }

  userBtnsHandler(wordData) {
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    if (this.user) {
      this.word.wordBtnBlock.onDifficult = async () => {
        this.id = wordData.id;
        const userData = await getAllUserWords(this.user.id).then(res => res.json());
        userData.forEach(item => {
          if (item.wordId === this.id) {
            if (item.difficulty === 'easy') {
              const word = {
                difficulty: 'hard',
              }
              updateUserWordById(this.user.id, this.id, word)
              this.rerenderWords();
            }
            else if (item.difficulty === 'hard') {
              const word = {
                difficulty: 'easy',
              }
              updateUserWordById(this.user.id, this.id, word)
              this.rerenderWords();
            }
          }
        })
        if(userData.every(item => item.wordId !== this.id)) {
          const word = {
            difficulty: 'hard',
            optional: {wordData}
          }
          await createUserWord(this.user.id, this.id, word);
          this.rerenderWords();
        }
      }
    }
  }

  updateMainColor() {
    const root = document.documentElement;
    root.style.setProperty('--main-color', wordsPageState.color[wordsPageState.group]);
  }

  rerenderWords() {
    this.wordsContainer.destroy();
    this.wordsRender();
  }
}
