import Header from './src/components/Pages/MainPage/header';
import MainPage from './src/components/Pages/MainPage/MainPage';
import Footer from './src/components/Pages/MainPage/footer';
import GamePage from './src/components/Pages/GamePage/GamePage';
import GameLinks from './src/components/Pages/MainPage/linksGames';
import Auth from './src/auth/index';

const header = new Header(document.body);
const page = new MainPage(document.body);
const footer = new Footer(document.body);
const gamePage = new GamePage(document.body);
const gameLinks = new GameLinks(document.body);

const reg = document.querySelector('.button-registr');
const entry = document.querySelector('.button-entry');
reg.onclick = () => { const auth = new Auth(document.body, 'Регистрация'); };
entry.onclick = () => { const auth = new Auth(document.body, 'Войти'); };
