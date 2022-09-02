import './words-header.scss';

import createComponent from '../../../utils/createComponent';
import wordsPageState from '../../../utils/state';
import CheckBox from '../../checkbox/checkbox';

export default class WordsHeader extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'header', 'words-header');
    this.container = new createComponent(this.node, 'div', 'header-container');
    this.toMenuBtn = new createComponent(this.container.node, 'button', 'to-menu-btn', 'menu');
    this.checkBox = new CheckBox(this.container.node, 'div', 'translate-checkbox');
    this.checkBox.render('translate-checkbox');
    this.setEventListener();
  }

  setEventListener() {
    this.toMenuBtn.node.onclick = () => {
      this.updateMainColor();
      this.onMenuPage();
    };

    this.checkBox.node.onclick = () => {
      this.onTranslate();
    }
  }

  updateMainColor() {
    let root = document.documentElement;
    root.style.setProperty('--main-color', '#fff')
  }

}