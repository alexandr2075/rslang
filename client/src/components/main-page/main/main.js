import './main.scss';
import CreateComponent from '../../../utils/createComponent';

export default class Main extends CreateComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'main');
    this.title = new CreateComponent(this.node, 'h1', 'main-title', 'RS LANG');
    this.appDescription = new CreateComponent(this.node, 'h2', 'app-description', ' Коллекция содержит 3600 часто употребляемых английских слов. Слова в коллекции отсортированы от более простых и известных к более сложным. Первые 400 наиболее часто употребляемых слов в коллекцию не вошли. Считается, что это базовый запас взрослого человека. Вся коллекция разбита на шесть разделов, в каждом разделе 30 страниц, на каждой странице 20 слов для изучения.');
  }
}
