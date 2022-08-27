import createComponent from '../../../utils/createComponent';
// eslint-disable-next-line import/extensions, import/no-unresolved
import Auth from '../../../auth/index';

export default class Header extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'header', 'header');
    this.render();
  }

  render() {
    this.node.innerHTML = `<div class="header ">
<div class="wrapper header__wrapper ">
<div class="header__part">
<div class="hamburger ">
<div class="hamburger__inner " role="button" tabindex="0">
</div></div>
<a class="logo_link" href="/">
<span class="logo header__logo ">RS Lang</span></a>
</div>
<div class="header__part">
<div class="circle__wrapper ">
<div class="header__circle  "><div class="box-animation ">
<div class="box-inner">
</div>
</div>
<nav class="header__nav ">
<ul class="navigation ">
<a href="/"><li class="anim_one navigation__item">Главная</li></a>
<a href="/textbook">
<li class="anim_two navigation__item">Учебник</li></a>
<li class="navigation__item navigation__item_list">
<span class="anim_three">Игры </span>
<span class="material-icons arrow">expand_more</span>
<ul role="presentation" class="navigation_submenu">
<a href="/games/sprint">
<li class="anim_six anim-item navigation_submenu__item">
<div class="item-dot_sprint"></div><div>Спринт</div></li></a>
<button onclick = 'AudioCall()'>Аудиовызов</button>
<li class="anim_seven anim-item navigation_submenu__item">
<div class="item-dot_audio"></div>
<a href="/statistic">
<li class="anim_eight anim-item navigation__item">Статистика</li></a></ul></nav>
</div></div>
<div class="header__auth ">

<button type="button" class="button button_bordered button-registr">Регестрация</button>
<button type="button" class="button button_bordered button-entry">Вoйти</button>

</div></div>
</div></div>
`;
  }
}
