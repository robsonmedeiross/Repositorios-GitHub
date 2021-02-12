import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  Header, RepositoryInfo, Issues, Title,
} from './styled';
import logoImg from '../assets/githubIcon.svg';
import api from '../services/api';

interface ParamsRepo {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
      login: string;
      avatar_url: string;
  };
  html_url: string
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<ParamsRepo>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });

    // async function loadData(): Promise<void> {
    //   const [repository, issues] = await Promise.all([
    //     api.get(`repos${params.repository}`),\
    //     api.get(`repos${params.repository}/issues`),
    //   ]);
    // }
  }, [params.repository]);

  return (
    <>
      <Header>

        <img src={logoImg} alt="Github Explore" />
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>

      <Title>Explore repositórios no GitHub</Title>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues abertas</p>
            </li>

          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url} target="_blank" rel="noreferrer">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
