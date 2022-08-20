import './index.css';
import Api from '../utils/api';

export default class Auth {
  constructor() {
    this.page = `
    <div class='modal'>
      <form class='form' id='auth-form'>
          <div class="email">
              <input id="email" type="email" required>
              <label for="email">Email</label>
          </div>
          <div class="password">
              <input id="password" type="password" required>
              <label for="password">Password</label>
          </div>
          <button type="submit" class="sign-in">Sign in</button>
      </form>
    </div>
        `;
  }

  static async authWithEmailAndPassword(user) {
    try {
      const rawResponse = await fetch(`${Api.baseUrl}/${Api.endpoints.signin}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const content = await rawResponse.json();

      console.log(content);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static authFormhandler(event) {
    event.preventDefault();

    // const email = document.querySelector('#email').value;
    // const password = document.querySelector('#password').value;

    Auth.authWithEmailAndPassword({ email: 'u@mail.ru', password: 'iroeoeoeooo' });
  }

  render() {
    const app = document.querySelector('#app');
    app.insertAdjacentHTML('beforeend', this.page);
    document
      .getElementById('auth-form')
      .addEventListener('submit', Auth.authFormhandler, { once: true });
  }
}
