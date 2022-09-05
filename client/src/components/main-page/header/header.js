import './header.scss';
import CreateComponent from '../../../utils/createComponent';
import wordsPageState from '../../../utils/state';
import CheckBox from '../../checkbox/checkbox';
import Burger from '../../burger/burger';
import Auth from '../../../auth/auth';

export default class Header extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'header', 'header');
    this.exit = new CreateComponent(this.node, 'button', 'button-exit header-btn', 'Выйти');
    this.entry = new CreateComponent(this.node, 'button', 'button-entry header-btn', 'Войти');
    this.reg = new CreateComponent(this.node, 'button', 'button-registr header-btn', 'Регистрация');
    this.burger = new Burger(this.node, 'div');
    this.setEventListener();
  }

  setEventListener() {
    this.entry.node.onclick = () => {
      const auth = new Auth(document.body, 'Войти');
    };
    this.reg.node.onclick = () => {
      const signup = new Auth(document.body, 'Регистрация');
    };
    this.exit.node.onclick = () => {
      this.entry.node.style.display = 'block';
      this.reg.node.style.display = 'block';
      this.exit.node.style.display = 'none';
      localStorage.clear();
    };
  }
}
