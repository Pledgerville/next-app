import { Flex } from '@chakra-ui/react';
import { auth } from '@src/firebase/client';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Dashboard from './dashboard';
import Login from './login';

type AdminProps = {};

const Admin: React.FC<AdminProps> = () => {
  const [user] = useAuthState(auth);

  return (
    <Flex alignItems={'center'} justifyContent={'center'} mt={10}>
      {user ? <Dashboard /> : <Login />}
    </Flex>
  );
};
export default Admin;
