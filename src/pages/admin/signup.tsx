import { Flex, Heading } from '@chakra-ui/react';
import SignupForm from '@src/components/Signup/SignupForm';
import React from 'react';

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  return (
    <Flex direction={'column'} bg={'red'}>
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
          <Heading>Register</Heading>
        </Flex>
        <SignupForm />
      </Flex>
    </Flex>
  );
};
export default Signup;
