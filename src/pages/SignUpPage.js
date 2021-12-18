import React from 'react';
import SignUp from '../components/SignUp/SignUp';
import { CssBaseline, Container, Paper, Box } from '@mui/material';

const SignUpPage = () => {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <SignUp />
        </Paper>
      </Container>
    </>
  );
};

export default SignUpPage;
