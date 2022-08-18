import { Api } from "../utils/api";
export default class WordsApi {
   async getWords(){
    try {
      const response = await fetch(`${Api.baseUrl}/${Api.endpoints.words}?${Api.queries.words.page}=2&${Api.queries.words.group}=0`);
      return {
        data: await response.json(),
      };
    }
    catch(error) {
      throw new Error(error.message);
     }
  
 }

}