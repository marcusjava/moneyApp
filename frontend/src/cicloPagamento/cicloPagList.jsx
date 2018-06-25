import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "./cicloPagActions";

class CicloPagList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getList();
  }
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listaPag.map(item => (
              <tr key={item._id}>
                <td>{item.nome}</td>
                <td>{item.mes}</td>
                <td>{item.ano}</td>
                <td>
                  <div className="btn-group " role="group" aria-label="...">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => this.props.showUpdate(item)}
                    >
                      <i className="fa fa-pencil" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.props.showDelete(item)}
                    >
                      <i className="fa fa-trash-o" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ listaPag: state.cicloPagamento.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CicloPagList);
