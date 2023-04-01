import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

const Contact: React.FC = () => {
  return (
    <Container maxW='container.lg' mt={0} centerContent overflow='hidden'>
      <Flex>
        <Box
          bg='#0D74FF'
          color='white'
          borderRadius='lg'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact Us</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color='whiteAlpha.800'>
                    Fill up the form below to contact us.
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start'>
                      <Button
                        size='md'
                        height='48px'
                        width='300px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color='white' size='20px' />}
                        justifyContent='flex-start'
                      >
                        +1(818)234-89746
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='300px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color='white' size='20px' />}
                        justifyContent='flex-start'
                      >
                        contact@pledgerville.com
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='300px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color='white' size='20px' />}
                        justifyContent='flex-start'
                      >
                        California, USA
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems='flex-start'
                  >
                    <IconButton
                      aria-label='facebook'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size='28px' />}
                    />
                    <IconButton
                      aria-label='github'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size='28px' />}
                    />
                    <IconButton
                      aria-label='discord'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsDiscord size='28px' />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg='white' borderRadius='lg'>
                  <Box m={8} color='#0B0E3F'>
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
                        <Button
                          variant='solid'
                          bg='#0D74FF'
                          color='white'
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
