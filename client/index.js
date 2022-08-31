import Header from './src/components/Pages/MainPage/header';
import MainPage from './src/components/Pages/MainPage/MainPage';
import Footer from './src/components/Pages/MainPage/footer';
import GamePage from './src/components/Pages/GamePage/GamePage';
import GameLinks from './src/components/Pages/MainPage/linksGames';
import Auth from './src/auth/auth';

const header = new Header(document.body);
const page = new MainPage(document.body);
const footer = new Footer(document.body);
const gamePage = new GamePage(document.body);
const gameLinks = new GameLinks(document.body);

const reg = document.querySelector('.button-registr');
const entry = document.querySelector('.button-entry');
const exit = document.querySelector('.button-exit');
reg.onclick = () => { const auth = new Auth(document.body, 'Регистрация'); };
entry.onclick = () => { const auth = new Auth(document.body, 'Войти'); };
exit.onclick = () => {
  entry.style.display = 'block';
  reg.style.display = 'block';
  exit.style.display = 'none';
  localStorage.clear();
};
