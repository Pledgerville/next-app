import { Flex, Heading } from '@chakra-ui/react';
import LoginForm from '@src/components/Login/LoginForm';
import React from 'react';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      bg={'white'}
      width='100%'
      mx={80}
      h='600px'
      borderRadius={10}
    >
      <Flex mb={20}>
        <Heading>Login</Heading>
      </Flex>
      <LoginForm />
    </Flex>
  );
};
export default Login;
