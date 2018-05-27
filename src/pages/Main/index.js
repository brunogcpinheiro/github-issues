import React, { Component } from 'react';

import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import Panel from '../../components/Panel';

import { Container, Menu, Form } from './style';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    currentRepository: {},
    issues: [],
  };

  handleRepositories = async (e) => {
    e.preventDefault();

    const { data } = await api.get(`repos/${this.state.repositoryInput}`);

    this.setState({
      repositoryInput: '',
      repositories: [...this.state.repositories, data],
    });
  };

  handleIssues = async (url, e) => {
    const { data: allIssues } = await api.get(`repos/${url} `);

    this.setState({
      issues: allIssues,
    });
  };

  handleSetCurrentRepo = async (repo, e) => {
    e.preventDefault();

    await this.setState({
      currentRepository: repo,
    });

    this.handleIssues(`${repo.login}/${repo.name}/issues?state=all`, e);
  };

  render() {
    return (
      <Container>
        <Menu>
          <Form onSubmit={this.handleRepositories}>
            <input
              type="text"
              placeholder="Novo repositório"
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              <i className="fas fa-plus" />
            </button>
          </Form>
          <Sidebar
            repositories={this.state.repositories}
            setCurrentRepository={this.handleSetCurrentRepo}
          />
        </Menu>
        <Panel current={this.state.currentRepository} issuesInfo={this.state.issues} />
      </Container>
    );
  }
}
