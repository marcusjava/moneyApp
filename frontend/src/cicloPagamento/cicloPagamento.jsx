import React, { Component } from "react";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabsContent from "../common/tab/tabsContent";
import TabContent from "../common/tab/tabContent";
import CicloPagList from "./cicloPagList";
import CicloPagForm from "./cicloPagForm";
import { create, init, update, excluir } from "./cicloPagActions";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectTab, showTabs } from "../common/tab/tabActions";

class CicloPagamento extends Component {
  componentWillMount() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos Pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader target="tabList" icon="bars" label="Listar" />
              <TabHeader target="tabCreate" icon="plus" label="Incluir" />
              <TabHeader target="tabUpdate" icon="pencil" label="Alterar" />
              <TabHeader target="tabDelete" icon="trash-o" label="Excluir" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <CicloPagList />
              </TabContent>
              <TabContent id="tabCreate">
                <CicloPagForm
                  onSubmit={this.props.create}
                  btnClass="primary"
                  btnLabel="Salvar"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <CicloPagForm
                  onSubmit={this.props.update}
                  btnClass="info"
                  btnLabel="Atualizar"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <CicloPagForm
                  onSubmit={this.props.excluir}
                  readOnly
                  btnClass="danger"
                  btnLabel="Excluir"
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { selectTab, showTabs, create, init, update, excluir },
    dispatch
  );
export default connect(null, mapDispatchToProps)(CicloPagamento);
