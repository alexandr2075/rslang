import createComponent from '../../utils/createComponent';
import './footer.scss'

export default class Footer extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'footer', 'footer', '');
    this.footerContainer = new createComponent(this.node, 'div', 'footer-container')
    this.render();
  }

  render() {
    this.rsSchoolLink = new createComponent(this.footerContainer.node, 'a', 'rss-link', 'rs-school');
    this.rsSchoolLink.node.href = 'https://rs.school/js/';
    this.developers = new createComponent(this.footerContainer.node, 'div', 'developers');
    this.AlexGitHubLink = new createComponent(this.developers.node, 'a', 'rss-link')
    this.AlexGitHubLink.node.innerHTML = `<i class="fa-brands fa-github"></i> Alexandr`;
    this.AlexGitHubLink.node.href = 'https://github.com/alexandr2075';
    this.VasyaGitHubLink = new createComponent(this.developers.node, 'a', 'rss-link');
    this.VasyaGitHubLink.node.innerHTML = '<i class="fa-brands fa-github"></i> Vasya';
    this.VasyaGitHubLink.node.href = 'https://github.com/Vasyaruberoid';
    this.IrmaGitHubLink = new createComponent(this.developers.node, 'a', 'rss-link')
    this.IrmaGitHubLink.node.innerHTML = '<i class="fa-brands fa-github"></i> Irma';
    this.IrmaGitHubLink.node.href = 'https://github.com/ephedrini1';
    this.year = new createComponent(this.footerContainer.node, 'span', 'year', "'22")
  }
}
