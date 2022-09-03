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
   // this.menuItemMain.node.innerHTML = `<a href="#main" data-menu="main">Главная</a>`

    this.menuItemDictionary = new CreateComponent(this.menuList.node, 'li', 'burger burger-dictionary', 'Учебник');
    this.menuItemDictionary.node.setAttribute('data-menu', 'dictionary');
   // this.menuItemDictionary.node.innerHTML = `<a href="/posts" data-menu="dictionary">Учебник</a>`

    this.menuItemStat = new CreateComponent(this.menuList.node, 'li', 'burger burger-stat', 'Статистика');
    this.menuItemStat.node.setAttribute('data-menu', 'stat');
   // this.menuItemStat.node.innerHTML = `<a href="#statistics" data-menu="stat">Статистика</a>`

    this.menuItemAudiocall = new CreateComponent(this.menuList.node, 'li', 'burger burger-audiocall');
    this.menuItemAudiocall.node.setAttribute('data-menu', 'audiocall', 'Аудиовызов');
   // this.menuItemAudiocall.node.innerHTML = `<a href="#audiocall" data-menu="audiocall">Аудиовызов</a>`
    
    this.menuItemSprint = new CreateComponent(this.menuList.node, 'li', 'burger burger-sprint', 'Спринт');
    this.menuItemSprint.node.setAttribute('data-menu', 'sprint');
   // this.menuItemSprint.node.innerHTML = `<a href="#sprint" data-menu="sprint">Спринт</a>`
    
    this.menuItemAboutTeam = new CreateComponent(this.menuList.node, 'li', 'burger burger-about-team', 'О команде');
    this.menuItemAboutTeam.node.setAttribute('data-menu', 'about-team');
   // this.menuItemAboutTeam.node.innerHTML = `<a href="#about-team" data-menu="about-team">О команде</a>`
    
    // this.menuBurger.node.innerHTML = `
		// <div>
		// 	<nav>
		// 		<ul>
		// 			<li class='burger burger-main'><a href="#main">Главная</a></li>
		// 			<li class='burger burger-dictionary'><a href="/posts">Учебник</a></li>
		// 			<li class='burger burger-stat'><a href="#statistics">Статистика</a></li>
		// 			<li class='burger burger-audiocall'><a href="#audiocall">Аудиовызов</a></li>
		// 			<li class='burger burger-sprint'><a href="#sprint">Спринт</a></li>
		// 			<li class='burger burger-about-team'><a href="#about-team">О команде</a></li>
		// 		</ul>
		// 	</nav>
		// </div>
	  // `;
	  }

	  setEventListener() {
    this.node.onclick = () => {
      this.menuBurger.node.classList.toggle('active');
    };
    this.menuBurger.node.onclick = (event) => {
      console.log(event.target)
      this.menuBurger.node.classList.toggle('active');
      console.log(event.target.dataset.menu)
      switch(event.target.dataset.menu) {
        case 'dictionary' :
          this.onDictionary();
           break;
      case 'main' :
        this.onMain();
        break;
      case 'stat' :
        this.onStat();
        break;
      case 'audiocall' :
          this.onAudioCall();
          break;
      case 'sprint' :
          this.onSprint();
          break;
      case 'about-team' :
            this.onTeam();
            break;
    };
  }
}
}
