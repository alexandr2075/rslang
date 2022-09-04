import CreateComponent from '../../../utils/createComponent';
import Words from '../words/words';
import PaginationButtons from '../../pagination/pagination-buttons';
import wordsPageState from '../../../utils/state';
import WordsMenu from '../words-menu/words-menu';
import WordsHeader from '../words-header/words-header';
import UserWords from '../userWords/userWords';
import Sprint from '../../../games/sprint/sprint';

export default class WordsPage extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'dictionary', '');
    this.node.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../../../assets/images/dictionary-background.jpg')`;
    this.node.style.backgroundAttachment = 'fixed';
    this.node.style.backgroundSize = 'cover';
    this.node.style.position = 'relative';
    this.node.style.fontSize = '16px';
    this.header = new WordsHeader(this.node);
    this.header.toMenuBtn.node.disabled = true;
    this.toMenuHandler();
    this.translateHandler();
    this.menu = new WordsMenu(this.node);
    this.groupRoutHandler();
  }

  async renderUserWords() {
    this.header.toMenuBtn.node.disabled = false;
    this.userWordsContainer = new CreateComponent(this.node, 'div', 'words-container')
    this.userWords = new UserWords(this.userWordsContainer.node);
    this.paginationButtons = new PaginationButtons(this.userWordsContainer.node, 'предыдущая', 'следующая');
    this.paginationHandler();
    this.toMenuHandler();

  }

  renderWords() {
    this.header.toMenuBtn.node.disabled = false;
    this.wordsContainer = new CreateComponent(this.node, 'div', 'words-container');
    this.words = new Words(this.wordsContainer.node);
    this.gameContainer = new CreateComponent(this.wordsContainer.node, 'div', 'game-container');
    this.sprint = new CreateComponent(this.gameContainer.node, 'button', 'game-btn', 'Sprint');
    this.paginationButtons = new PaginationButtons(this.wordsContainer.node, 'предыдущая', 'следующая');
    this.paginationHandler();
    this.toMenuHandler();
    this.gameHandler();
  }

  gameHandler() {
    this.gameContainer.node.onclick = (event) => {
      if(event.target.textContent === 'Sprint'){
        this.wordsContainer.destroy();
        this.game = new Sprint(this.node)
      }
    }
  }
  toMenuHandler() {
    this.header.onMenuPage = async () => {
      if(this.wordsContainer)  this.wordsContainer.destroy()
      if(this.userWordsContainer) this.userWordsContainer.destroy();
      this.menu = new WordsMenu(this.node);
      this.groupRoutHandler();
      this.header.toMenuBtn.node.disabled = true;
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

  translateHandler() {
    this.header.onTranslate = async() => {
    this.header.checkBox.checkBox.node.checked ? wordsPageState.showTranslate = true: wordsPageState.showTranslate = false;
    if(this.wordsContainer)  this.rerenderWords()
    if(this.userWordsContainer) this.rerenderUserWords();
    
    }
  }

  rerenderWords() {
    this.wordsContainer.destroy();
    this.renderWords();
  }

  rerenderUserWords() {
      this.userWordsContainer.destroy();
      this.renderUserWords();
  }
}
