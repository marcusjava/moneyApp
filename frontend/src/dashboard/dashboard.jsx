import React, { Component } from "react";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSummary } from "./dashboardActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getSummary();
  }
  render() {
    const { credito, debito } = this.props.summary;
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
              color="primary"
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

const mapStateToProps = state => ({ summary: state.dashboard.summary });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
