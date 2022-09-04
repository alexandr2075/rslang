/* eslint-disable */
import CreateComponent from "../../utils/createComponent";
import Api from "../../utils/api";
import wordsPageState from "../../utils/state";
import { getWords } from "../../api/wordsApi";
import './audio.scss';
export default class AudioGame extends CreateComponent {
    constructor(parentNode) {
        super(parentNode, 'div', 'sprint', '');
        this.screensaver = new CreateComponent(this.node, 'div', 'screensaver');
        this.container = new CreateComponent(this.screensaver.node, 'div', 'container');
        this.gameDifficultySelection = new CreateComponent(this.container.node, 'div', 'difficulty-selection');
        this.difficulty = new CreateComponent(this.gameDifficultySelection.node, 'p', 'difficulty', 'Выберите сложность игры');
        wordsPageState.levels.forEach((level, index) => {
          level = new CreateComponent(this.gameDifficultySelection.node, 'div', `level-btn ${wordsPageState.levels[index].slice(3)}`, `${wordsPageState.levels[index]}`);
          level.node.setAttribute('data-group', index);
          level.node.style.border = `1px solid ${wordsPageState.color[index]}`;
          level.node.style.color = wordsPageState.color[index];
        });
    
        this.setEventListener();
        this.correctAnswers = [];
        this.wrongAnswers = [];
        this.arrIdWordsCorrectAnswerSprint = [];
        this.arrIdWordsWrongAnswerSprint = [];
        this.getWordArray();
    }
    
    setEventListener() {
        this.screensaver.node.onclick = (event) => {
          const { target } = event;
          if (target.dataset.group === '0') {
            this.switchToRenderAudio(0);
          } else if (target.dataset.group === '1') {
            this.switchToRenderAudio(1);
          } else if (target.dataset.group === '2') {
            this.switchToRenderAudio(2);
          } else if (target.dataset.group === '3') {
            this.switchToRenderAudio(3);
          } else if (target.dataset.group === '4') {
            this.switchToRenderAudio(4);
          } else if (target.dataset.group === '5') {
            this.switchToRenderAudio(5);
          }
        };
this.containerTranslationButtons.node.onclick = (event) => {
this.onCheck(event.target.dataset.id);
}

      }
      switchToRenderAudio(num) {
        this.gameDifficultySelection.destroy();
        this.renderSprint(num);
      }
    async  renderSprint(group) {
        const data = await getWords(wordsPageState.page - 1, group);
        this.ContainerGame = new CreateComponent (this.container.node, 'div')
        this.audioBtn = new CreateComponent(this.ContainerGame.node, 'button' , 'audio-button');
        this.audioBtn.node.innerHTML = `<i class="fa fa-volume-up" data-audio="${this.audio}"></i>`;
        this.timer = new CreateComponent(this.ContainerGame.node, 'div', 'timer');
        this.wordTranslation = new CreateComponent(this.ContainerGame.node, 'p', 'word-translation word-rendering');
        this.mark = new CreateComponent(this.ContainerGame.node, 'div', 'mark');
        this.containerTranslationButtons = new CreateComponent(this.ContainerGame.node, 'div', 'translation-buttons');
     this.setEventListener();
        // this.timerLogic();
        this.gameLogic();
      }
  
    async getWordArray(n=0, group=0) {
      const defaultWordsFromTheserver = await getWords(n, group);
      const audio = [];
      const translate = [];
      defaultWordsFromTheserver.forEach((obj) => {
        audio.push({ id: obj.id, audio: obj.audio });
        translate.push({ id: obj.id, russian: obj.wordTranslate });
      
      });
      return { audio, translate };
      
    }
    async gameLogic(group) {
      let index = Math.round(0 + Math.random() * 20);
      let n = 0;
      console.log(group);
      let arr = await this.getWordArray(n, group);
      let audio = new Audio();
      audio.src = `${Api.baseUrl}/${arr.audio[index].audio}`;
      audio.autoplay = true;
      let translateWords = [];
    if(index < 17){
     translateWords = arr.translate.slice(index, index + 4 ) 
    } else {
      translateWords = arr.translate.slice(index - 4, index)
    }
    const sortArray = translateWords.sort(() => Math.random() - 0.5);
    console.log('translate', translateWords);
    let audioWord = arr.audio[index];
    sortArray.forEach((item)=>{
const button = new CreateComponent(this.containerTranslationButtons.node, 'button', 'button-game', `${item.russian}`);
button.node.setAttribute('data-id',`${item.id}`)
    })
  this.onCheck= async (data) => {
    if(data == audioWord.id){
console.log('Ахуенчик');
this.rerenderGame() 
    } else {
    console.log ('Хуйня');
    this.rerenderGame() 
    }
  }
    }
    rerenderGame(){
      this.ContainerGame.destroy();
      this.renderSprint();
    }
    renderResults() {
      this.results = new CreateComponent(this.container.node, 'div', 'results');
      this.close = new CreateComponent(this.results.node, 'div', 'close', 'x');
      this.titleResults = new CreateComponent(this.results.node, 'div', 'title-results', 'Результаты');
      this.containerResultsList = new CreateComponent(this.results.node, 'div', 'container-results');
      this.resultsList = new CreateComponent(this.containerResultsList.node, 'ul', 'results-list');
      this.close.node.onclick = () => {
        this.screensaver.destroy();
        location.hash = ' ';
      };
      this.correctAnswers.forEach((level, index) => {
        level = new CreateComponent(this.resultsList.node, 'li', `correct-${index} li-list`, `${this.correctAnswers[index]}`);
        level.node.setAttribute('data-correct', index);
        level.node.style.border = '1px solid green';
        level.node.style.color = 'white';
      });
      this.wrongAnswers.forEach((level, index) => {
        level = new CreateComponent(this.resultsList.node, 'li', `wrong-${index} li-list`, `${this.wrongAnswers[index]}`);
        level.node.setAttribute('data-wrong', index);
        level.node.style.border = '1px solid red';
        level.node.style.color = 'white';
      });
    }
}