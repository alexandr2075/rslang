import createComponent from '../../utils/createComponent';

import Words from './words';
import PaginationButtons from '../pagination/pagination-buttons';
import wordsPageState from '../../utils/state';
import Footer from '../footer'
import WordsPageMenu from './menu';



export default class WordsPage extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'dictionary', '');
    this.menu = new WordsPageMenu(this.node);
    this.groupRoutHandler();
  }

  renderWords() {
    this.wordsContainer = new createComponent(this.node, 'div', 'words-container')
    this.words = new Words(this.wordsContainer.node);
    this.paginationButtons = new PaginationButtons(this.wordsContainer.node);
    this.paginationHandler();
    this.footer = new Footer(this.wordsContainer.node)
    
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