import React, { Component } from "react";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";
import axios from "axios";

class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: {
        credito: 0,
        debito: 0
      }
    };
    this.BASE_URL = "http://localhost:3003/api";
  }

  componentWillMount() {
    axios.get(`${this.BASE_URL}/ciclopagamentos/sumario`).then(response => {
      this.setState({
        summary: {
          credito: response.data.credito,
          debito: response.data.debito
        }
      });
    });
  }
  render() {
    const { credito, debito } = this.state.summary;
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              value={`R$ ${credito}`}
              text="Credito"
              icon="bank"
            />
            <ValueBox
              cols="12 4"
              color="red"
              value={`R$ ${debito}`}
              text="Debito"
              icon="credit-card"
            />
            <ValueBox
              cols="12 4"
              color="secondary"
              value={`R$ ${credito - debito}`}
              text="Valor consolidado"
              icon="money"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard2;
