import createComponent from "../../../utils/createComponent";
export default class GamePage extends createComponent {
    constructor(parentNode){
        super(parentNode, 'div', 'game-page')
        this.render();
    }
    render(){
this.node.innerHTML = `<div class="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center" style="min-height: calc(100vh - 100px);">
<div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center" style="height: 100%;">
<div class="MuiGrid-root MuiGrid-item" style="margin: 0px;">
<a href="#/games/sprint" style="text-decoration: none;">
<div class="MuiPaper-root MuiCard-root sc-gTgzIj fTLLNh MuiPaper-elevation1 MuiPaper-rounded" style="background: url(&quot;https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=709&amp;q=80&quot;) 0% 0% / cover;">
<div class="MuiCardContent-root">
<h5 class="MuiTypography-root sc-laRPJI eNpfYQ MuiTypography-h5">Спринт</h5></div></div></a></div>
<div class="MuiGrid-root MuiGrid-item" style="margin: 0px;">
<a href="#/games/audiocall" style="text-decoration: none;">
<div class="MuiPaper-root MuiCard-root sc-gTgzIj fTLLNh MuiPaper-elevation1 MuiPaper-rounded" style="background: url(&quot;https://images.unsplash.com/photo-1592304699501-1bd1c422a661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1468&amp;q=80&quot;) 0% 0% / cover;">
<div class="MuiCardContent-root">
<h5 class="MuiTypography-root sc-laRPJI eNpfYQ MuiTypography-h5">Аудиовызов</h5></div></div></a></div>
`;
    }
}