import { Api } from "../utils/api";

const signIn = async (user) => {
  const url = `${Api.baseUrl}/${Api.endpoints.signin}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (response.status == 403) {
    throw new Error('Incorrect e-mail or password');
  }
  return response.json();
}

export {
  signIn
}
