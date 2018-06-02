import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api/ciclopagamentos";
const INITIAL_VALUES = { creditos: [{}] };

export function getList() {
  const response = axios.get(`${BASE_URL}`);
  return {
    type: "GET_CICLO_PAGAMENTOS",
    payload: response
  };
}

export function create(data) {
  return dispatch => {
    axios
      .post(`${BASE_URL}`, data)
      .then(response => {
        toastr.success("Sucesso", "Salvo com sucesso");
        // redux multi
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(erro => toastr.error("Erro", erro));
      });
  };
}

export function showUpdate(cicloPagamento) {
  return [
    selectTab("tabUpdate"),
    showTabs("tabUpdate"),
    initialize("cicloPagForm", cicloPagamento)
  ];
}

export function showDelete(cicloPagamento) {
  return [
    selectTab("tabDelete"),
    showTabs("tabDelete"),
    initialize("cicloPagForm", cicloPagamento)
  ];
}

export function update(data) {
  return dispatch => {
    axios
      .put(`${BASE_URL}/${data._id}`, data)
      .then(response => {
        toastr.success("Sucesso", "Atualizado com sucesso");
        // redux multi
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(erro => toastr.error("Erro", erro));
      });
  };
}

export function excluir(data) {
  return dispatch => {
    axios
      .delete(`${BASE_URL}/${data._id}`)
      .then(response => {
        toastr.success("Sucesso", "Excluido com sucesso");
        // redux multi
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(erro => toastr.error("Erro", erro));
      });
  };
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("cicloPagForm", INITIAL_VALUES)
  ];
}
