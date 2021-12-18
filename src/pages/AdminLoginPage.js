import React from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

const AdminLoginPage = () => {
  return (
    <FormContainer>
      <Form>
        <h1>
          <span className="font-weight-bold">Loaner Admin Login</span>
        </h1>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="Password" placeholder="Password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Login as Admin</Button>
        <div className="text-center pt-3">Or continue with your social</div>
        <FacebookLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <a href="/signup">Sign up</a>
          <span className="p-2">|</span>
          <a href="/">Forget Password</a>
        </div>
      </Form>
    </FormContainer>
  );
};

export default AdminLoginPage;

const FormContainer = styled.div`
  width: 100%;
  max-width: 370px;
  padding: 25px;
  margin: auto;
  height: 100%;
`;
