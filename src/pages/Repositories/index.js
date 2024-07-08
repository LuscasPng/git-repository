import { Loading, Container, Owner, BackButton, IssuesList, PageActions, Head } from "./styles";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Repositories() {
  const { repo } = useParams();
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(repo);

      try {
        const [repositorioData, issuesData] = await Promise.all([
          api.get(`/repos/${nomeRepo}`),
          api.get(`/repos/${nomeRepo}/issues`, {
            params: {
              state: 'open',
              per_page: 5
            }
          })
        ]);
        
        setRepository(repositorioData.data);
        setIssues(issuesData.data);
        
        console.log('repositorioData: ', repositorioData.data);
        console.log('issuesData: ', issuesData.data);

        setLoading(false);

      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    load();
  }, [repo]);

  useEffect(() => {
    async function loadIssue() {
      const nomeRepo = decodeURIComponent(repo);

      const response = await api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: "open",
          page,
          per_page: 5
        }
      });

      setIssues(response.data);
    }

    loadIssue();
  }, [repo, page])
  
  function handlePage(action) {
    setPage(action === "back" ? page - 1 : page + 1);


  }

  if(loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    )
  }

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
        <BackButton to="/">
          <FaArrowLeft color="#bdbdbd" size={30}/>
        </BackButton>
        <Owner>
          <img 
            src={repository.owner.avatar_url} 
            alt={repository.owner.login} 
          />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssuesList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url} target="_blank" rel="noreferrer">{issue.title}</a>
                  <div>
                    {issue.labels.length > 0 ?
                      issue.labels.map(label => (
                          <span key={String(label.id)}>
                            {label.name}
                          </span>
                      ))
                    :
                      null
                    }
                  </div>
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>
        <PageActions>
          <button type="button" onClick={() => handlePage("back")} disabled={page < 2}>
            Voltar
          </button>
          <button type="button" onClick={() => handlePage("next")}>
            Avançar
          </button>
        </PageActions>
      </Container>
    </>
  );
}

export default Repositories;
