import styled from 'styled-components';

export const ContainerPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background: #fff;
  padding: 0 35px;
  align-items: center;
  -webkit-box-shadow: 0px 5px 20px 0px rgba(230, 230, 230, 1);
  -moz-box-shadow: 0px 5px 20px 0px rgba(230, 230, 230, 1);
  box-shadow: 0px 5px 20px 0px rgba(230, 230, 230, 1);

  select {
    height: 42px;
    border: 1px solid #ddd;
    padding: 0 35px;
    color: #999;
    border-radius: 5px;
  }
`;

export const ListItem = styled.li`
  display: flex;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
    margin-top: 20px;

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

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Issue = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: calc(100% / 4 - 40px);
  background: #fff;
  padding: 10px;
  margin: 20px;
  -webkit-box-shadow: 0px 5px 20px 0px rgba(230, 230, 230, 1);
  -moz-box-shadow: 0px 5px 20px 0px rgba(230, 230, 230, 1);
  box-shadow: 0px 5px 20px 0px rgba(230, 230, 230, 1);

  img {
    max-width: 54px;
    height: 54px;
    border-radius: 50%;
    margin-left: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  p:first-child {
    font-size: 0.9em;
    font-weight: bold;
    margin: 5px 0 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 250px;
  }

  p:nth-child(2) {
    font-size: 0.8em;
    color: #999;
    margin: 5px 0 0 5px;
  }

  a {
    border: none;
    padding: 5px 20px;
    background-color: #b286d1;
    margin: 5px 0 0 5px;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    text-decoration: none;
  }
`;
