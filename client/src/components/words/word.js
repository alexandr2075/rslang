import createComponent from "../../utils/createComponent";

export default class Words extends createComponent{
  constructor(parentNode,  wordData) {
    super(parentNode, 'div', 'word', '');
    this.word = new createComponent(this.node, 'div', '' );
    this.id = wordData.id;
    this.word = wordData.word;
    this.wordTranslate = wordData.wordTranslate;
    this.textExample = wordData.textExample;
    this.textExampleTranslate = wordData.textExampleTranslate;
    this.textMeaning = wordData.textMeaning;
    this.textMeaningTranslate = wordData.textMeaningTranslate;
    this.transcription = wordData.transcription;
    this.render();
  }
  

  render() {
    this.node.innerHTML =  `
    <p>${this.word}</p>
    <p>${this.wordTranslate}</p>
    <p>${this.textExample}</p>
    <p>${this.textExampleTranslate}</p>
    <p>${this.textMeaning}</p>
    <p>${this.textMeaningTranslate}</p>
    <p>${this.transcription}</p>
    `

  }
}
