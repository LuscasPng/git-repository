import styled from "styled-components";
import { Link } from "react-router-dom";

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
  padding: 30px;
  color: #bdbdbd;

  h1 {
    font-size: 30px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    /* text-align: center; */
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    border-radius: 15%;
    margin: 20px 0;
  }
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #2a2a2a;
  list-style: none;

  li {
    display: flex;
    padding: 15px 0;
    
    & + li {
      margin-top: 15px;
    }

    img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: 2px solid #2a2a2a;
    }

    div {
      flex: 1;
      margin-left: 12px;

      p {
        margin-top: 10px;
        font-size: 14px;
      }
    }

    strong {
      font-size: 16px;
      display: flex;
      flex-direction: column;
      
      a {
        text-decoration: none;
        color: #bdbdbd;
      }

      a:hover {
        color: #2a2a2a;
        transition: 0.2s;
      }
      div {
        margin: 0;
        display: flex;
        flex-wrap: nowrap;
      }

      span {
        background-color: #bdbdbd;
        color: #2a2a2a;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        padding: 4px 7px;
        margin-top: 6px;
        width: max-content;

        & + span {
          margin-left: 6px;
        }
      }
    }
  }
`;