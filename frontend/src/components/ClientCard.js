import React from "react";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Button, Icon } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons/";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-around;
`;

const StyledCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
`;

const ClientName = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

const StyledButton = styled(Button)`
  width: 100px;
  display: flex;
  align-self: center;
  padding-top: 5px;
`;

const StyledIcon = styled(Icon)`
  align-self: flex-end;
`;

const ClientCard = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <StyledCard>
          <StyledCardContent>
            <InfoBox>
              <ClientName>
                <Typography variant="h4">Cliente</Typography>
              </ClientName>
              <Info>
                Fase: Inicial
              </Info>
              <Info>
                Passo: Reunião Inicial
              </Info>
              <Info>
                Próxima Reunião: 22 de Abril de 2020
              </Info>
            </InfoBox>
            <Link to="/client" style={{alignSelf: "center", textDecoration: "none"}}>
              <StyledButton 
                variant="contained"
                color="primary"
              >
                  Detalhes
              </StyledButton>
            </Link>
            <StyledIcon>
              <DeleteOutline />
            </StyledIcon>
          </StyledCardContent>
        </StyledCard>
      </StylesProvider>
    </>
  );
};

export default ClientCard;