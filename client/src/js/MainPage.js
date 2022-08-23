import '../style/header.scss';
import '../style/style.scss';

export default function out() {
  const header = document.getElementById('qwe');
  header.innerHTML = `<div class="header ">
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
        <a href="/games/savanna">
        <li class="anim_four anim-item navigation_submenu__item item_one">
        <div class="item-dot_savanna">
        </div>
        <div>Саванна</div></li></a>
        <a href="/games/oasis">
        <li class="anim_five anim-item navigation_submenu__item">
        <div class="item-dot_oasis"></div>
        <div>Оазис</div></li></a>
        <a href="/games/sprint">
        <li class="anim_six anim-item navigation_submenu__item">
        <div class="item-dot_sprint"></div><div>Спринт</div></li></a>
        <a href="/games/audiocall">
        <li class="anim_seven anim-item navigation_submenu__item">
        <div class="item-dot_audio"></div>
        <div>Аудиовызов</div></li></a></ul></li>
        <a href="/statistic">
        <li class="anim_eight anim-item navigation__item">Статистика</li></a></ul></nav>
        </div></div>
        <div class="header__auth ">
        <a href="/authorization">
        <button type="button" class="button button_bordered">Вход</button>
        </a>
        </div></div>
        </div></div>
        <div class="wrapper greeting__wrapper">
        <div class="greeting__text-block">
            <div class="animated fadeInUp" style="animation-duration: 1s;">
                <h1>Изучай английский <br>с нами</h1></div>
                <div class="animated fadeInUp" style="animation-duration: 1s;">
                    <p>Спасибо что выбрали именно наше приложение для эффективного изучения иностранных слов в игровой форме. Всегда под рукой. На любом устройстве.</p>
                </div></div>
                <img class="greeting__img" src="" alt="rslang">
            </div>
            <section class="video_section">
    <div class="wrapper wrapper_video">
    <div class="animated fadeInUp" style="animation-duration: 1s;"><h2 class="main_title">Добро пожаловать в RS Lang</h2></div>
    <div class="animated fadeInUp" style="animation-duration: 1s;"><p class="main_subtitle">Приступим?</p></div>
    <div class="animated fadeInUp" style="animation-duration: 1s;"><div class="wrapper">p<div class="player-wrapper">
    <div class="player" style="width: 100%; height: 100%;"><div class="react-player__preview" tabindex="0" style="width: 100%; height: 100%; background-size: cover; background-position: center center; cursor: pointer; display: flex; align-items: center; justify-content: center; background-image: url();"><img alt="play" src=""></div></div></div></div></div></div>
    </section>
    <footer class="footer anim">
    <div class="inner">
    
    <div class="wrapper footer__wrapper"><div class="footer__top-block"><div>
    <p class="footer__logo">RS LANG</p><div class="logo-container">
    <a href="">
    <img src="." alt="github"></a>
    <a href="">
    <img src="" alt="youtube"></a><a href="https://rs.school/js/">
    <img src="" alt="rs-school"></a></div></div>
    <div class="column">
    <p class="column__title">Меню</p>
    <a href="/"><p class="column__item">Главная</p></a>
    <a href="/textbook">
    <p class="column__item">Учебник</p></a>
    <p class="column__item">Статистика</p>
    </div>
    <div class="column">
    <p class="column__title">Разработчики</p>
    <a class="column__item" href="https://github.com/alexandr2075">Alexandr</a>
    <a class="column__item" href="https://github.com/Vasyaruberoid">Vasya</a>
    <a class="column__item" href="https://github.com/ephedrini1">Irma</a>
    </div></div><div class="footer__bottom-block">©2022 RS LANG;
    <a href="https://rs.school/js/">RS School Course.</a></div></div></div>
    </footer>`;
}
