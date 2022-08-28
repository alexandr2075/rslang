import wordsPageState from "../../../utils/state";
import Word from "../word/word";

export default class UserWord extends Word {
  constructor(parentNode, data) {
    super(parentNode, data);
    this.data = data;
    this.group = data.group;
    this.setStyles();
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