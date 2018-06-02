import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { init } from "./cicloPagActions";
import Grid from "../common/layout/grid";
import Input from "../common/form/labelAndInput";

import ListaCredito from "./listaCredito";

import { reduxForm, Field, formValueSelector } from "redux-form";

class CicloPagForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, readOnly, creditos } = this.props;
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
            <ListaCredito cols="12 6" readOnly={readOnly} creditos={creditos} />
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
const mapStateToProps = state => ({ creditos: selector(state, "creditos") });

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CicloPagForm);
