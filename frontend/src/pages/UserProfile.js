import React from "react";
import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";
import WelcomeBar from "./../components/WelcomeBar";
import ClientCard from "./../components/ClientCard";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: #FAFAFA;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  padding-bottom: 30px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  padding: 30px 60px;
`;

const OptionsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const UserProfile = () => {
  return (
    <>
      <Container>
        <WelcomeBar />
        <StyledTypography
          variant="h3"
        >
          Estes são seus atuais projetos
        </StyledTypography>
        <OptionsBox>
          <Link to="/newproject" style={{textDecoration: "none"}}>
            <Button
              variant="contained"
              color="primary"
            >
              Adicionar Projeto
            </Button>
          </Link>
        </OptionsBox>
        <CardBox>
          <ClientCard />
        </CardBox>
      </Container>
    </>
  );
};

export default UserProfile;