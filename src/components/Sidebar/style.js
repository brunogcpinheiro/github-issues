import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  border-top: 1px solid #ddd;
  height: 100vh;
`;

export const ListItem = styled.li`
  display: flex;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
    margin-top: 20px;
    cursor: pointer;

    &:active,
    &:visited,
    &:link {
      color: #000;
    }
  }

  div {
    flex: 1;
  }

  img {
    width: 45px;
    height: 45px;
  }

  h4,
  p {
    margin-left: 10px;
  }

  p {
    color: #999;
  }

  span {
    color: #999;
  }
`;
