import './burger.scss';
import CreateComponent from '../../utils/createComponent';
import WordsMenu from '../dictionary/words-menu/words-menu';
import Sprint from '../../games/sprint/sprint';
import Header from '../main-page/header/header';

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
    this.menuBurger.node.innerHTML = `
		<div>
			<nav>
				<ul>
					<li class='burger burger-main'><a href="#main">Главная</a></li>
					<li class='burger burger-dictionary'><a href="/posts">Учебник</a></li>
					<li class='burger burger-stat'><a href="#statistics">Статистика</a></li>
					<li class='burger burger-audiocall'><a href="#audiocall">Аудиовызов</a></li>
					<li class='burger burger-sprint'><a href="#sprint">Спринт</a></li>
					<li class='burger burger-about-team'><a href="#about-team">О команде</a></li>
				</ul>
			</nav>
		</div>
	  `;
	  }

	  setEventListener() {
    this.node.onclick = () => {
      this.menuBurger.node.classList.toggle('active');
    };
    this.menuBurger.node.onclick = () => {
      this.menuBurger.node.classList.toggle('active');
    };
  }
}
