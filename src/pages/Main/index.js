import React from 'react';

import { 
    Container, 
    Sidebar, 
    Form, 
    List, 
    ListItem,
    Panel,
    Header,
    Content,
    Issue } from './style';

const Main = () => (
    <Container>
        <Sidebar>
            <Form>
                <input type="text" placeholder="Novo repositório" />
                <button type="submit"><i className="fas fa-plus"></i></button>
            </Form>
            <List>
                <ListItem>
                    <a href="">
                        <img src="http://formatjs.io/img/react.svg" alt="" />
                        <div>
                            <h4>react</h4>
                            <p>Facebook</p>
                        </div>
                        <span>></span>
                    </a>
                </ListItem>
                <ListItem>
                    <a href="">
                        <img src="https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png" alt="" />
                        <div>
                            <h4>vue</h4>
                            <p>VueJs</p>
                        </div>
                        <span>></span>
                    </a>
                </ListItem>
            </List>
        </Sidebar>
        <Panel>
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
                    <img src="https://avatars1.githubusercontent.com/u/13948019?v=4" alt="Avatar"/>
                    <div>
                        <p>Lorem ipsum dolor</p>
                        <p>brunogcpinheiro</p>
                        <button type="submit"><i className="fas fa-external-link-alt"></i>Abrir Issue</button>
                    </div>
                </Issue>
                <Issue>
                    <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Avatar"/>
                    <div>
                        <p>Lorem ipsum dolor</p>
                        <p>rocketseat</p>
                        <button type="submit"><i className="fas fa-external-link-alt"></i>Abrir Issue</button>
                    </div>
                </Issue>
                <Issue>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Avatar"/>
                    <div>
                        <p>Lorem ipsum dolor</p>
                        <p>diego3g</p>
                        <button type="submit"><i className="fas fa-external-link-alt"></i>Abrir Issue</button>
                    </div>
                </Issue>
                <Issue>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Avatar"/>
                    <div>
                        <p>Lorem ipsum dolor</p>
                        <p>diego3g</p>
                        <button type="submit"><i className="fas fa-external-link-alt"></i>Abrir Issue</button>
                    </div>
                </Issue>
            </Content>
        </Panel>
    </Container>
);

export default Main;