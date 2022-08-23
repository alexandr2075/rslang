import createComponent from "../../utils/createComponent";
import Footer from "../footer";
import wordsPageState from "../../utils/state";
import WordsPage from "./words-page";

export default class WordsPageMenu extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'menu', '');
    this.renderMenu();
    this.setEventListener();
    this.footer = new Footer(this.node);
  }

  renderMenu() {
    wordsPageState.levels.forEach((level, index) => {
      level = new createComponent(this.node, 'div', `${wordsPageState.levels[index].slice(3)}`, `${wordsPageState.levels[index]}`)
      level.node.setAttribute('data-group', index)
      console.log(level.node.dataset.group)
    })
  }


  setEventListener() {
    this.node.onclick = (event) => {
      let target = event.target;
      this.group = target.dataset.group;
      wordsPageState.group = target.dataset.group
        this.onRout();
      }
    }
  }
