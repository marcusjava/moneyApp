import { toastr } from "react-redux-toastr";
import axios from "axios";
import consts from "../consts";

export function login(values) {
  return submit(values, `${consts.OAPI_URL}/login`);
}

export function signup(values) {
  return submit(values, `${consts.OAPI_URL}/signup`);
}

function submit(values, url) {
  console.log(values, url);
  return dispatch => {
    axios
      .post(url, values)
      .then(resp => {
        dispatch([{ type: "USER_FETCHED", payload: resp.data }]);
      })
      .catch(error => {
        error.response.data.errors.forEach(erro =>
          toastr.error("Ocorreu um erro", erro)
        );
      });
  };
}

export function logout() {
  return { type: "TOKEN_VALIDATED", payload: false };
}

export const validateToken = token => dispatch => {
  if (token) {
    axios
      .post(`${consts.OAPI_URL}/validateToken`, { token })
      .then(resp => {
        dispatch({ type: "TOKEN_VALIDATED", payload: resp.data.valid });
      })
      .catch(e => dispatch({ type: "TOKEN_VALIDATED", payload: false }));
  } else {
    dispatch({ type: "TOKEN_VALIDATED", payload: false });
  }
};
