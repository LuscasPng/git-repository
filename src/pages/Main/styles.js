import { keyframes, css } from "styled-components";
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
    border: 1px solid ${props => (props.error ? "#ff0000" : "#1f1f1f")};
    background-color: #2a2a2a;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
    color: #bdbdbd;
    flex: 1;
  }
`;

const animatedLoading = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading,
}))`
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

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props => props.loading && css`
    svg {
      animation: ${animatedLoading} 2s linear infinite
    }
  `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    padding: 15px 0;
    color: #bdbdbd;
    display: flex;

    & + li {
      border-top: 1px solid #2a2a2a
    }

    a {
      text-decoration: none;
      color: #bdbdbd;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: "button"
})`
  background: transparent;
  margin-left: 8px;
  color: #bdbdbd;
  outline: 0;
  border: 0;
`;

export const Icons = styled.div`
  align-items: center;
  display: flex;
`;