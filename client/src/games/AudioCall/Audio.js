/* eslint-disable */
import CreateComponent from "../../utils/createComponent";
import Api from "../../utils/api";
import wordsPageState from "../../utils/state";
import { getWords } from "../../api/wordsApi";
import './audio.scss';

export default class AudioGame extends CreateComponent {
    constructor(parentNode) {
        super(parentNode, 'div', 'audio-game', '');
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
        this.wright=0;
        this.error=0;
        this.correctAnswers = [];
        this.wrongAnswers = [];
        this.arrIdWordsCorrectAnswerSprint = [];
        this.arrIdWordsWrongAnswerSprint = [];
        this.setEventListener();
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
      }
      switchToRenderAudio(num) {
        this.gameDifficultySelection.destroy();
        this.renderAudio(num);
      }
    async  renderAudio(group) {
        this.ContainerGame = new CreateComponent (this.container.node, 'div');
        this.timer = new CreateComponent(this.ContainerGame.node, 'div', 'timer');
        this.audioBtn = new CreateComponent(this.ContainerGame.node, 'button' , 'audio-button');
        this.audioBtn.node.innerHTML = `<i class="fa fa-volume-up" data-audio="${this.audio}"></i>`;
        this.wordTranslation = new CreateComponent(this.ContainerGame.node, 'p', 'word-translation word-rendering');
        this.containerTranslationButtons = new CreateComponent(this.ContainerGame.node, 'div', 'translation-buttons');
        this.containerTranslationButtons.node.onclick = (event) => {
          this.onCheck(event.target.dataset.id);
          }
        this.timerLogic();
        this.gameLogic(group);
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
      let index = Math.round(Math.random() * 20);
      let n = 0;
      let arr = await this.getWordArray(n, group);
      let audio = new Audio();
      audio.src = `${Api.baseUrl}/${arr.audio[index].audio}`;
      audio.autoplay = true;
      let translateWords = [];
    if(index < 17){
     translateWords = arr.translate.slice(index, index + 4 ) 
    } else {
      translateWords = arr.translate.slice(index - 3, index + 1)
    }
    const sortArray = translateWords.sort(() => Math.random() - 0.5);
    let audioWord = arr.audio[index];
    sortArray.forEach((item)=>{
const button = new CreateComponent(this.containerTranslationButtons.node, 'button', 'button-game', `${item.russian}`);
button.node.setAttribute('data-id',`${item.id}`)
    })
   
  this.onCheck= async (data) => {
    if(data === audioWord.id){
      this.wright++;
this.rerenderGame() 
    } else {
      this.error++;
    this.rerenderGame() 
    }
  }
  this.containerTranslationButtons = async () => {
    if (wright) { 
      this.correctAnswers.push(`верно: ${arr.audio[index].audio} - ${arr.sortArray[index].russian}`);
      this.arrIdWordsCorrectAnswerSprint.push(arr.audio[index].id);
    }
    if (error) {
      this.wrongAnswers.push(`неверно: ${arr.audio[index].english} - ${arr.sortArray[index].russian}`);
      this.arrIdWordsWrongAnswerSprint.push(arr.audio[index].id);
    }
    index += 1;
    if (index > 19) {
      n += 1;
      arr = await this.getWordArray(n);
      index = 0;
    }
    this.ContainerGame.node.innerText = arr.audio[index].audio;
    this.wordTranslation.node.innerText = arr.sortArray[index].russian;
  };
    }
    rerenderGame(){
      this.ContainerGame.destroy();
      this.renderAudio();
    }
    timerLogic() {
      let counter = 60;
      const id = setInterval(() => {
        this.timer.node.innerText = counter;
        counter -= 1;
        if (counter === 0) {
          clearInterval(id);
          this.ContainerGame.destroy();
          this.renderResults();
          // TODO: поменять userId на localStorage.getItem...
          const { correct } = wordsPageState.wordsFromSprint.userId;
          this.arrIdWordsCorrectAnswerSprint.forEach((idWord) => {
            if (Object.prototype.hasOwnProperty.call(correct, idWord)) {
              correct[idWord] += 1;
            } else {
              correct[idWord] = 1;
            }
          });
  
          const { wrong } = wordsPageState.wordsFromSprint.userId;
          this.arrIdWordsWrongAnswerSprint.forEach((idWord) => {
            if (Object.prototype.hasOwnProperty.call(wrong, idWord)) {
              wrong[idWord] += 1;
            } else {
              wrong[idWord] = 1;
            }
          });
  
        }
      }, 1000);
    }
    renderResults() {
      this.results = new CreateComponent(this.container.node, 'div', 'results');
      this.close = new CreateComponent(this.results.node, 'div', 'close', 'x');
      this.titleResults = new CreateComponent(this.results.node, 'div', 'title-results', 'Результаты');
      this.containerResultsList = new CreateComponent(this.results.node, 'div', 'container-results');
      this.resultsList = new CreateComponent(this.containerResultsList.node, 'ul', 'results-list');
      this.close.node.onclick = () => {
        this.wright= 0;
        this.error = 0;
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
      this.close.node.onclick = () => {
        this.container.destroy();
        this.container = new CreateComponent(this.screensaver.node, 'div', 'container');
        this.gameDifficultySelection = new CreateComponent(this.container.node, 'div', 'difficulty-selection');
        this.difficulty = new CreateComponent(this.gameDifficultySelection.node, 'p', 'difficulty', 'Выберите сложность игры');
        wordsPageState.levels.forEach((level, index) => {
          level = new CreateComponent(this.gameDifficultySelection.node, 'div', `level-btn ${wordsPageState.levels[index].slice(3)}`, `${wordsPageState.levels[index]}`);
          level.node.setAttribute('data-group', index);
          level.node.style.border = `1px solid ${wordsPageState.color[index]}`;
          level.node.style.color = wordsPageState.color[index];
        });
      };
    }
}