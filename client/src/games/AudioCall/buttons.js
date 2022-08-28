/* eslint-disable */
import createComponent from '../../utils/createComponent';
import '../../components/pagination/pagination-buttons.scss';

export default class Buttons extends createComponent {
  constructor(parentNode, btn1, btn2, btn3, btn4) {
    super(parentNode, 'div', 'pagination-container', '');
    this.btn1 = new createComponent(this.node, 'button', 'button pagination-button', btn1);
    this.btn2 = new createComponent(this.node, 'button', 'button pagination-button', btn2);
    this.btn3 = new createComponent(this.node, 'button', 'button pagination-button', btn3);
    this.btn4 = new createComponent(this.node, 'button', 'button pagination-button', btn4);
    this.setEventListener();
  }

  setEventListener() {
    this.btn1.node.onclick = () => {
        
      this.onNextPage();
    };
    this.btn2.node.onclick = () => {
      this.onPrevPage();
    };
    this.btn3.node.onclick = () => {
        this.onPrevPage();
      };
      this.btn4.node.onclick = () => {
        this.onPrevPage();
      };
  }
}
