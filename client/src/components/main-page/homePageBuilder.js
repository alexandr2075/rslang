import CreateComponent from "../../utils/createComponent";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import './homePageBuilder.scss';
import WordsPage from "../dictionary/words-page/words-page";

export default class HomePageBuilder extends CreateComponent {
	constructor(parentNode) {
		super(parentNode, 'div', 'home-page-builder');
		this.header = new Header(this.node);
		this.menuHandler();
		this.container = new CreateComponent(this.node, 'div', 'container');
		this.main = new Main(this.container.node);
		this.footer = new Footer(this.container.node);
	}
  
	menuHandler() {
		this.header.burger.onDictionary = async() => {
			this.container.destroy();
			this.container = new CreateComponent(this.node, 'div', 'container');
			this.wordPage = new WordsPage(this.container.node, 'main', 'main')
		}
		this.header.burger.onMain = async() => {
			this.container.destroy();
			this.container = new CreateComponent(this.node, 'div', 'container');
			this.main = new Main(this.container.node, 'main', 'main')
		}
	}
}