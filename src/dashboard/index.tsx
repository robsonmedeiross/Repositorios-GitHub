import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import {
  Title, Form, Repositories, Error, Header,
} from './styled';
import logoImg from '../assets/githubIcon.svg';
import api from '../services/api';

interface Repository {
    id: number;
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    html_url: string
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputErro, setInputErro] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storaged = localStorage.getItem('@GithubExplore:repositories');

    if (storaged) {
      return JSON.parse(storaged);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplore:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(e: FormEvent<HTMLFormElement>):Promise<void> {
    e.preventDefault();

    if (!newRepo) {
      setInputErro('Digite o autor/repo do repostório!');
      return;
    }

    const repositoryIndex = repositories.findIndex(
      (repository) => repository.full_name === newRepo,
    );

    if (repositoryIndex >= 0) {
      setInputErro('Repositorio já pesquisado!');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputErro('');
      setNewRepo('');
    } catch (err) {
      setInputErro('Erro na busca do repositório!');
    }
  }

  function handleRemoveRepo(object: Repository): void {
    const repositoryIndex = repositories.findIndex(
      (repository) => repository.id === object.id,
    );

    if (repositoryIndex >= 0) {
      setRepositories((repository) => repository.filter((repo) => repo.id !== object.id));
    }
  }

  return (
    <>
      <Header>
        <Link to="/copy">
          <img src={logoImg} alt="Github Explore" />
        </Link>
      </Header>

      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputErro} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite Aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      { inputErro && <Error>{inputErro}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <div key={repository.id}>
            <Link to={`/repository/${repository.full_name}`}>
              <img src={repository.owner.avatar_url} alt={repository.owner.login} />
              <section>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </section>
              <FiChevronRight size={20} />
            </Link>
            <section className="icons">
              <BsFillTrashFill size={20} onClick={() => handleRemoveRepo(repository)} />
            </section>
          </div>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
