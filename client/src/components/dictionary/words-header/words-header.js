import './words-header.scss';

import createComponent from '../../../utils/createComponent';

export default class WordsHeader extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'header', 'words-header');
    this.toMenuBtn = new createComponent(this.node, 'button', 'to-menu-btn', 'menu')
    this.setEventListener();
  }

  setEventListener() {
    this.toMenuBtn.node.onclick = () => {
      this.onMenuPage();
    };


}
}