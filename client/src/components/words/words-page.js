import createComponent from '../../utils/createComponent';

import Words from './words';
import PaginationButtons from '../pagination/pagination-buttons';
import wordsPageState from '../../utils/state';
import Footer from '../footer'


export default class WordsPage extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.paginationButtons = new PaginationButtons(this.node);
    this.paginationHandler();
    this.renderWords();
    const footer = new Footer(document.body);

  }

  renderWords() {
    this.words = new Words(this.node);

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
    this.words.destroy();
    this.renderWords();
  }
}