import createComponent from '../../../utils/createComponent';
import './words-menu.scss';
import Footer from '../../footer';
import wordsPageState from '../../../utils/state';

export default class WordsMenu extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'menu', '');
    this.renderMenu();
    this.setEventListener();
    this.footer = new Footer(this.node);
  }

  renderMenu() {
    wordsPageState.levels.forEach((level, index) => {
      level = new createComponent(this.node, 'div', `level-btn ${wordsPageState.levels[index].slice(3)}`, `${wordsPageState.levels[index]}`);
      level.node.setAttribute('data-group', index);
      level.node.style.border = `1px solid ${wordsPageState.color[index]}`;
      level.node.style.color = wordsPageState.color[index];
    });
  }

  setEventListener() {
    this.node.onclick = (event) => {
      const { target } = event;
      this.group = target.dataset.group;
      wordsPageState.group = target.dataset.group;
      this.onRout();
    };
  }
}
