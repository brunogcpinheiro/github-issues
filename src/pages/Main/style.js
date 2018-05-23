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
    margin-top: 20px;
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
    margin-top: 20px;

    img {
        width: 45px;
        height: 45px;
    }
    
    p {
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
    
    select {
        height: 42px;
        border: 1px solid #ddd;
        padding: 0 35px;
        color: #999;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
`;