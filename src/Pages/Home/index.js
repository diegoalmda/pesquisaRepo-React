import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

import logo from '../../img/gitsearch.jpg'; 
import * as S from './styled';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);
  
  const handlePesquisa = () => {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;        
        const repositoriesName = [];
        repositories.map(repository => {
          repositoriesName.push(repository.name + ' ' + repository.html_url);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      });
  }
  
  return (
    <S.HomeContainer>
      <S.Title>Pesquisa repositórios</S.Title>
      <S.Img src={logo} alt="Pesquisar" />
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>        
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente!</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

export default App;
