import styled from 'styled-components';

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 320px;
    height: 100vh;
    padding: 30px;
    background: #fff;
    -webkit-box-shadow: 9px 0px 35px 0px rgba(230,230,230,1);
    -moz-box-shadow: 9px 0px 35px 0px rgba(230,230,230,1);
    box-shadow: 9px 0px 35px 0px rgba(230,230,230,1);
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
    margin-top: 10px;
    flex-direction: column;
`;

export const ListItem = styled.li`
    display: flex;
    margin-top: 20px;

    img {
        width: 45px;
        height: 45px;
    }
    
    p {
        color: #e5e5e5;
    }
`;