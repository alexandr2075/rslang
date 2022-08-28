import createComponent from "../../../utils/createComponent";
import wordsPageState from '../../../utils/state'
import './word.scss'
import Api from '../../../utils/api'

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
    if(wordsPageState.showTranslate) {
    this.node.innerHTML =  `
    <div class="word-title">
    <p><span class="word-title__word">${this.word}</span> - ${this.transcription}</p>
    <button class="audio" data-audio="${this.audio}"><i class="fa fa-volume-up" data-audio="${this.audio}"></i></button>
    </div>
    <div style="background-image: url('${this.image}')" alt="${this.word}" class="word-image"></div>
    <p class="translate">${this.wordTranslate}</p>
    <div class="word-sentence">
    <div class="word-sentence__title">
     <p class="sentence">${this.textExample}</p>
     <button class="audio" data-audio="${this.audioExample}"><i class="fa fa-volume-up" data-audio="${this.audioExample}"></i></button>
     </div>
    
     <p class="word-sentence__translate">${this.textExampleTranslate}</p>
    </div>
    <div class="word-sentence">
    <div class="word-sentence__title">
     <p class="sentence">${this.textMeaning}</p>
     <button class="audio" data-audio="${this.audioMeaning}"><i class="fa fa-volume-up" data-audio="${this.audioMeaning}"></i></button>
    </div>
     <p class="word-sentence__translate">${this.textMeaningTranslate}</p>
    </div>
    `
    }
    else {
      this.node.innerHTML = `
      <div class="word-title">
    <p><span class="word-title__word">${this.word}</span> - ${this.transcription}</p>
    <button class="audio" data-audio="${this.audio}"><i class="fa fa-volume-up" data-audio="${this.audio}"></i></button>
    </div>
    <div style="background-image: url('${this.image}')" alt="${this.word}" class="word-image"></div>
    <div class="word-sentence">
    <div class="word-sentence__title">
     <p class="sentence">${this.textExample}</p>
     <button class="audio" data-audio="${this.audioExample}"><i class="fa fa-volume-up" data-audio="${this.audioExample}"></i></button>
     </div>
    
    </div>
    <div class="word-sentence">
    <div class="word-sentence__title">
     <p class="sentence">${this.textMeaning}</p>
     <button class="audio" data-audio="${this.audioMeaning}"><i class="fa fa-volume-up" data-audio="${this.audioMeaning}"></i></button>
    </div>
    </div>
      `
    }
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
