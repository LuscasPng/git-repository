import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading, Container, Owner, BackButton, IssuesList } from "./styles";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";
import { List } from "../Main/styles";

function Repositories() {
  const { repo } = useParams();
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if(loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    )
  }

  return (
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
    </Container>
  );
}

export default Repositories;
