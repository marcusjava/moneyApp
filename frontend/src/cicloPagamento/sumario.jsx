import React, { Component } from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

class Sumario extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid cols="12">
        <fieldset>
          <legend>Resumo</legend>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              value={`R$ ${this.props.creditos}`}
              text="Total de Credito"
              icon="bank"
            />
            <ValueBox
              cols="12 4"
              color="red"
              value={`R$ ${this.props.debitos}`}
              text="Total de Debito"
              icon="credit-card"
            />
            <ValueBox
              cols="12 4"
              color="primary"
              value={`R$ ${this.props.creditos - this.props.debitos}`}
              text="Valor consolidado"
              icon="money"
            />
          </Row>
        </fieldset>
      </Grid>
    );
  }
}

export default Sumario;
