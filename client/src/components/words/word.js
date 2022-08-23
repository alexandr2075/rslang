import createComponent from "../../utils/createComponent";
import {Api} from '../../utils/api'

export default class Words extends createComponent{
  constructor(parentNode,  wordData) {
    super(parentNode, 'div', 'word', '');
    this.word = new createComponent(this.node, 'div', '' );
    this.id = wordData.id;
    this.image = `${Api.baseUrl}/${wordData.image}`;
    this.word = wordData.word;
    this.wordTranslate = wordData.wordTranslate;
    this.textExample = wordData.textExample;
    this.textExampleTranslate = wordData.textExampleTranslate;
    this.textMeaning = wordData.textMeaning;
    this.textMeaningTranslate = wordData.textMeaningTranslate;
    this.transcription = wordData.transcription;
    this.audio = wordData.audio;
    this.audioExample = wordData.audioExample;
    this.audioMeaning = wordData.audioMeaning;
    this.render();
    this.setEventListener();
  }
  

  render() {
    this.node.innerHTML =  `
    <div class = word-title>
      <img src=${this.image} alt='${this.word}'>
      <p>${this.word}</p>
      <p>${this.transcription}</p>
      <button class="audio" data-audio="${this.audio}"></button>
    </div>
    <p class="translate">${this.wordTranslate}</p>
    <div class="example">
     <p>${this.textExample}</p>
     <button class="audio" data-audio="${this.audioExample}"></button>
     <p class="translate">${this.textExampleTranslate}</p>
    </div>
    <div class="meaning">
     <p>${this.textMeaning}</p>
     <button class="audio" data-audio="${this.audioMeaning}"></button>
     <p>${this.textMeaningTranslate}</p>
    </div>
    `
  }
  setEventListener() {
    this.node.onclick = (event) => {
      let target = event.target;
      if(target.dataset.audio) {
        let audio = new Audio();
        audio.src = `${Api.baseUrl}/${target.dataset.audio}`;
        audio.autoplay = true;
      }
    }
}
}
