import CreateComponent from '../../../utils/createComponent';
import Words from '../words/words';
import PaginationButtons from '../../pagination/pagination-buttons';
import wordsPageState from '../../../utils/state';
import Footer from '../../main-page/footer/footer';
import WordsMenu from '../words-menu/words-menu';
import WordsHeader from '../words-header/words-header';
import UserWords from '../userWords/userWords';
// import { getAllUserWords } from '../../../api/userWordsApi';

export default class WordsPage extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'dictionary', '');
    this.header = new WordsHeader(this.node);
    this.header.toMenuBtn.node.disabled = true;
    this.toMenuHandler();
    // this.translateHandler()
    this.menu = new WordsMenu(this.node);
    this.groupRoutHandler();
  }

  async renderUserWords() {
    this.header.toMenuBtn.node.disabled = false;
    this.wordsContainer = new CreateComponent(this.node, 'div', 'words-container');
    this.userWords = new UserWords(this.wordsContainer.node);
    this.paginationButtons = new PaginationButtons(this.wordsContainer.node);
    this.paginationHandler();
    this.footer = new Footer(this.wordsContainer.node);
  }

  renderWords() {
    this.wordsContainer = new CreateComponent(this.node, 'div', 'words-container');
    this.header = new WordsHeader(this.wordsContainer.node);
    this.words = new Words(this.wordsContainer.node);
    this.paginationButtons = new PaginationButtons(this.wordsContainer.node);
    this.paginationHandler();
    this.footer = new Footer(this.wordsContainer.node);
    this.toMenuHandler();
  }

  toMenuHandler() {
    this.header.onMenuPage = async () => {
      this.wordsContainer.destroy();
      this.menu = new WordsMenu(this.node);
      this.groupRoutHandler();
    };
  }

  groupRoutHandler() {
    this.menu.onUserWords = async () => {
      this.menu.destroy();
      this.renderUserWords();
    };
    this.menu.onRout = async () => {
      this.menu.destroy();
      this.renderWords();
    };
  }

  paginationHandler() {
    this.paginationButtons.onNextPage = async () => {
      if (wordsPageState.wordsPage === 29) {
        this.paginationButtons.prevButton.node.disabled = true;
      } else {
        wordsPageState.page += 1;
        this.rerenderWords();
      }
    };
    this.paginationButtons.onPrevPage = () => {
      if (wordsPageState.page === 1) {
        this.paginationButtons.prevButton.node.disabled = true;
      } else {
        wordsPageState.page -= 1;
        this.rerenderWords();
      }
    };
  }

  rerenderWords() {
    this.wordsContainer.destroy();
    this.renderWords();
  }

  rerenderUserWords() {
    this.UserWords.onDelete = async () => {
      this.wordsContainer.destroy();
      this.renderUserWords();
    };
  }
}
