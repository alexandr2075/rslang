import CreateComponent from '../../../utils/createComponent';
import './footer.scss';

export default class Footer extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'footer', 'footer', '');
    this.render();
  }

  render() {
    this.rsSchoolLink = new CreateComponent(this.node, 'a', 'rss-link', 'rs-school');
    this.rsSchoolLink.node.href = 'https://rs.school/js/';
    this.developers = new CreateComponent(this.node, 'div', 'developers');
    this.AlexGitHubLink = new CreateComponent(this.developers.node, 'a', 'rss-link')
    this.AlexGitHubLink.node.innerHTML = `<i class="fa-brands fa-github"></i> Alexandr`;
    this.AlexGitHubLink.node.href = 'https://github.com/alexandr2075';
    this.VasyaGitHubLink = new CreateComponent(this.developers.node, 'a', 'rss-link');
    this.VasyaGitHubLink.node.innerHTML = '<i class="fa-brands fa-github"></i> Vasya';
    this.VasyaGitHubLink.node.href = 'https://github.com/Vasyaruberoid';
    this.IrmaGitHubLink = new CreateComponent(this.developers.node, 'a', 'rss-link')
    this.IrmaGitHubLink.node.innerHTML = '<i class="fa-brands fa-github"></i> Irma';
    this.IrmaGitHubLink.node.href = 'https://github.com/ephedrini1';
    this.year = new CreateComponent(this.node, 'span', 'year', "'22")
  }
}
