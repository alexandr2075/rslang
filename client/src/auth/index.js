import './index.css';
import { createNewUser } from '../api/usersApi';
import signInApi from '../api/signInApi';

export default class Auth {
  constructor() {
    this.page = `
      <div id="modal" class="modal">
        <div class='modal__wrapper'>
          <div class="modal__form">
            <form class='form' id='auth-form'>
              <div class="username">
                  <label for="username">Name</label>
                  <input id="username" type="username" required>
              </div>
              <div class="email">
                  <label for="email">Email</label>
                  <input id="email" type="email" required>
              </div>
              <div class="password">
                  <label for="password">Password</label>
                  <input id="password" type="password" required>
              </div>
              <button type="submit" class="sign-in">Sign in</button>
              <hr>
              <button type="submit" class="sign-up">Sign up</button>
              <p class="warning"></p>
            </form>
          </div>
        </div>
      </div>
        `;
  }

  static authFormhandler(event) {
    event.preventDefault();

    const name = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    createNewUser({ name, email, password })
      .then((data) => {
        sessionStorage.setItem('dataUser', JSON.stringify(data));
        signInApi({ email, password })
          .then((token) => sessionStorage.setItem('tokenData', JSON.stringify(token)));
      });
  }

  render() {
    document.body.insertAdjacentHTML('afterbegin', this.page);
    document
      .getElementById('auth-form')
      .addEventListener('submit', Auth.authFormhandler, { once: true });
  }
}
