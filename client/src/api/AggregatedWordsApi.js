import {
  Api
} from "../utils/api";
const getAggregatedWordsByFilter = async (
  userId, wordsPerPage, filter = '{"userWord":null}', token,
) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${Api.endpoints.aggrgateWords}?${Api.queries.wordsPerPage}=${wordsPerPage}&${Api.queries.filter}=${filter}`
  const response = await fetch(url, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    },
  );
  if (response.status === 401) {
    throw new Error('Access token is missing or invalid')
  }
  return await response.json();
};

const getAggregatedWordById = async (userId, token, wordId) => {
  const url = `${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.aggrgateWords}/${wordId}`
  const response = await fetch(url, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    },
  );

  return response.json();
};

export {
  getAggregatedWordsByFilter,
  getAggregatedWordById,
}