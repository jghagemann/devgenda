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
    text-decoration: none;
  `;

  const AddProjectCard = () => {
    return (
      <Container>
        <Title>Adicionar Novo Projeto</Title>
        <Form>
          <StyledCard>
            <FormControl 
              required={true}
              >
              <StyledTextField
                label="Cliente"
                required={true}
                variant="outlined"
              >
                  Cliente
              </StyledTextField>
              <StyledTextField
                label="CPF/CNPJ"
                required={true}
                variant="outlined"
              >
                  CPF/CNPJ
              </StyledTextField>
              <StyledTextField
                label="Nome do Projeto"
                required={true}
                variant="outlined"
              >
                  Nome do Projeto
              </StyledTextField>
              <StyledTextField
                label="Tecnologias"
                required={true}
                variant="outlined"
              >
                  Tecnologias
              </StyledTextField>
            </FormControl>
            <StyledButton
              variant="contained"
            >
              Enviar
            </StyledButton>
          </StyledCard>
        </Form>
        <StyledLink to="/profile">
          <KeyboardBackSpaceIcon />
          Voltar
        </StyledLink>
      </Container>
    )
  };

  export default AddProjectCard;