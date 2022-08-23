import { Api } from "../utils/api";
const getWords = async (page = 0, group = 0) => {
  const url = `${Api.baseUrl}/${Api.endpoints.words}?${Api.queries.words.page}=${page}&${Api.queries.words.group}=${group}`;
  return (await fetch(url)).json();
};

const getWordById = async (wordId) => {
  const url = `${Api.baseUrl}/${Api.endpoints.words}/${wordId}`;
  return (await fetch(url)).json();
};

export {
  getWords,
  getWordById,
};

