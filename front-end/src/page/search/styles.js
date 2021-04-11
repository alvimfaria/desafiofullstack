import styled from "styled-components";

export const Title = styled.h4`
  text-align: center;
`;

export const Form = styled.form`
  width:80%;
  margin:auto;
  background-color: #eee;
  position: relative;
  top: -25px;
  padding: 15px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 19px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 19px -7px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 19px -7px rgba(0,0,0,0.75);
  div{
    display:flex;
    justify-content: center;
  }
  input{
    height:35px;
    width: 180px;
    margin: 0 5px;
  }
  select{
    width:180px;
    margin: 0 5px;
  }
  button{
    border:none;
    margin: 0 5px;
    background: #f36397;
    color: white;
    width: 80px;
  }
  h3{
    text-align: center
  }
  @media(max-width: 600px) {
    div {
     flex-direction: column;
    }
    input, select, button{
      width: 90%;
      height: 35px;
      margin:5px
    }
`;
export const Table = styled.table`
  width: 50%;
  background: #eeeeee38;
  border: 1px solid #eee;
  border-collapse: collapse;
  text-align:left;
  -webkit-box-shadow: 5px 5px 10px -7px rgba(0,0,0,0.55);
  -moz-box-shadow: 5px 5px 10px -7px rgba(0,0,0,0.55);
  box-shadow: 5px 5px 10px -7px rgba(0,0,0,0.55);
  padding: 25px;
  margin: 15px auto;
  td{
    border: 1px solid #eee;
    padding: 10px;
  }
  @media(max-width: 600px) {
    td{
      max-width:200px;
    }
  }
`;
