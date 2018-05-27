import React from 'react';

import { ContainerPanel, Header, ListItem, Content, Issue } from './style';

const Panel = props => (
  <ContainerPanel>
    <Header>
      <ListItem>
        {props.current.name ? (
          <img src={props.current.avatar} alt="Avatar" />
        ) : (
          <strong>Nenhum repositório selecionado</strong>
        )}
        <div>
          <h4>{props.current.name}</h4>
          <p>{props.current.login}</p>
        </div>
      </ListItem>
      <select
        id="filter-status"
        defaultValue={`${props.current.login}/${props.current.name}/issues?state=all`}
        onChange={e => props.changeStatusIssues(document.getElementById('filter-status').value, e)}
      >
        <option value={`${props.current.login}/${props.current.name}/issues?state=all`}>
          Todas
        </option>
        <option value={`${props.current.login}/${props.current.name}/issues?state=open`}>
          Abertas
        </option>
        <option value={`${props.current.login}/${props.current.name}/issues?state=closed`}>
          Fechadas
        </option>
      </select>
    </Header>
    <Content>
      {props.issuesInfo.map(issue => (
        <Issue key={issue.id}>
          <img src={issue.user.avatar_url} alt={issue.user.login} />
          <div>
            <p>{issue.title}</p>
            <p>{issue.user.login}</p>
            <a href={issue.html_url} target="blank">
              <i className="fas fa-external-link-alt" />Abrir Issue
            </a>
          </div>
        </Issue>
      ))}
    </Content>
  </ContainerPanel>
);

export default Panel;
