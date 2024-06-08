import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, SignUpContainer, SignInContainer, Form, Title, Input, Anchor, OverlayContainer, Overlay, LeftOverlayPanel, RightOverlayPanel, Paragraph, GhostButton, Button } from './Components';
import { toast } from 'react-hot-toast';

const GlobalStyle = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif; /* Example font-family */
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(''); // State for date of birth
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter all input fields.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/api/v1/login', { email, password });
      console.log(response.data);
      navigate('/menu');
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Username and Password did not match.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !dateOfBirth) {
      toast.error('Please enter all input fields.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/api/v1/signup', { name, email, password, dateOfBirth });
      console.log(response.data);
      toast.success('Signup successful!');
    } catch (error) {
      toast.error('Error signing up. Please try again.');
    }
  };

  return (
    <GlobalStyle>
      <Wrapper>
        <ContentContainer>
          <SignUpContainer signinIn={signIn}>
            <Form>
              <Title>Create Account</Title>
              <Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input type='date' placeholder='Date of Birth' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} /> {/* Date of Birth Input */}
              <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button onClick={handleSignup}>Sign Up</Button>
            </Form>
          </SignUpContainer>

          <SignInContainer signinIn={signIn}>
            <Form>
              <Title>Sign in</Title>
              <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <Anchor href='/forgot-password'>Forgot your password?</Anchor>
              <Button onClick={handleLogin}>Sign In</Button>
            </Form>
          </SignInContainer>

          <OverlayContainer signinIn={signIn}>
            <Overlay signinIn={signIn}>
              <LeftOverlayPanel signinIn={signIn}>
                <Title>Welcome Back!</Title>
                <Paragraph>
                  PLEASE LOGIN TO VIEW OUR MENU
                </Paragraph>
                <GhostButton onClick={() => setSignIn(true)}>Sign In</GhostButton>
              </LeftOverlayPanel>
              <RightOverlayPanel signinIn={signIn}>
                <Title>Hello, Customer!</Title>
                <Paragraph>
                  NEW USER? PLEASE SIGNUP TO VIEW OUR MENU
                </Paragraph>
                <GhostButton onClick={() => setSignIn(false)}>Sign Up</GhostButton>
              </RightOverlayPanel>
            </Overlay>
          </OverlayContainer>
        </ContentContainer>
      </Wrapper>
    </GlobalStyle>
  );
}

export default Login;
