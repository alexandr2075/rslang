import { createUserWord, getAllUserWords } from "../../../api/userWordsApi";
import signInApi from "../../../api/signInApi";
import { getNewUserTokens } from "../../../api/usersApi";
import createComponent from "../../../utils/createComponent";

export default class UserWords extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.wordsRender();
  }

  async wordsRender() {
    console.log('userWords');
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    this.token = JSON.parse(localStorage.getItem('token')).token;
    const data = await getAllUserWords(this.userId, this.token)
    console.log(data)
    data.forEach(item => {
      this.word = new Word(this.node, item)
    }) 
  }

  async addWordToDificult(wordId, word) {
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    this.token = JSON.parse(localStorage.getItem('token')).token;
    const data = await createUserWord(this.userId, wordId, word, this.token);
  }
  
}