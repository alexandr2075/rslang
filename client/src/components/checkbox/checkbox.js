import createComponent from "../../utils/createComponent";
import wordsPageState from "../../utils/state";

export default class CheckBox extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'checkbox-container');
  }

  render(id) {
    this.checkBox = new createComponent(this.node, 'input');
    this.label = new createComponent(this.node, 'label');
    this.checkBox.node.setAttribute('type', 'checkBox');
    this.checkBox.node.setAttribute('id', `${id}`);
    this.checkBox.node.checked = true;
    this.label.node.setAttribute('for', `${id}`);
  }

}