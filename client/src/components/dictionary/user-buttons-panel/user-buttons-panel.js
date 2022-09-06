import createComponent from "../../../utils/createComponent";
import wordsPageState from "../../../utils/state";
import './user-buttons.scss';

export default class UserButtonsPanel extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'word__btn-block')
    this.render();
    this.setEventListener();
  }

  render() {
    for(let prop in wordsPageState.wordBtn) {
      this.wordBBtnItem = new createComponent(this.node, 'div', 'word-btn-item');
      this.wordBBtn = new createComponent(this.wordBBtnItem.node, 'button', `word-btn ${prop}`);
      this.wordBBtn.node.innerHTML = wordsPageState.wordBtn[prop];
      this.wordBBtn.node.setAttribute(`data-panel`, `${prop}`)
    }
  }

  setEventListener(){
    this.node.onclick = (event) => {
    let target = event.target;
    if(target.dataset.panel) {
      if(target.dataset.panel === 'difficult') {
        this.onDifficult();
      }
      if(target.dataset.panel === 'learned') {
        this.onLearned();
      }
      if(target.dataset.panel === 'statistic') {
        console.log('click')
        this.onStatistics();
      }
    }
  }
}
}