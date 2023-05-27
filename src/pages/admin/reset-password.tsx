import { Flex } from '@chakra-ui/react';
import ResetPasswordForm from '@src/components/ResetPassword/ResetPasswordForm';
import React from 'react';

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return (
    <Flex>
      <ResetPasswordForm />
    </Flex>
  );
};
export default ResetPassword;
