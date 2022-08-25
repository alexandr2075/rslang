// import './index.css';
// import { createNewUser } from '../api/usersApi';
// import signInApi from '../api/signInApi';

// export default class Auth {
//   constructor() {
//     this.page = `
//     <div id='modal' class='modal'>
//       <div class='modal__wrapper'>
//         <div class='modal__form'>
//         <span class='reg checked'>Регистрация</span><span class='auth'>Авторизация</span>
//           <form class='form' id='auth-form'>
//             <div class="email">
//                 <label for="email">Email</label>
//                 <input id="email" type="email" required>
//             </div>
//             <div class="password">
//                 <label for="password">Пароль</label>
//                 <input id="password" type="password" required>
//             </div>
//             <button type="submit" class="sign-up">Submit</button>
//             <p class='message'></p>
//           </form>
//           </div>
//       </div>
//     </div>
//         `;
//     this.auth = document.querySelector('.auth');
//     this.reg = document.querySelector('.reg');
//     this.tokenUser = null;
//   }

//   static async authFormhandler(event) {
//     event.preventDefault();
//     const message = document.querySelector('.message');
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     if (this.reg.className === 'checked') {
//       const idAndEmail = await createNewUser({ email, password });
//       localStorage.setItem('idAndEmail', JSON.stringify(idAndEmail));
//       this.tokenUser = await signInApi({ email, password });
//       localStorage.setItem('token', JSON.stringify(this.tokenUser));
//       message.innerText = 'Вы успешно зарегистрировались';
//     }
//     if (this.auth.className === 'checked') {
//       this.tokenUser = await signInApi({ email, password });
//       localStorage.setItem('token', JSON.stringify(this.tokenUser));
//     }
//   }

//   render() {
//     const app = document.querySelector('#app');
//     app.insertAdjacentHTML('beforeend', this.page);
//     Auth.setEventListener();
//   }

//   static setEventListener() {
//     // this.auth = document.querySelector('.auth');
//     // this.reg = document.querySelector('.reg');
//     const authForm = document.getElementById('auth-form');
//     const entry = document.querySelector('.button_bordered');
//     const modal = document.getElementById('modal');
//     entry.addEventListener('click', (event) => {
//       event.preventDefault();
//       modal.classList.add('open');
//     });
//     modal.addEventListener('click', (e) => {
//       if (!e.target.closest('.modal__form')) {
//         modal.classList.remove('open');
//       }
//     });
//     authForm.addEventListener('submit', Auth.authFormhandler, { once: true });
//     this.auth.addEventListener('click', () => {
//       this.auth.classList.add('checked');
//       this.reg.classList.remove('checked');
//     });
//     this.reg.addEventListener('click', () => {
//       this.reg.classList.add('checked');
//       this.auth.classList.remove('checked');
//     });
//   }
// }
