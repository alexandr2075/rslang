import './words.scss';

import createComponent from "../../../utils/createComponent";
import { getWords } from "../../../api/wordsApi";
import { createUserWord, getAllUserWords, updateUserWordById } from '../../../api/userWordsApi';
import Word from '../word/word'
import wordsPageState from "../../../utils/state";

export default class Words extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.learned = [];
    this.wordsRender();
    this.updateMainColor();
  }

  async wordsRender() {
    this.wordsContainer = new createComponent(this.node, 'div', 'user-words__container')
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    const userData = await getAllUserWords(this.user.id).then(res => res.json());
    console.log(this.learned)
    const data = await getWords(wordsPageState.page - 1, wordsPageState.group);
    data.forEach((item) => {
      this.word = new Word(this.wordsContainer.node, item);
      userData.forEach(word => {
        if (word.wordId === this.word.id && word.difficulty === 'hard') {
          const difficulBtn = this.word.wordBtnBlock.node.childNodes[0].firstChild;
          difficulBtn.classList.add('active');
          console.log(difficulBtn);
        }
        if(this.learned.length) {
          this.learned.forEach(id => {
            if(id === this.word.id) {
              const learnedBtn = this.word.wordBtnBlock.node.childNodes[1].firstChild;
              learnedBtn.classList.add('active');
              console.log(learnedBtn);
            }
          })
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
      this.word.wordBtnBlock.onLearned = async() => {
        this.id = wordData.id;
        if(!this.learned.length) {
          this.learned.push(this.id);
          console.log(this.learned);
          this.rerenderWords();
        } else {
          this.learned.forEach((item,index) => {
            if(item === this.id) {
              this.learned.splice(index, 1)
              console.log(this.learned)
              this.rerenderWords();
            }
            this.learned.push(this.id);
            console.log(this.learned)
            this.rerenderWords();
          })
          
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
