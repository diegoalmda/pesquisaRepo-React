import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
  margin: 2rem auto;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #FFF;
  padding: .5rem;

  &&:hover {
    background: #fff;
    color: #000;

    a {
      color: #000;
      text-decoration: underline;
    }
  }
`; 

export const LinkHome = styled(Link)`
  display: block;
  font-family: sans-serif; 
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  padding: .5rem;
  color: #fff;
  text-decoration: none;
  border-radius: .5rem;
  background: #000;

  &&:hover {
    cursor: pointer;
    border: none;
    background: #555;
  }
`;

export const LinkRepo = styled.a`
  color: #fff;
  text-decoration: none;

  &&:hover {
    text-decoration: underline;

    &&::after {
      content: " »";
      color: red;
    }
  }
`;