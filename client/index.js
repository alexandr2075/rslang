import './style.css';
import Auth from './src/auth';

const app = document.querySelector('#app');
app.innerText = 'Learnwords';

const auth = new Auth();
auth.render();

const modal = document.getElementById('modal');
app.addEventListener('click', () => {
  modal.classList.add('open');
});

modal.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__form')) {
    modal.classList.remove('open');
  }
});
