import 'normalize.css';
import './style.css';

import Auth from './src/auth';

const app = document.getElementById('app');
const auth = new Auth(app);
