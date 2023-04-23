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
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const sizes = {

  lg: defineStyle({
    maxW: '95ch',
    p: '8',
    fontSize: 'xl',
  }),
}

const Contact: React.FC = () => {
  return (
    <Container maxW='container.lg' mt={0} centerContent overflow='hidden' w="100vw">
      <Flex>
        <Box
          bg='#c96663'
          color='white'
          borderRadius='lg'
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color={"black"}>Contact Us </Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems='flex-start'>
                      <Button
                        size='md'
                        height='48px'
                        width='300px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color='black' size='20px' />}
                        justifyContent='flex-start'
                      >
                 <Text mt={{ sm: 3, md: 3, lg: 5 }} color='blackAlpha.900'>
                 +1(818) 897-7784
                  </Text>
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='300px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color='black' size='20px' />}
                        justifyContent='flex-start'
                      >
                 <Text mt={{ sm: 3, md: 3, lg: 5 }} color='blackAlpha.900'>
                 contact@pledgerville.com
                  </Text>   
                      </Button>
                      <Button
                        size='md'
                        height='48px'
                        width='300px'
                        variant='ghost'
                        color='#DCE2FF'
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color='black' size='20px' />}
                        justifyContent='flex-start'
                      >
                 <Text mt={{ sm: 3, md: 3, lg: 5 }} color='blackAlpha.900'>
                 San Fernando, CA
                  </Text>  
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
                      _hover={{ bg: '#7e616b' }}
                      icon={<MdFacebook size='28px' />}
                    />
                    <IconButton
                      aria-label='github'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: '#7e616b' }}
                      icon={<BsGithub size='28px' />}
                    />
                    <IconButton
                      aria-label='discord'
                      variant='ghost'
                      size='lg'
                      isRound={true}
                      _hover={{ bg: '#7e616b' }}
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
                          bg='#000000'
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
export const containerTheme = defineStyleConfig({ sizes })

export default Contact;

