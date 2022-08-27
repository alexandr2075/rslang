export default class createComponent {
  constructor(parentNode, tagName = '', className = '', content = '') {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = content;
    if (parentNode) {
      parentNode.append(element);
    }
    this.node = element;
  }

  destroy() {
    this.node.remove();
  }
}
