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
  };

  handleRepositories = async (e) => {
    e.preventDefault();

    const { data } = await api.get(`repos/${this.state.repositoryInput}`);

    this.setState({
      repositoryInput: '',
      repositories: [...this.state.repositories, data],
    });
  };

  handleSetCurrentRepo = async (repo, e) => {
    e.preventDefault();

    await this.setState({
      currentRepository: repo,
    });

    console.log(this.state.currentRepository);
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
        <Panel />
      </Container>
    );
  }
}
