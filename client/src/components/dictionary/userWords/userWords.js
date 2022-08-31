import { deleteUserWord, getAllUserWords } from "../../../api/userWordsApi";
import createComponent from "../../../utils/createComponent";
import UserWord from "../userWord/userWord";

export default class UserWords extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.wordsRender()
  }

   async wordsRender() {
    this.user = JSON.parse(localStorage.getItem('idAndEmail'))
    const data = await getAllUserWords(this.user.id).then(res => res.json())
    this.wordsContainer = new createComponent(this.node, 'div', 'user-words__container')
    console.log(data)
    if(data && data.length){
      data.forEach(item => {
        this.word = new UserWord(this.wordsContainer.node, item.optional.wordData);
        this.userBtnsHandler(item.optional.wordData);
      }) 
    }
  }

  userBtnsHandler(wordData) {
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    this.id = wordData.id;
    this.word.wordBtnBlock.onDifficult = async() => {
      await deleteUserWord(this.user.id, this.id)
      console.log(deleteUserWord(this.user.id, this.id))
      this.rerenderWords();
      }
    }

  rerenderWords() {
    this.wordsContainer.destroy();
    this.wordsRender();
  }
}