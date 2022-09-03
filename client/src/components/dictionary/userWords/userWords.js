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
    console.log(this.user)
    const data = await getAllUserWords(this.user.id).then(res => res.json())
    this.wordsContainer = new createComponent(this.node, 'div', 'user-words__container')
    if (data && data.length) {
      data.forEach(item => {
        this.word = new UserWord(this.wordsContainer.node, item.optional.wordData);
        this.userBtnsHandler(item.optional.wordData.id);
      })
    }
  }

  async userBtnsHandler(wordId) {
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    const word = {
      difficulty: "easy"
    }
    this.word.wordBtnBlock.onDifficult = async () => {
      await updateUserWordById(this.user.id, wordId, word)
      this.rerenderWords();
    }
  }

  rerenderWords() {
    this.wordsContainer.destroy();
    this.wordsRender();
  }
}