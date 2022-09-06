import wordsPageState from "../../../utils/state";
import Word from "../word/word";
import { updateUserWordById } from "../../../api/userWordsApi";

export default class UserWord extends Word {
  constructor(parentNode, data) {
    super(parentNode, data);
    this.data = data;
    this.group = data.group;
    this.setStyles();
    this.deleteDifficultHandler()
  }
  
  deleteDifficultHandler() {
    const word = {
      difficulty: "easy",
    }
    this.wordBtnBlock.onDifficult = async () => {
      await updateUserWordById(this.user.id, this.id, word);
      this.destroy();
    }
  }
 
  
  setStyles() {
    this.color = wordsPageState.color[this.group]

    this.btns = this.node.querySelectorAll('button');
    if(this.btns) {this.btns.forEach(item => {
      item.style.boxShadow = `0 4px 10px ${this.color}`;
      item.style.borderColor = this.color;
      item.style.textShadow = this.color;
      item.style.color = this.color;
    })
  }
    this.node.style.border = `1px solid ${this.color}`
    this.node.style.boxShadow = `0 0 15px ${this.color}`
    const btns = this.node.lastChild
    btns.style.backgroundColor = this.color;
  }
}