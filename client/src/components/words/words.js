import createComponent from "../../utils/createComponent";
import { getWords } from "../../api/wordsApi";
import Word from "./word";
import wordsPageState from "../../utils/state";

export default class Words extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.wordsRender();
  }

 async wordsRender() {
  const data = await getWords(wordsPageState.page - 1);
  data.forEach(item => {
    this.word = new Word(this.node, item)
    console.log(item)
  });
 }


}




 