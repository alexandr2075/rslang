import createComponent from '../utils/createComponent';

export default class Footer extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'footer', 'footer', '');
    this.renderInnerHTML();
  }

  renderInnerHTML() {
    this.node.innerHTML = `
      <a class="school" href="https://rs.school/js/">RSSchool
      <span class="year">'2022</span>
    </a>`;
  }
}
