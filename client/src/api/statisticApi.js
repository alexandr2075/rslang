import Api from "../utils/api";
import { fetchWithToken } from "./api-helpers";

function getStatistics(userId) {
  return fetchWithToken(`${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.statistics}`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

function upsertStatistics(userId, word) {
  return fetchWithToken(`${Api.baseUrl}/${Api.endpoints.users}/${userId}/${Api.endpoints.statistics}`, {
    method: 'PUT',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
}

export {
  getStatistics,
  upsertStatistics,
}