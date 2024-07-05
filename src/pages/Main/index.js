import React, { useState, useCallback, useEffect } from "react";
import { Container, Form, SubmitButton, List, DeleteButton, Icons, Head } from "./styles";
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";
import api from "../../services/api";
import { Link } from "react-router-dom";

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
        if (newRepositorie === "") {
          throw new Error("Indique o repositório desejado");
        }

        const response = await api.get(`repos/${newRepositorie}`);
        console.log(response.data);

        const hasRepo = repos.find(repo => repo.name.toLowerCase() === newRepositorie.toLowerCase());

        if (hasRepo) {
          throw new Error("Repositório duplicado");
        }

        const data = {
          name: response.data.full_name,
        }

        setRepos([...repos, data]);
        setNewRepositorie("");
      } catch (error) {
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
    <>
      <Head>
        <h1>Git Repository</h1>
        <div>
          <Link to={`/`}>Home</Link>
          <Link to={`/sobre`}>Sobre</Link>
        </div>
      </Head>
      <Container>
        <h1>
          <FaGithub size={25} />
          Meus Repositórios
        </h1>
        <Form onSubmit={handleSubmit} error={alert}>
          <input 
            type="text" 
            placeholder="Adicionar Repositório"
            value={newRepositorie}
            onChange={handleInputChange}
          />
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (<FaSpinner color="#fff" size={14} />) : (<FaPlus size={14} />)}
          </SubmitButton>
        </Form>
      </Container>
      {repos.length > 0 ? (
        <Container>
          <List>
            {repos.map(repo => (
              <li key={repo.name}>
                <span>{repo.name}</span>
                <Icons>
                  <Link to={`/repositorie/${repo.name}`}><FaBars size={20}/></Link>
                  <DeleteButton onClick={() => handleDelete(repo.name)}>
                    <FaTrash size={18}/>
                  </DeleteButton>
                </Icons>
              </li>
            ))}
          </List>
        </Container>
      ) : (
        null
      )}
    </>
  );
}

export default Main;
