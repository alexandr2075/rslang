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
      const newData = data.filter(item => item.difficulty === 'hard');
      console.log(newData)
      newData.forEach(item => {
        this.word = new UserWord(this.wordsContainer.node, item.optional.wordData, item.id);
        this.userBtnsHandler(item);
      })
    }
  }

  async userBtnsHandler(wordData) {
    console.log(wordData)
    this.id = wordData.id;
    this.wordId = wordData.wordId;
    const word = {
      difficulty: "easy",
    }
    this.word.wordBtnBlock.onDifficult = async () => {
      console.log(await updateUserWordById(this.user.id, this.wordId, word));
      console.log(await getAllUserWords(this.user.id).then(res => res.json()));
      this.rerenderWords();
    }
  }

  rerenderWords() {
    this.wordsContainer.destroy();
    this.wordsRender();
  }
}