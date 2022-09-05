import Auth from "../auth/auth";
import { getNewUserTokens } from "./usersApi";

export function saveToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
  const expiresOn = Date.now() + (4.5 * 60 * 60 * 1000);
  localStorage.setItem('tokenExpires', expiresOn)
}

export async function fetchWithToken(url, options) {
  let token = null;
  if(localStorage.token) {
    token = JSON.parse(localStorage.token);
  } else {
    new Auth(document.body, 'Регистрация')
  }
  
  if(!options.headers) {
    options.headers = {};
  }

  if(token) {
    let expiresOn = JSON.parse(localStorage.tokenExpires);

    if(Date.now() >= expiresOn) {
     try {
      const user = JSON.parse(localStorage.idAndEmail);
      const newToken = await getNewUserTokens(user.id, token.refreshToken);
      saveToken(newToken);
      } 
      catch(e) {
       new Auth(document.body, 'Войти')
      }
    }
    options.headers.Authorization = `Bearer ${token.token}`
  }
  return await fetch(url, options);
}


