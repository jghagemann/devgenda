import React from "react";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import { 
  Card,
  CardContent,
  TextField,
  FormControl,
  InputAdornment,
  Avatar,
  Button } from "@material-ui/core";
import { MailOutline, VpnKeyOutlined } from "@material-ui/icons/";

const StyledCard = styled(Card)`
  margin-top: 40px;
  width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-content: center;
`;

const Header = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const StyledAvatar = styled(Avatar)`
  display: flex;
  align-self: center;
  height: 60px;
  width: 60px;
`

const FormItem = styled.div`
  padding-top: 20px
`

const StyledButton = styled(Button)`
  width: 100px;
  align-self: center;
  margin-bottom: 20px;
`

const LoginCard = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <StyledCard>
          <Header>Acesse sua Conta</Header>
          <StyledCardContent>
            <StyledFormControl fullWidth>
              <StyledAvatar
                variant="circle"
                size="medium"
              />
              <FormItem>
                <TextField
                  label="E-mail"
                  type="email"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutline />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormItem>
              {/* <FormItem>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormItem> */}
            </StyledFormControl>
          </StyledCardContent>
          <StyledButton
            variant="outlined"
          >
            Log In
          </StyledButton>
        </StyledCard>
      </StylesProvider>
    </>
  );
};

export default LoginCard;