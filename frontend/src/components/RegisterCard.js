import React from 'react';
import styled from 'styled-components';
import { 
  Card,
  TextField,
  FormControl,
  Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import KeyboardBackSpaceIcon from '@material-ui/icons/KeyboardBackspace';

  const Container = styled.div`
    display: flex;
    flex-direction: column;   
  `;
  
  const Title = styled.h1`
    font-weight: "bold";
    font-size: 37px;
    text-align: center;
  `;

  const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const StyledCard = styled(Card)`
    width: 300px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  `;
  
  const StyledTextField = styled(TextField)`
    margin-top: 20px;
  `;

  const StyledButton = styled(Button)`
    width: 100px;
    display: flex;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 10px;
    color: green;
    background: white;
  `;

  const StyledLink = styled(Link)`
    align-self: center;
  `;

  const RegisterCard = () => {
    return (
      <Container>
        <Title>Crie sua Conta</Title>
        <Form>
          <StyledCard>
            <FormControl 
              required={true}
              >
              <StyledTextField
                label="Nome"
                required={true}
                variant="outlined"
              >
                  Nome
              </StyledTextField>
              <StyledTextField
                label="Sobrenome"
                required={true}
                variant="outlined"
              >
                  Sobrenome
              </StyledTextField>
              <StyledTextField
                label="E-mail"
                required={true}
                variant="outlined"
              >
                  E-mail
              </StyledTextField>
              {/* <StyledTextField
                label="Senha"
                type="password"
                required={true}
                variant="outlined"
              >
                  Senha
              </StyledTextField> */}
            </FormControl>
            <StyledButton
              variant="contained"
            >
              Enviar
            </StyledButton>
          </StyledCard>
        </Form>
        <StyledLink to="/">
          <KeyboardBackSpaceIcon />
          Voltar
        </StyledLink>
      </Container>
    )
  };

  export default RegisterCard;