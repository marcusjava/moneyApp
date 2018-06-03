import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { init } from "./cicloPagActions";
import Grid from "../common/layout/grid";
import Input from "../common/form/labelAndInput";
import Sumario from "./sumario";

import ItemList from "./itemList";

import { reduxForm, Field, formValueSelector } from "redux-form";

class CicloPagForm extends Component {
  constructor(props) {
    super(props);
  }

  calcularSumario() {
    const sum = (t, v) => t + v;
    return {
      somaCreditos: this.props.creditos
        .map(credito => +credito.value || 0)
        .reduce(sum),
      somaDebitos: this.props.debitos
        .map(debito => +debito.value || 0)
        .reduce(sum)
    };
  }
  render() {
    const { handleSubmit, readOnly, creditos, debitos } = this.props;
    const { somaCreditos, somaDebitos } = this.calcularSumario();
    return (
      <div>
        <form role="form" onSubmit={handleSubmit}>
          <div className="box-body">
            <Field
              id="nome"
              readOnly={readOnly}
              name="nome"
              component={Input}
              label="Nome"
              cols="12 4"
              placeholder="Informe o nome"
            />
            <Field
              id="mes"
              name="mes"
              readOnly={readOnly}
              component={Input}
              label="Mês"
              type="number"
              cols="12 4"
              placeholder="Informe o mês"
            />
            <Field
              id="ano"
              name="ano"
              readOnly={readOnly}
              type="number"
              component={Input}
              label="Ano"
              cols="12 4"
              placeholder="Informe o ano"
            />
            <Sumario creditos={somaCreditos} debitos={somaDebitos} />
            <ItemList
              cols="12 6"
              readOnly={readOnly}
              list={creditos}
              type="creditos"
              title="Credito"
            />
            <ItemList
              cols="12 6"
              readOnly={readOnly}
              list={debitos}
              showStatus
              type="debitos"
              title="Debito"
            />
          </div>
          <div className="box-footer">
            <button className={`btn btn-${this.props.btnClass}`} type="submit">
              {this.props.btnLabel}
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.props.init}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CicloPagForm = reduxForm({ form: "cicloPagForm", destroyOnUnmount: false })(
  CicloPagForm
);

const selector = formValueSelector("cicloPagForm");

// acessando o state do redux-form
const mapStateToProps = state => ({
  creditos: selector(state, "creditos"),
  debitos: selector(state, "debitos")
});

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CicloPagForm);
