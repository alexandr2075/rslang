import createComponent from '../../../utils/createComponent';

import Words from '../words/words';
import PaginationButtons from '../../pagination/pagination-buttons';
import wordsPageState from '../../../utils/state';
import Footer from '../../footer/footer'
import WordsMenu from '../words-menu/words-menu';
import WordsHeader from '../words-header/words-header';



export default class WordsPage extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'dictionary', '');
    this.header = new WordsHeader(this.node);
    this.header.toMenuBtn.node.disabled = true;
    this.toMenuHandler();
    this.translateHandler()
    this.menu = new WordsMenu(this.node);
    this.groupRoutHandler();
  }

  renderWords() {
    this.header.toMenuBtn.node.disabled = false;
    this.wordsContainer = new createComponent(this.node, 'div', 'words-container')
    this.words = new Words(this.wordsContainer.node);
    this.paginationButtons = new PaginationButtons(this.wordsContainer.node);
    this.paginationHandler();
    this.footer = new Footer(this.wordsContainer.node)
  }

  translateHandler() {
    this.header.onTranslate = async() => {
    this.header.checkBox.checkBox.node.checked ? wordsPageState.showTranslate = true: wordsPageState.showTranslate = false;
    if(this.wordsContainer) this.rerenderWords()
    }
  }

  toMenuHandler() {
    this.header.onMenuPage = async() => {
      this.header.toMenuBtn.node.disabled = true;
      this.wordsContainer.destroy();
      this.menu = new WordsMenu(this.node)
      this.groupRoutHandler();
    }
  }

  groupRoutHandler() {
    this.menu.onRout = async() => {
      this.menu.destroy()
        this.renderWords()
    }
  }
  
  paginationHandler() {
    this.paginationButtons.onNextPage = async () => {
      if (wordsPageState.wordsPage === 29) {
        this.paginationButtons.prevButton.node.disabled = true;
      }else{
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
}