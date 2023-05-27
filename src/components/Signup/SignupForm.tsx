import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/client';
import { FIREBASE_ERRORS } from '../../firebase/error';
import InputItem from '../Inputs/InputItem';

type SignupFormProps = {};

const SignupForm: React.FC<SignupFormProps> = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState('');
  const [createUserWithEmailAndPassword, _, loading, authError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formError) setFormError('');
    if (!form.email.includes('@')) {
      return setFormError('Please enter a valid email');
    }

    if (form.password !== form.confirmPassword) {
      return setFormError('Passwords do not match');
    }

    // Valid form inputs
    createUserWithEmailAndPassword(form.email, form.password);
    router.replace('/admin');
  };

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Flex>
      <form onSubmit={onSubmit}>
        <InputItem
          name='email'
          placeholder='email'
          type='text'
          mb={2}
          onChange={onChange}
        />
        <InputItem
          name='password'
          placeholder='password'
          type='password'
          mb={2}
          onChange={onChange}
        />
        <InputItem
          name='confirmPassword'
          placeholder='confirm password'
          type='password'
          onChange={onChange}
        />
        <Text textAlign='center' mt={2} fontSize='10pt' color='red'>
          {formError ||
            FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
        <Button
          width='100%'
          height='36px'
          mb={2}
          mt={2}
          type='submit'
          isLoading={loading}
        >
          Sign Up
        </Button>
        <Flex fontSize='9pt' justifyContent='center'>
          <Text mr={1}>Have an account?</Text>
          <Text
            color='blue.500'
            fontWeight={700}
            cursor='pointer'
            onClick={() => router.push('/admin/login')}
          >
            LOG IN
          </Text>
        </Flex>
      </form>
    </Flex>
  );
};
export default SignupForm;
