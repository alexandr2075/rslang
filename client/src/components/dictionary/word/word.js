import createComponent from "../../../utils/createComponent";
import wordsPageState from '../../../utils/state'
import './word.scss'
import Api from '../../../utils/api'
import { createUserWord } from "../../../api/userWordsApi";
import UserButtonsPanel from "../user-buttons-panel/user-buttons-panel";

export default class Word extends createComponent {
  constructor(parentNode, wordData) {
    super(parentNode, 'div', 'word', '');
    this.wordData = wordData;
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
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    this.token = JSON.parse(localStorage.getItem('token'));
    this.wordTitle = new createComponent(this.node, 'div', 'word-title');
    this.wordTitle.node.innerHTML = `<p><span class="word-title__word">${this.word}</span> - ${this.transcription}</p>
    <button class="audio" data-audio="${this.audio}"><i class="fa fa-volume-up" data-audio="${this.audio}"></i></button>`;
    this.wordImage = new createComponent(this.node, 'div', 'word-image');
    this.wordImage.node.style.backgroundImage = `url('${this.image}')`;
    if (wordsPageState.showTranslate) {
      this.translate = new createComponent(this.node, 'p', 'translate', `${this.wordTranslate}`)
    }
    this.wordSentence = new createComponent(this.node, 'div', 'word-sentence');
    this.wordSentenceTitle = new createComponent(this.wordSentence.node, 'div', 'word-sentence__title');
    this.wordSentenceTitle.node.innerHTML = `
    <p class="sentence">${this.textExample}</p>
    <button class="audio" data-audio="${this.audioExample}"><i class="fa fa-volume-up" data-audio="${this.audioExample}"></i></button>`
    if (wordsPageState.showTranslate) {
      this.exampleTranslate = new createComponent(this.wordSentence.node, 'p', 'word-sentence__translate', `${this.textExampleTranslate}`)
    }
    this.wordMeaning = new createComponent(this.node, 'div', 'word-sentence');
    this.wordMeaningTitle = new createComponent(this.wordMeaning.node, 'div', 'word-sentence__title');
    this.wordMeaningTitle.node.innerHTML = `
    <p class="sentence">${this.textMeaning}</p>
    <button class="audio" data-audio="${this.audioMeaning}"><i class="fa fa-volume-up" data-audio="${this.audioMeaning}"></i></button>`;
    if (wordsPageState.showTranslate) {
      this.meaningTranslate = new createComponent(this.wordMeaning.node, 'p', 'word-sentence__translate', `${this.textMeaningTranslate}`)
    }
    if (this.user) {
      this.wordBtnBlock = new UserButtonsPanel(this.node);
    }
  }

  setEventListener() {
    this.node.onclick = (event) => {
      let target = event.target;
      if (target.dataset.audio) {
        let audio = new Audio();
        audio.src = `${Api.baseUrl}/${target.dataset.audio}`;
        audio.autoplay = true;
      }
    }
  }
}
