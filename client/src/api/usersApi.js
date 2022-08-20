import { Api } from "../utils/api";

const createNewUser = async (user) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (response.status === 417) {
    throw new Error('user already exist');
  }
  if (response.status === 422) {
    throw new Error('Incorrect e-mail or password');
  }
  return response.json();
}

const getUser = async (id, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 422) {
    throw new Error('Incorrect e-mail or password');
  }
  return await response.json();
}

const updateUser = async (id, body, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${id}`;
  let content = false;
  const response = await fetch(url, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (response.status === 400) {
    throw new Error('Bad request')
  }
  if (response.status === 401) {
    throw new Error('Access token is missing or invalid')
  }
  if (response.status === 200) content = await response.json();
  return content;
}

const deleteUser = async (id, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 204) {
    throw new Error('The user has been deleted');
  }
  else if (response.status === 401) {
    throw new Error('Access token is missing or invalid');
  }
  return response.json();
}

const getNewUserTokens = async (userId, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.tokens}`
  const response = await fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  if(response.status === 403) {
    throw new Error('Access token is missing, expired or invalid')
  }
  return await response.json();
};



  export {
    createNewUser,
    getUser,
    updateUser,
    deleteUser,
    getNewUserTokens,
  }