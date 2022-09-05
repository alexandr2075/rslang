import { deleteUserWord, getAllUserWords, updateUserWordById } from "../../../api/userWordsApi";
import createComponent from "../../../utils/createComponent";
import Statistics from "../../statistics/statistics";
import UserWord from "../userWord/userWord";


export default class UserWords extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'words', '');
    this.user = JSON.parse(localStorage.getItem('idAndEmail'));
    this.learned = new Set(JSON.parse(localStorage.getItem('learned'))) || [];
    this.wordsRender();
  }

  async wordsRender() {
    const data = await getAllUserWords(this.user.id).then(res => res.json())
    this.userWordsContainer = new createComponent(this.node, 'div', 'user-words__container')
    if (data && data.length) {
      const newData = data.filter(item => item.difficulty === 'hard');
      newData.forEach(item => {
        this.word = new UserWord(this.userWordsContainer.node, item.optional.wordData, item.id);

        const btn = this.word.wordBtnBlock.node.childNodes[0].firstChild;
        btn.classList.add('active');
        btn.style.color = '#ffffff';
        if ([...this.learned].length) {
          [...this.learned].forEach(id => {
            if (id === this.word.id) {
              const learnedBtn = this.word.wordBtnBlock.node.childNodes[1].firstChild;
              learnedBtn.classList.add('active');
              learnedBtn.style.color = '#ffffff';;
            }
          })
        }
        this.userBtnsHandler(item);
      })
    }
  }

  async userBtnsHandler(wordData) {
    this.id = wordData.id;
    this.wordId = wordData.wordId;
    const word = {
      difficulty: "easy",
    }
    this.word.wordBtnBlock.onDifficult = async () => {
      await updateUserWordById(this.user.id, this.wordId, word);
      this.rerenderWords();
    }
    this.word.wordBtnBlock.onStatistics = async () => {
      this.userWordsContainer.destroy();
      this.statistic = new Statistics(this.node);
    }
    this.word.wordBtnBlock.onLearned = async () => {
      this.id = wordData.id;
      this.learned.has(this.id) ? this.learned.delete(this.id) : this.learned.add(this.id);
      localStorage.setItem('learned', JSON.stringify([...this.learned]));
      this.rerenderWords();
    }

  }



  rerenderWords() {
    this.userWordsContainer.destroy();
    this.wordsRender();
  }
}
