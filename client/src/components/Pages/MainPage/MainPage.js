import createComponent from "../../../utils/createComponent";

export default class MainPage extends createComponent {
    constructor(parentNode){
        super(parentNode, "main", "main-page" );
        this.render();
    }
  render() {
     this.node.innerHTML = `<div class="wrapper greeting__wrapper">
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
 `
    }
  }

