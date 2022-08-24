import './words.scss';

import createComponent from "../../../utils/createComponent";
import { getWords } from "../../../api/wordsApi";
import Word from '../word/word'
import wordsPageState from "../../../utils/state";

export default class Words extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.wordsRender();
    this.updateMainColor();
  }

 async wordsRender() {
  const data = await getWords(wordsPageState.page - 1, wordsPageState.group);
  data.forEach(item => {
    this.word = new Word(this.node, item)
    console.log(item)
  });
 }

 updateMainColor() {
  let root = document.documentElement;
  root.style.setProperty('--main-color', wordsPageState.color[wordsPageState.group])
 }

}




 