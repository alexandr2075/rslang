import  Api  from "../utils/api";
import { fetchWithToken } from "./api-helpers";

function getAllUserWords(userId) {
  return fetchWithToken(`${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.words}`, {
    method: 'GET',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}

function createUserWord(userId, wordId, word) {
  return fetchWithToken(`${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.words}/${wordId}`, {
    method: 'POST',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(word),
      });
}

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

function deleteUserWord(userId, wordId) {
  return fetchWithToken(`${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.words}/${wordId}`, {
    method: 'DELETE',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


export {
getAllUserWords,
createUserWord,
getUserWordById,
updateUserWordById,
deleteUserWord,
}