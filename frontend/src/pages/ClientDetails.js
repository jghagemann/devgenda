import React from "react";
import styled from "styled-components";
import { Select, Chip, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import KeyboardBackSpaceIcon from "@material-ui/icons/KeyboardBackspace";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;   
`;
  
const Title = styled.h1`
  font-weight: "bold";
  font-size: 37px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-weight: "bold";
  font-size: 32px;
  text-align: center;
  margin: 0
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
  color: #FFFFFF
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 1.25em;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 300px;
  background: #484848;
  border-radius: 2%;
  box-shadow: 6px 6px rgba(72, 72, 72, 0.6);
`;

const BoxTitle = styled.h4`
  font-size: 24px;
  text-align: center;
`;

const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MeetingInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const MeetingInfo = styled.div`
display: flex;
justify-content: space-evenly;
font-size: 21px;
font-weight: 300;
margin: 0;
padding: 1em;
`;

const Info = styled.p`
  display: flex;
  font-size: 21px;
  font-weight: 300;
  margin: 0;
`;

const StyledSelect = styled(Select)`
  background-color: #FFFFFF;
`;

const StyledChip = styled(Chip)`
  margin-top: 10px;
`;

const PageOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 20px;
`;

const ClientDetails = () => {
  return (
    <>
      <TitleContainer>
        <Title>Cliente</Title>
        <SubTitle>CPF / CNPJ</SubTitle>
      </TitleContainer>
      <PageContainer>
        <MainContainer>
          <InfoContainer>
            <BoxTitle>Dados do Projeto</BoxTitle>
            <InfoBox>
              <Info>Nome</Info>
              <Info>Projeto Super</Info>
            </InfoBox>
            <BoxTitle>Tecnologias</BoxTitle>
              <InfoBox>
                <Info>
                  <StyledChip
                    label="React"
                    variant="outlined"
                    size="small"
                    color="secondary"
                />
                </Info>
                <Info>
                  <StyledChip
                    label="Koa"
                    variant="outlined"
                    size="small"
                    color="secondary"
                />
                </Info>
                <Info>
                  <StyledChip
                    label="Node.js"
                    variant="outlined"
                    size="small"
                    color="secondary"
                />
                </Info>
                <Info>
                  <StyledChip
                    label="Material-UI"
                    variant="outlined"
                    size="small"
                    color="secondary"
                />
                </Info>
                <Info>
                  <StyledChip
                    label="Styled Components"
                    variant="outlined"
                    size="small"
                    color="secondary"
                />
                </Info>
              </InfoBox>
          </InfoContainer>
        </MainContainer>
        <MainContainer>
          <InfoContainer>
            <BoxTitle>Fase Atual</BoxTitle>
              <InfoBox>
                <Info>
                  <StyledSelect>
                    <option value="Inicial">Inicial</option>
                    <option value="Planejamento">Planejamento</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Debugging">Debugging</option>
                    <option value="Deployment">Deployment</option>
                  </StyledSelect>
                </Info>
              </InfoBox>
            <BoxTitle>Passo Atual</BoxTitle>
              <InfoBox>
                  <Info>
                    <StyledSelect>
                      <option value="Reunião Inicial">Reunião Inicial</option>
                      <option value="Criação das Páginas">Criação das Páginas</option>
                      <option value="Criação da API">Criação da API</option>
                      <option value="Integração com API">Integração com API</option>
                      <option value="Correção de Bugs">Correção de Bugs</option>
                      <option value="Apresentaçao Final">Apresentaçao Final</option>
                    </StyledSelect>
                  </Info>
                </InfoBox>
          </InfoContainer>
        </MainContainer>
        <MainContainer>
          <InfoContainer>
            <BoxTitle>Próxima Reunião</BoxTitle>
            <MeetingInfoBox>
              <MeetingInfo>Data</MeetingInfo>
              <MeetingInfo>Tema</MeetingInfo>
            </MeetingInfoBox>
          </InfoContainer>
        </MainContainer>
      </PageContainer>
      <PageOptions>
        <Link to="/profile" style={{textDecoration: "none"}}>
          <KeyboardBackSpaceIcon />
          Voltar
        </Link>
        <StyledButton color="primary" variant="outlined">Salvar</StyledButton>
      </PageOptions>
    </>
  );
};

export default ClientDetails;