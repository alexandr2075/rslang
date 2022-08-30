import createComponent from '../../utils/createComponent';

export default class PaginationButtons extends createComponent {
  constructor(parentNode, namePrev, nameNext) {
    super(parentNode, 'div', 'pagination-container', '');
    this.prevButton = new createComponent(this.node, 'button', 'button pagination-button', namePrev);
    this.nextButton = new createComponent(this.node, 'button', 'button pagination-button', nameNext);
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
