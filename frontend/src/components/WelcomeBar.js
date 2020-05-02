import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography, Avatar } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const Spacer = styled.div`
  padding-bottom: 40px;
`;

const StyledToolbar = styled(Toolbar)`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledAvatar = styled(Avatar)`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;

const StyledLogout = styled(PowerSettingsNewIcon)`
  height: 40px;
  width: 40px;
`;

const WelcomeBar = () => {
  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h2">
            Olá Usuário!
          </Typography>
          <Container>
            <StyledAvatar />
            <StyledLogout variant="outlined" size="large" />
          </Container>
        </StyledToolbar>
      </AppBar>
      <Spacer />
    </>
  );
};

export default WelcomeBar;