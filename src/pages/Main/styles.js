import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #1a1a1a;
  border-radius: 4px;
  margin: 80px auto;
  max-width: 700px;
  padding: 30px;

  h1 {
    align-items: center;
    flex-direction: row;
    font-size: 20px;
    color: #bdbdbd;
    display: flex;

    svg {
      margin-right: 10px;
      color: #bdbdbd;
    }
  }
`;

export const Form = styled.form`
  flex-direction: row;
  margin-top: 30px;
  display: flex;

  input {
    border: 1px solid #1f1f1f;
    background-color: #2a2a2a;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
    color: #bdbdbd;
    flex: 1;
  }
`;

export const SubmitButoon = styled.button`
  background-color: #2a2a2a;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  border: 0;

  svg {
    color: #bdbdbd;
  }
`;