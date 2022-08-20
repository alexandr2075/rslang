<<<<<<< HEAD
import { Api } from "../utils/api";
const getWords = async (page = 0, group = 0) => {
  const url = `${Api.baseUrl}/${Api.endpoints.words}?${Api.queries.words.page}=${page}&${Api.queries.words.group}=${group}`
  return (await fetch(url)).json();
}

const getWordById = async (wordId) => {
  const url = `${Api.baseUrl}/${Api.endpoints.words}/${wordId}`
  return (await fetch(url)).json();
}

export  {
  getWords,
  getWordById,
=======
import Api from '../utils/api';

export default class WordsApi {
  static async getWords() {
    try {
      const response = await fetch(`${Api.baseUrl}/${Api.endpoints.words}?${Api.queries.words.page}=2&${Api.queries.words.group}=0`);
      return {
        data: await response.json(),
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
>>>>>>> d30279d (feat: add auth)
}
