import 'normalize.css';
import './index.css';
import createComponent from '../utils/createComponent';
import { createNewUser } from '../api/usersApi';
import signInApi from '../api/signInApi';

export default class Auth extends createComponent {
  constructor(parentNode) {
    super(parentNode, 'div', 'modal');
    this.renderInnerHTML();
    Auth.setEventListener();
  }

  renderInnerHTML() {
    this.node.innerHTML = `
		<div class='modal__wrapper'>
			<div class='modal__form'>
			<span class='reg' data-reg>Регистрация</span><span class='auth' data-auth>Авторизация</span>
				<form class='form' id='auth-form'>
				<div class="email">
					<label for="email">Email</label>
					<input id="email" type="email" required>
				</div>
				<div class="password">
					<label for="password">Пароль</label>
					<input id="password" type="password" required>
				</div>
				<button type="submit" class="sign-up" data-submit>Submit</button>
				<p class='message'></p>
				</form>
			</div>
		</div>
	  `;
	  }

  static setEventListener() {
    const submit = document.querySelector('.sign-up');
    submit.addEventListener('click', Auth.authFormHandler);
  }

  static authFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    createNewUser({ email, password })
      .then((data) => localStorage.setItem('idAndEmail', JSON.stringify(data)));
    signInApi({ email, password })
      .then((dataToken) => localStorage.setItem('token', JSON.stringify(dataToken)));

    const message = document.querySelector('.message');
    message.innerText = 'Вы успешно зарегистрировались.';
  }
}
