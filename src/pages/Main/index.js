import { Container, Form, SubmitButoon } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";

function Main() {
  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorioes
      </h1>
      <Form>
        <input type="text" placeholder="Adicionar Repositorio"/>
        <SubmitButoon>
          <FaPlus size={14} />
        </SubmitButoon>
      </Form>
    </Container>
  );
}

export default Main;
