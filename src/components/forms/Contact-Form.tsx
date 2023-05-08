import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

type ContactFormProps = {};

const ContactForm: React.FC<ContactFormProps> = () => {
  const [input, setInput] = useState('');

  return (
    <Flex m={'8'} borderRadius={'lg'}>
      <VStack spacing={5}>
        <FormControl id='name' isRequired>
          <FormLabel>Your Name</FormLabel>
          <InputGroup borderColor='#E0E1E7'>
            <InputLeftElement pointerEvents='none'>
              <BsPerson color='gray.800' />
            </InputLeftElement>
            <Input type='text' size='md' />
          </InputGroup>
        </FormControl>
        <FormControl id='name' isRequired>
          <FormLabel>Mail</FormLabel>
          <InputGroup borderColor='#E0E1E7'>
            <InputLeftElement pointerEvents='none'>
              <MdOutlineEmail color='gray.800' />
            </InputLeftElement>
            <Input type='text' size='md' />
          </InputGroup>
        </FormControl>
        <FormControl id='name' isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            borderColor='gray.300'
            _hover={{
              borderRadius: 'gray.300',
            }}
            placeholder='message'
          />
        </FormControl>
        <FormControl id='name' float='right'>
          <Button variant='solid' bg='#000000' color='white' _hover={{}}>
            Send Message
          </Button>
        </FormControl>
      </VStack>
    </Flex>
  );
};
export default ContactForm;
