import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import * as S from './styled';

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');

    if(repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/');
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        { repositories.map(repository => {
          let words = repository.split(" ");
          return (            
            <S.ListItem key={repository}><strong>Repositório:&nbsp;</strong>
              <S.LinkRepo href={ words[1] } target="_blank" >{ words[0] }</S.LinkRepo>
            
            
            </S.ListItem>
          )
        }) }
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}