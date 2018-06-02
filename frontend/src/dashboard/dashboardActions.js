import axios from "axios";

const BASE_URL = "http://localhost:3003/api";

export function getSummary() {
  const request = axios.get(`${BASE_URL}/ciclopagamentos/sumario`);
  return {
    type: "GET_CICLO_SUMMARY",
    payload: request
  };
}
