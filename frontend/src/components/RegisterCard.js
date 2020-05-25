import React, { useState } from "react";
import styled from "styled-components";
import { 
  Card,
  TextField,
  FormControl,
  Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import KeyboardBackSpaceIcon from "@material-ui/icons/KeyboardBackspace";
import handleRegister from "../services/handleRegisterService";


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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    
    return (
      <Container>
        <Title>Crie sua Conta</Title>
        <Form>
          <StyledCard>
            <FormControl>
              <StyledTextField
                label="Nome"
                required={true}
                variant="outlined"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              >
                Nome
              </StyledTextField>
              <StyledTextField
                label="Sobrenome"
                required={true}
                variant="outlined"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              >
                Sobrenome
              </StyledTextField>
              <StyledTextField
                label="E-mail"
                required={true}
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
              onClick={handleRegister}
            >
              Enviar
            </StyledButton>
          </StyledCard>
        </Form>
        <StyledLink to="/login">
          <KeyboardBackSpaceIcon />
          Voltar
        </StyledLink>
      </Container>
    );
  };

  export default RegisterCard;