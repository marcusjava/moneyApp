import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../common/layout/grid";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Input from "../common/form/input";

import If from "../common/operator/if";

class ItemList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("cicloPagForm", this.props.type, index, item);
    }
  }

  remove(index) {
    console.log(index);
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove("cicloPagForm", this.props.type, index);
    }
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${this.props.type}[${index}].name`}
            component={Input}
            placeholder="Informe o nome"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`${this.props.type}[${index}].value`}
            component={Input}
            placeholder="Informe o valor"
            readOnly={this.props.readOnly}
          />
        </td>
        <If test={this.props.showStatus}>
          <td>
            <Field
              name={`${this.props.type}[${index}].status`}
              component={Input}
              placeholder="Status"
              readOnly={this.props.readOnly}
            />
          </td>
        </If>
        <td>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-success"
              onClick={() => this.add(index + 1)}
            >
              <i className="fa fa-plus" />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={() => this.add(index + 1, item)}
            >
              <i className="fa fa-clone" />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => this.remove(index)}
            >
              <i className="fa fa-trash-o" />
            </button>
          </div>
        </td>
      </tr>
    ));
  }
  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.title}</legend>
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-actions">Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);