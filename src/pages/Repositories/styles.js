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
    text-align: center;
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