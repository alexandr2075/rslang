import './homePageBuilder.scss';

import CreateComponent from '../../utils/createComponent';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';
import WordsPage from '../dictionary/words-page/words-page';
import Sprint from '../../games/sprint/sprint';
import Statistics from '../statistics/statistics';
import Audio from '../../games/AudioCall/Audio';

export default class HomePageBuilder extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'home-page-builder');
    this.header = new Header(this.node);
    this.menuHandler();
    this.container = new CreateComponent(this.node, 'div', 'common-container');
    this.main = new Main(this.container.node);
    this.footer = new Footer(this.container.node);
  }

  menuHandler() {
	  this.header.burger.onMain = async () => {
		  this.container.destroy();
		  this.container = new CreateComponent(this.node, 'div', 'common-container');
		  this.main = new Main(this.container.node);
		  this.footer = new Footer(this.container.node);
    };
    this.header.burger.onDictionary = async () => {
      this.container.destroy();
      this.container = new CreateComponent(this.node, 'div', 'common-container');
      this.wordsPage = new WordsPage(this.container.node);
      this.footer = new Footer(this.container.node);
    };
    this.header.burger.onStat = async () => {
      this.container.destroy();
      this.container = new CreateComponent(this.node, 'div', 'common-container');
      this.stat = new Statistics(this.container.node);
      this.footer = new Footer(this.container.node);
    };
    this.header.burger.onAudioCall = async () => {
      this.container.destroy();
      this.container = new CreateComponent(this.node, 'div', 'common-container');
      this.audiocall = new Audio(this.container.node, 'div', 'au', 'Audiocall');
    };
    this.header.burger.onSprint = async () => {
      this.container.destroy();
      this.container = new CreateComponent(this.node, 'div', 'common-container');
      this.sprint = new Sprint(this.container.node);
    };
    this.header.burger.onTeam = async () => {
      this.container.destroy();
      this.container = new CreateComponent(this.node, 'div', 'common-container');
      this.team = new CreateComponent(this.container.node, 'div', 'team', 'Team');
      this.footer = new Footer(this.container.node);
    };
  }
}
