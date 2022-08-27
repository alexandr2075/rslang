import createComponent from "../../../utils/createComponent";
export default class GameLinks extends createComponent {
    constructor(parentNode){
super(parentNode, "div", "game-links");
this.render();
    }
    render() {
this.node.innerHTML = `
<span class="anim_three">Игры </span>
<span class="material-icons arrow">expand_more</span>
<ul role="presentation" class="navigation_submenu">
<a href="/games/sprint">
<li class="anim_six anim-item navigation_submenu__item">
<div class="item-dot_sprint"></div><div>Спринт</div></li></a>
<a href="/games/audiocall">
<li class="anim_seven anim-item navigation_submenu__item">
<div class="item-dot_audio"></div>
<div>Аудиовызов</div></li></a></ul></li>
`
    }
    renderAllGames() {
this.GameList = new createComponent(this.node, 'ul', 'game-list');
this.GameListItem = new createComponent(this.GameList.node, 'li' , 'game-item');
    }
    renderGameAudioCall () {
this.AudioCall = new createComponent ()
    }
    renderGameSprint () {
        this.Sprint = new createComponent()
    }
}