import createComponent from "../../../utils/createComponent";

export default class Footer extends createComponent {
    constructor(parentNode){
        super(parentNode, 'footer', 'footer anim')
        this.render();
    }
    render(){
this.node.innerHTML = ` 
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
`
    }
}