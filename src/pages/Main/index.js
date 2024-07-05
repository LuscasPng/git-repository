import React, { useState, useCallback, useEffect } from "react";
import { Container, Form, SubmitButton, List, DeleteButton, Icons } from "./styles";
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";
import api from "../../services/api";

function Main() {
  const [newRepositorie, setNewRepositorie] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  
  // Utilizando useEffect para buscar e salvar alterações localmente
  useEffect(() => {
    const reposStorage = localStorage.getItem('repos');
    if (reposStorage) {
      setRepos(JSON.parse(reposStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repos));
  }, [repos]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    async function submit() {
      setLoading(true);
      setAlert(null);

      try {
        if(newRepositorie === "") {
          throw new Error("Indique o repositorio desejado");
        }

        const response = await api.get(`repos/${newRepositorie}`);
        console.log(response.data);
        
        const hasRepo = repos.find(repo => repo.name === newRepositorie);

        if(hasRepo) {
          throw new Error("Repositorio duplicado");
        }
  
        const data = {
          name: response.data.full_name,
        }
  
        setRepos([...repos, data]);
        setNewRepositorie("");
      } catch(error) {
        setAlert(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    submit();
    
  }, [newRepositorie, repos]);

  const handleInputChange = (e) => {
    setNewRepositorie(e.target.value);
    setAlert(null);
  }

  const handleDelete = useCallback(repoName => {
    const find = repos.filter(r => r.name !== repoName);
    setRepos(find);
  }, [repos]);

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorios
      </h1>
      <Form onSubmit={handleSubmit} error={alert}>
        <input 
          type="text" 
          placeholder="Adicionar Repositorio"
          value={newRepositorie}
          onChange={handleInputChange}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (<FaSpinner color="#fff" size={14} />) : (<FaPlus size={14} />)}
        </SubmitButton>
      </Form>
      <List>
        {repos.map(repo => (
          <li key={repo.name}>
            <span>{repo.name}</span>
            <Icons>
              <a href="/"><FaBars size={20}/></a>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={18}/>
              </DeleteButton>
            </Icons>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Main;
