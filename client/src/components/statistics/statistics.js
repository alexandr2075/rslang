import './statistics.scss';
import CreateComponent from '../../utils/createComponent';
import { getStatistics } from '../../api/statisticApi';

export default class Statistics extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'statistics');
    this.list = new CreateComponent(this.node, 'ul', 'list');
    this.newWordsPerDay = new CreateComponent(this.list.node, 'li', 'new-words-per-day list-item');
    this.percentageCorrectAnswers = new CreateComponent(this.list.node, 'li', 'percentage-correct-answers list-item');
    this.longestSeriesCorrectAnswers = new CreateComponent(this.list.node, 'li', 'longest-series-correct-answers list-item');
    this.newWordsPerDay2 = new CreateComponent(this.list.node, 'li', 'new-words-per-day2  list-item');
    this.percentageCorrectAnswers2 = new CreateComponent(this.list.node, 'li', 'percentage-correct-answers2 list-item');
    this.longestSeriesCorrectAnswers2 = new CreateComponent(this.list.node, 'li', 'longest-series-correct-answers2 list-item');
    this.render();
  }

  async render() {
    const id = JSON.parse(localStorage.token).userId;
    const response = await getStatistics(id);
    const data = await response.json();
    const cumulativeObj = { ...data.optional.correct, ...data.optional.wrong };
    let counter = 0;
    const correctAnswers = Object.values(data.optional.correct).length;
    const totalNumber = Object.values(cumulativeObj).length;
    Object.values(cumulativeObj).forEach((el) => {
      if (el === 1) counter += 1;
    });
    const percentage = Math.round((correctAnswers / totalNumber) * 100);
    this.newWordsPerDay.node.innerText = `Количество новых слов за день - ${counter}`;
    this.percentageCorrectAnswers.node.innerText = `Процент правильных ответов - ${percentage}%`;
    this.longestSeriesCorrectAnswers.node.innerText = 'Cамая длинная серия правильных ответов - 6';
  }
}
