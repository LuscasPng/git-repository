import React, { useState, useCallback } from "react";
import { Container, Form, SubmitButoon } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";
import api from "../../services/api";

function Main() {
  const [newRepositorie, setNewRepositorie] = useState("");
  const [repos, setRepos] = useState("");

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   const response = await api.get(`repos/${newRepositorie}`);
    
  //   console.log(response.data);

  //   const data = {
  //     name: response.data.full_name,
  //   }

  //   setRepos([...repos, data]);
  //   setNewRepositorie("");
  // }

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    async function submit() {
      const response = await api.get(`repos/${newRepositorie}`);
    
      console.log(response.data);

      const data = {
        name: response.data.full_name,
      }

      setRepos([...repos, data]);
      setNewRepositorie("");
    }

    submit();
    
  }, [newRepositorie, repos]);

  function handleInputChange(e) {
    setNewRepositorie(e.target.value);
  }

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorioes
      </h1>
      <Form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Adicionar Repositorio"
          value={newRepositorie}
          onChange={handleInputChange}
        />
        <SubmitButoon>
          <FaPlus size={14} />
        </SubmitButoon>
      </Form>
    </Container>
  );
}

export default Main;
