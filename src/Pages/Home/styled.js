import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 2rem;
  padding: 0 .5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 0.25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    cursor: pointer;
    background: #555;
    border: 1px solid #555;
  }

`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`;

export const Img = styled.img`
  width: 10rem;
  margin: 1rem;
`;