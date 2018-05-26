import React from 'react';

import { ContainerPanel, Header, ListItem, Content, Issue } from './style';

const Panel = () => (
  <ContainerPanel>
    <Header>
      <ListItem>
        <img src="http://formatjs.io/img/react.svg" alt="" />
        <div>
          <h4>react</h4>
          <p>Facebook</p>
        </div>
      </ListItem>
      <select name="issues">
        <option value="todas">Todas</option>
        <option value="abertas">Abertas</option>
        <option value="fechadas">Fechadas</option>
      </select>
    </Header>
    <Content>
      <Issue>
        <img src="https://avatars1.githubusercontent.com/u/13948019?v=4" alt="Avatar" />
        <div>
          <p>Lorem ipsum dolor...</p>
          <p>brunogcpinheiro</p>
          <button type="submit">
            <i className="fas fa-external-link-alt" />Abrir Issue
          </button>
        </div>
      </Issue>
    </Content>
  </ContainerPanel>
);

export default Panel;
