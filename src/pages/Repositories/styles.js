import { Link } from "react-router-dom";
import styled from "styled-components";

export const Head = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #1a1a1a;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 60px;
  width: 100%;
  margin: 0;
  flex-direction: row;

  h1 {
    margin-left: 20px;
    font-size: 25px;
    color: #bdbdbd;
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
    
  }

  :link {
    text-decoration: none;
    font-size: 14px;
    border-radius: 4px;
    width: 60px;
    height: 30px;
    background-color: #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #bdbdbd;
    font-weight: bold;
    margin-left: 15px
  }

  a {
    color: #bdbdbd;
  }

  a:hover {
    color: #1a1a1a;
    transition: 0.2s;
  }
`;


export const Loading = styled.div`
  justify-content: center;
  align-items: center;
  color: #bdbdbd;
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #1a1a1a;
  border-radius: 4px;
  margin: 80px auto;
  max-width: 700px;
  color: #bdbdbd;
  padding: 30px;

  h1 {
    font-size: 30px;
  }

  p {
    /* text-align: center; */
    line-height: 1.4;
    max-width: 400px;
    margin-top: 5px;
    font-size: 14px;
  }
`;

export const Owner = styled.header`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  img {
    border-radius: 15%;
    margin: 20px 0;
    width: 150px;
  }
`;

export const BackButton = styled(Link)`
  background: transparent;
  outline: 0;
  border: 0;
`;

export const IssuesList = styled.ul`
  border-top: 1px solid #2a2a2a;
  padding-top: 30px;
  margin-top: 30px;
  list-style: none;

  li {
    padding: 15px 0;
    display: flex;
    
    & + li {
      margin-top: 15px;
    }

    img {
      border: 2px solid #2a2a2a;
      border-radius: 50%;
      height: 46px;
      width: 46px;
    }

    div {
      margin-left: 12px;
      flex: 1;

      p {
        margin-top: 10px;
        font-size: 14px;
      }
    }

    strong {
      flex-direction: column;
      font-size: 16px;
      display: flex;
      
      a {
        text-decoration: none;
        color: #bdbdbd;
      }

      a:hover {
        transition: 0.2s;
        color: #2a2a2a;
      }
      div {
        flex-wrap: nowrap;
        display: flex;
        margin: 0;
      }

      span {
        background-color: #bdbdbd;
        border-radius: 4px;
        width: max-content;
        font-weight: 600;
        padding: 4px 7px;
        margin-top: 6px;
        font-size: 14px;
        color: #2a2a2a;

        & + span {
          margin-left: 6px;
        }
      }
    }
  }
`;

export const PageActions = styled.div`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  display: flex;

  button {
    border-radius: 4px;
    padding: 5px 7px;
    color: #2a2a2a;
    outline: 0;
    border: 0;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;