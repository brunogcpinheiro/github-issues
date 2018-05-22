import React from 'react';

import { Sidebar, Form, List, ListItem } from './style';

const Main = () => (
    <Sidebar>
        <Form>
            <input type="text" placeholder="Novo repositório" />
            <button type="submit">OK</button>
        </Form>
        <List>
            <ListItem>
                <img src="http://formatjs.io/img/react.svg" alt="" />
                <h4>react</h4>
                <p>Facebook</p>
                <span>></span>
            </ListItem>
            <ListItem>
                <img src="http://formatjs.io/img/react.svg" alt="" />
                <h4>react</h4>
                <p>Facebook</p>
                <span>></span>
            </ListItem>
        </List>
    </Sidebar>
);

export default Main;