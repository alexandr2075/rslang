import CreateComponent from '../../../utils/createComponent';
import './footer.scss';

export default class Footer extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'footer', 'footer', '');
    this.footerContainer = new CreateComponent(this.node, 'div', 'footer-container')
    this.render();
  }

  render() {
<<<<<<< HEAD:client/src/components/footer/footer.js
    this.rsSchoolLink = new createComponent(this.footerContainer.node, 'a', 'rss-link', 'rs-school');
    this.rsSchoolLink.node.href = 'https://rs.school/js/';
    this.developers = new createComponent(this.footerContainer.node, 'div', 'developers');
    this.AlexGitHubLink = new createComponent(this.developers.node, 'a', 'rss-link')
=======
    this.rsSchoolLink = new CreateComponent(this.node, 'a', 'rss-link', 'rs-school');
    this.rsSchoolLink.node.href = 'https://rs.school/js/';
    this.developers = new CreateComponent(this.node, 'div', 'developers');
    this.AlexGitHubLink = new CreateComponent(this.developers.node, 'a', 'rss-link')
>>>>>>> develop:client/src/components/main-page/footer/footer.js
    this.AlexGitHubLink.node.innerHTML = `<i class="fa-brands fa-github"></i> Alexandr`;
    this.AlexGitHubLink.node.href = 'https://github.com/alexandr2075';
    this.VasyaGitHubLink = new CreateComponent(this.developers.node, 'a', 'rss-link');
    this.VasyaGitHubLink.node.innerHTML = '<i class="fa-brands fa-github"></i> Vasya';
    this.VasyaGitHubLink.node.href = 'https://github.com/Vasyaruberoid';
    this.IrmaGitHubLink = new CreateComponent(this.developers.node, 'a', 'rss-link')
    this.IrmaGitHubLink.node.innerHTML = '<i class="fa-brands fa-github"></i> Irma';
    this.IrmaGitHubLink.node.href = 'https://github.com/ephedrini1';
<<<<<<< HEAD:client/src/components/footer/footer.js
    this.year = new createComponent(this.footerContainer.node, 'span', 'year', "'22")
=======
    this.year = new CreateComponent(this.node, 'span', 'year', "'22")
>>>>>>> develop:client/src/components/main-page/footer/footer.js
  }
}
