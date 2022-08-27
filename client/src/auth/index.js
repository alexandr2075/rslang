import 'normalize.css';
import './index.css';
import createComponent from '../utils/createComponent';
import { createNewUser } from '../api/usersApi';
import signInApi from '../api/signInApi';

export default class Auth extends createComponent {
  constructor(parentNode, title) {
    super(parentNode, 'div', 'modal');
    this.title = title;
    this.renderInnerHTML();
    this.setEventListener();
  }

  renderInnerHTML() {
    this.node.innerHTML = `
		<div class='modal__wrapper'>
			<div class='modal__form'>
			  <p class='reg'>${this.title}</p>
				<form class='form' id='auth-form' onsubmit="return false;">
          <div class="email">
            <label for="email">Email</label>
            <input id="email" type="email" required>
          </div>
          <div class="password">
            <label for="password">Пароль</label>
            <input id="password" type="password" required>
          </div>
          <button type="submit" class="sign-up" data-submit>Submit</button>
          <div class='message'><div class="loader"></div></div>
				</form>
			</div>
		</div>
	  `;
	  }

  static textForUser(text) {
    const message = document.querySelector('.message');
    message.innerText = text;
  }

  static getId(email, password) {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '1';
    createNewUser({ email, password })
      .then((data) => {
        if (data) {
          loader.style.opacity = '0';
          localStorage.setItem('idAndEmail', JSON.stringify(data));
          Auth.textForUser('Вы успешно зарегистрировались.');
        }
      }, (err) => {
        Auth.textForUser(err);
      });
  }

  getToken(email, password) {
    signInApi({ email, password })
      .then((dataToken) => {
        if (dataToken) {
          localStorage.setItem('token', JSON.stringify(dataToken));
          Auth.textForUser('Успешный вход!');
          setTimeout(() => {
            this.destroy();
          }, 1500);
        }
      }, (err) => {
        Auth.textForUser(err);
      });
  }

  authFormHandler(email, password) {
    Auth.getId(email, password);
    setTimeout(() => {
      this.getToken(email, password);
    }, 2000);
  }

  setEventListener() {
    this.node.onclick = (event) => {
      const { target } = event;
      if (target.dataset.submit !== undefined) {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        if (this.title === 'Регистрация') {
          this.authFormHandler(email, password);
        }
        if (this.title === 'Войти') {
          this.getToken(email, password);
        }
      }
      if (!target.closest('.modal__form')) {
        this.destroy();
      }
    };
  }
}
