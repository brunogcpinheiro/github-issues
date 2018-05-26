import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  max-width: 320px;
  height: 100vh;
  padding: 30px;
  background: #fff;
  z-index: 99;
  -webkit-box-shadow: 5px 0px 20px 0px rgba(230, 230, 230, 1);
  -moz-box-shadow: 5px 0px 20px 0px rgba(230, 230, 230, 1);
  box-shadow: 5px 0px 20px 0px rgba(230, 230, 230, 1);
`;

export const Form = styled.form`
  margin-top: 5px;
  display: flex;
  width: 100%;

  input {
    flex: 1;
    background-color: #eee;
    padding: 0 20px;
    height: 55px;
    border: none;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background-color: #59ea9a;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
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
