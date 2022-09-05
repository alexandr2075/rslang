import './burger.scss';
import CreateComponent from '../../utils/createComponent';

export default class Burger extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'strips');
    this.stripTop = new CreateComponent(this.node, 'span', 'strip');
    this.stripCenter = new CreateComponent(this.node, 'span', 'strip');
    this.stripBottom = new CreateComponent(this.node, 'span', 'strip');

    this.renderDropDownMenu();
    this.setEventListener();
  }

  renderDropDownMenu() {
    this.menuBurger = new CreateComponent(document.body, 'div', 'drop-down-menu');
    this.menu = new CreateComponent(this.menuBurger.node, 'div');
    this.navigation = new CreateComponent(this.menu.node, 'nav');
    this.menuList = new CreateComponent(this.navigation.node, 'ul');

    this.menuItemMain = new CreateComponent(this.menuList.node, 'li', 'burger burger-main', 'Главная');
    this.menuItemMain.node.setAttribute('data-menu', 'main');

    this.menuItemDictionary = new CreateComponent(this.menuList.node, 'li', 'burger burger-dictionary', 'Учебник');
    this.menuItemDictionary.node.setAttribute('data-menu', 'dictionary');

    this.menuItemStat = new CreateComponent(this.menuList.node, 'li', 'burger burger-stat', 'Статистика');
    this.menuItemStat.node.setAttribute('data-menu', 'stat');

    this.menuItemAudiocall = new CreateComponent(this.menuList.node, 'li', 'burger burger-audiocall', 'Аудиовызов');
    this.menuItemAudiocall.node.setAttribute('data-menu', 'audiocall', 'Аудиовызов');

    this.menuItemSprint = new CreateComponent(this.menuList.node, 'li', 'burger burger-sprint', 'Спринт');
    this.menuItemSprint.node.setAttribute('data-menu', 'sprint');

    this.menuItemAboutTeam = new CreateComponent(this.menuList.node, 'li', 'burger burger-about-team', 'О команде'); 
    this.menuItemAboutTeam.node.setAttribute('data-menu', 'about-team');
  }

  setEventListener() {
    this.node.onclick = () => {
      this.menuBurger.node.classList.toggle('active');
    };
    this.menuBurger.node.onclick = (event) => {

      this.menuBurger.node.classList.toggle('active');
      switch (event.target.dataset.menu) {
        case 'dictionary':
          this.onDictionary();
          break;
        case 'main':
          this.onMain();
          break;
        case 'stat':
          this.onStat();
          break;
        case 'audiocall':
          this.onAudioCall();
          break;
        case 'sprint':
          this.onSprint();
          break;
        case 'about-team':
          this.onTeam();
          break;
        default:
      }
    };
  }
}
