import {
  Container,
  Flex,
  Box,
  Heading,
  IconButton,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from 'react-icons/md';
import { BsGithub, BsDiscord } from 'react-icons/bs';
import ContactForm from '@src/components/forms/Contact-Form';

type ContactUsProps = {};

const Contact: React.FC<ContactUsProps> = () => {
  return (
    <Container maxW='5xl' mt={2} mb={2} centerContent overflow={'hidden'}>
      <Card w='5xl'>
        <CardBody>
          <SimpleGrid p={2} w='full' columns={2} gap={2} overflow={'hidden'}>
            <Flex>
              <Box height='400px' w='400px' pl={1} overflow={'hidden'}>
                <Heading
                  color={'black'}
                  display={'flex'}
                  justifyContent={'center'}
                >
                  Contact Us
                </Heading>
                <Box
                  py={{ base: 5, sm: 5, md: 8, lg: 10 }}
                  display={'flex'}
                  justifyContent={'center'}
                >
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
                      alignItems='center'
                      flexDirection='row'
                      textColor={'black'}
                    >
                      +1(818) 897-7784
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
                      textColor={'black'}
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
                      leftIcon={<MdLocationOn color='black' size='20px' />}
                      justifyContent='flex-start'
                      textColor={'black'}
                    >
                      San Fernando, CA
                    </Button>
                  </VStack>
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
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
              </Box>
            </Flex>
            <Flex>
              <Box
                bg={'white'}
                height='400px'
                w='400px'
                pr={1}
                overflow={'hidden'}
                borderRadius='lg'
              >
                <ContactForm />
              </Box>
            </Flex>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Container>
  );
};
export default Contact;
