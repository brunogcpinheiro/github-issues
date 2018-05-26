import React from 'react';

import { List, ListItem } from './style';

const Sidebar = props => (
  <List>
    {props.repositories.map(repo => (
      <ListItem
        key={repo.id}
        onClick={e =>
          props.setCurrentRepository(
            {
              id: repo.id,
              avatar: repo.owner.avatar_url,
              name: repo.name,
              login: repo.owner.login,
            },
            e,
          )
        }
      >
        <div>
          <img src={repo.owner.avatar_url} alt={repo.owner.login} />
          <div>
            <h4>{repo.name}</h4>
            <p>{repo.owner.login}</p>
          </div>
          <span>
            <i className="fa fa-chevron-right" />
          </span>
        </div>
      </ListItem>
    ))}
  </List>
);

export default Sidebar;
