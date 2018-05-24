import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Sidebar = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    max-width: 320px;
    height: 100vh;
    padding: 30px;
    background: #fff;
    z-index: 99;
    -webkit-box-shadow: 5px 0px 20px 0px rgba(230,230,230,1);
    -moz-box-shadow: 5px 0px 20px 0px rgba(230,230,230,1);
    box-shadow: 5px 0px 20px 0px rgba(230,230,230,1);
`;

export const Form = styled.form`
    margin-top: 5px;
    display: flex;
    width: 100%;
    
    input {
        flex: 1;
        background-color: #EEE;
        padding: 0 20px;
        height: 55px;
        border: none;
        border-radius: 3px;
    }
    
    button {
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background-color: #59EA9A;
        border: none;
        border-radius: 3px;
        color: #FFF;
        cursor: pointer;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    border-top: 1px solid #ddd;
`;

export const ListItem = styled.li`
    display: flex;
    
    a {
       display: flex;
       flex-flow: row wrap;
       text-decoration: none;
       width: 100%;
       margin-top: 20px;
       
       &:active, &:visited, &:link {
           color: #000;
       }
    }

    img {
        width: 45px;
        height: 45px;
    }
    
    h4, p {
        margin-left: 10px;
    }
    
    p {
        color: #999;
    }
    
    span {
        color: #999;
    }
`;

export const Panel = styled.div`
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
    -webkit-box-shadow: 0px 5px 20px 0px rgba(230,230,230,1);
    -moz-box-shadow: 0px 5px 20px 0px rgba(230,230,230,1);
    box-shadow: 0px 5px 20px 0px rgba(230,230,230,1);
    
    select {
        height: 42px;
        border: 1px solid #ddd;
        padding: 0 35px;
        color: #999;
        border-radius: 5px;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
`;

export const Issue = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    width: 29%;
    background: #fff;
    padding: 10px;
    margin: 20px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(230,230,230,1);
    -moz-box-shadow: 0px 5px 20px 0px rgba(230,230,230,1);
    box-shadow: 0px 5px 20px 0px rgba(230,230,230,1);
    
    img {
        width: 54px;
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
    }
    
    p:nth-child(2) {
        font-size: 0.8em;
        color: #999;
        margin: 5px 0 0 5px;
    }
    
    button {
        border: none;
        padding: 5px 20px;
        background-color: #B286D1;
        margin: 5px 0 0 5px;
        color: #fff;
        cursor: pointer;
    }
`;