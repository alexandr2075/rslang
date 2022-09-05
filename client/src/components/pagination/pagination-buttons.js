import createComponent from '../../utils/createComponent';
import './pagination-buttons.scss';

export default class PaginationButtons extends createComponent {
  constructor(parentNode, namePrev, nameNext) {
    super(parentNode, 'div', 'pagination', '');
    this.container = new createComponent (this.node, 'div', 'pagination-container');
    this.prevButton = new createComponent(this.container.node, 'button', 'button pagination-button', namePrev);
    this.nextButton = new createComponent(this.container.node, 'button', 'button pagination-button', nameNext);
    this.setEventListener();
  }

  setEventListener() {
    this.nextButton.node.onclick = () => {
      this.onNextPage();
    };
    this.prevButton.node.onclick = () => {
      this.onPrevPage();
    };
  }
}
