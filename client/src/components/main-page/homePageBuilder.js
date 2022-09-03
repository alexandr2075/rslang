import CreateComponent from "../../utils/createComponent";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import './homePageBuilder.scss';

export default class HomePageBuilder extends CreateComponent {
	constructor(parentNode) {
		super(parentNode, 'div', 'home-page-builder');
		this.header = new Header(this.node);
		this.main = new Main(this.node);
		this.footer = new Footer(this.node);
	}
}