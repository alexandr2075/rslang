import 'normalize.css';
import './style.css';
import Auth from './src/auth';

const app = document.getElementById('app');
const entry = document.createElement('button');
entry.innerText = 'Entry';
app.append(entry);
const login = document.createElement('button');
login.innerText = 'Login';
app.append(login);

entry.onclick = () => { const auth = new Auth(document.body, 'Регистрация'); };
login.onclick = () => { const auth = new Auth(document.body, 'Войти'); };
