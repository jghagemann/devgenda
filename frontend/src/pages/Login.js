import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginCard from '../components/LoginCard';

const Container = styled.div`
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: "bold";
  font-size: 37px;
  text-align: center;
  margin: 0
  
`;

const SubTitle = styled.p`
  font-weight: "regular";
  font-size: 16px;
  text-align: center;
  margin: 0
`;

const Login = () => {
  return (
    <>
      <TitleContainer>
        <Title>Devgenda</Title>
        <SubTitle>Mantenha seus projetos organizados</SubTitle>
      </TitleContainer>
      <Container>
        <LoginCard />
        <Link to='/register'>Crie sua conta</Link>
      </Container>
    </>
  );
};

export default Login;