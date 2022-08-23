import createComponent from '../../utils/createComponent'

export default class PaginationButtons extends createComponent {

  constructor(parentNode) {
    super(parentNode, 'div', 'pagination-container', '');
    this.prevButton = new createComponent(this.node, 'button', 'button pagination-button', 'PREV');
    this.nextButton = new createComponent(this.node, 'button', 'button pagination-button', 'NEXT');
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