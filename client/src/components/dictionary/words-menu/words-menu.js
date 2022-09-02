import createComponent from '../../../utils/createComponent';
import './words-menu.scss';
import Footer from '../../footer/footer';
import wordsPageState from '../../../utils/state';

export default class WordsMenu extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'menu', '');
    this.renderMenu();
    this.setEventListener();
    this.footer = new Footer(this.node);
   }

  renderMenu() {
    this.user = JSON.parse(localStorage.getItem('idAndEmail')) || false;
    wordsPageState.levels.forEach((level, index) => {
      level = new createComponent(this.node, 'div', `level-btn ${wordsPageState.levels[index].slice(3)}`, `${wordsPageState.levels[index]}`)
      level.node.setAttribute('data-group', index)
      level.node.style.border = `1px solid ${wordsPageState.color[index]}`;
      level.node.style.color = wordsPageState.color[index];
    })
    if(this.user) {
      this.userWordsBtn = new createComponent(this.node, 'div', 'level-btn user-btn', 'сложные слова');
      this.userWordsBtn.node.setAttribute('data-group', '6')
      this.userWordsBtn.node.style.border = `1px solid '#ffffff`;
      this.userWordsBtn.node.style.color = '#ffffff';
    }
  }

  setEventListener() {
    this.node.onclick = (event) => {
      const { target } = event;
      this.group = target.dataset.group;
      wordsPageState.group = target.dataset.group
      if(wordsPageState.group === '6') {
        console.log(wordsPageState.group);
        this.onUserWords();
      }else{
      this.onRout();
      }
    }
  }
}
