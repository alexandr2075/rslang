import  Api  from "../utils/api";

const getAllUserWords = async (userId, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.words}`;
  const response = await fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  if (response.status === 401) {
    throw new Error('Access token is missing or invalid');
  }
  return await response.json();
};

const createUserWord = async (userId, wordId, word, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.words}/${wordId}`
  const response = await fetch(url, {
    method: 'POST',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  if (response.status === 400) {
    throw new Error('Bad request');
  }
  if (response.status === 401) {
    throw new Error('Access token is missing or invalid');
  }
  if (response.status === 417) {
    throw new Error('word already exist');
  }
  return await response.json();
};

const getUserWordById = async (userId, wordId, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.words}/${wordId}`
  const response = await fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  if (response.status === 401) {
    throw new Error('Access token is missing or invalid');
  }
  if (response.status === 404) {
    throw new Error("User's word not found");
  }
  return await response.json();
};

const updateUserWordById = async (userId, wordId, word, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.words}/${wordId}`
  const response = await fetch(url, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  if (response.status === 400) {
    throw new Error('Bad request');
  } if (response.status === 401) {
    throw new Error('Access token is missing or invalid');
  }
 
  return await response.json();
};

const deleteUserWord = async (userId, wordId, token) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.words}/${wordId}`
  const response = await fetch(url, {
    method: 'DELETE',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 401) {
    throw new Error('Access token is missing or invalid');
  }
  return await response.json();
};

export {
getAllUserWords,
createUserWord,
getUserWordById,
updateUserWordById,
deleteUserWord,
}