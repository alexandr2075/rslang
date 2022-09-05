import { deleteUserWord, getAllUserWords, updateUserWordById } from "../../../api/userWordsApi";
import createComponent from "../../../utils/createComponent";
import UserWord from "../userWord/userWord";


export default class UserWords extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    this.wordsRender();
  }

  async wordsRender() {
    const data = await getAllUserWords(this.user.id).then(res => res.json())
    this.userWordsContainer = new createComponent(this.node, 'div', 'user-words__container')
    if (data && data.length) {
      const newData = data.filter(item => item.difficulty === 'hard');
      newData.forEach(item => {
        this.word = new UserWord(this.userWordsContainer.node, item.optional.wordData, item.id);
        const btn = this.word.wordBtnBlock.node.childNodes[0].firstChild;
          btn.classList.add('active');
          btn.style.color = '#ffffff';
        this.userBtnsHandler(item);
      })
    }
  }

  async userBtnsHandler(wordData) {
    this.id = wordData.id;
    this.wordId = wordData.wordId;
    const word = {
      difficulty: "easy",
    }
    this.word.wordBtnBlock.onDifficult = async () => {
      await updateUserWordById(this.user.id, this.wordId, word);
      this.rerenderWords();
    }

  }

  rerenderWords() {
    this.userWordsContainer.destroy();
    this.wordsRender();
  }
}
