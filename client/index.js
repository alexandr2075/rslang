import Header from "./src/components/Pages/MainPage/header";
import MainPage from "./src/components/Pages/MainPage/MainPage";
import Footer from "./src/components/Pages/MainPage/footer" ;
import GamePage from "./src/components/Pages/GamePage/GamePage" ;
import GameLinks from "./src/components/Pages/MainPage/linksGames"; 



const header = new Header(document.body);
const page = new MainPage(document.body);
const footer = new Footer(document.body);
const gamePage = new GamePage(document.body);
const gameLinks = new GameLinks(document.body);
