import React from 'react';

import { 
    Container, 
    Sidebar, 
    Form, 
    List, 
    ListItem,
    Panel,
    Header,
    Content } from './style';

const Main = () => (
    <Container>
        <Sidebar>
            <Form>
                <input type="text" placeholder="Novo repositório" />
                <button type="submit">OK</button>
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
                    <img src="https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png" alt="" />
                    <div>
                        <h4>vue</h4>
                        <p>VueJs</p>
                    </div>
                </ListItem>
                <select name="issues">
                  <option value="todas">Todas</option>
                  <option value="abertas">Abertas</option>
                  <option value="fechadas">Fechadas</option>
                </select>
            </Header>
            <Content>
            
            </Content>
        </Panel>
    </Container>
);

export default Main;