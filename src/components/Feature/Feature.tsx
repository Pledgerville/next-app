import {
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';

const Feature: React.FC = () => {
  return (
    <Container maxW='8xl' paddingLeft={530} paddingBottom={2} paddingTop={60} >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={50}>
        <Flex direction='row' gap={4}>
          <Flex direction='column' w='full' h='full' alignItems='stretch' flexGrow={1} gap={3}>
            <Image src='/black-man-cooking.jpg' alt='Black man cooking' rounded='md' objectFit='cover' width='600px' height='390px' paddingTop={110} />
            <Image src='/computers.jpg' alt='Black man cooking' rounded='md' objectFit='cover' width='600px' height='360px' paddingTop={78} />
          </Flex>
          <Flex direction='column' gap={30}>
            <Heading fontSize='normal' fontWeight='bold' noOfLines={1}>
            </Heading>
            <Heading noOfLines={1}>Home Is Here  </Heading >
            <Text>
             Our senior community is the perfect place to benefit from round-the-clock support and enjoy all the advantages of a vibrant lifestyle. As a resident of our independent living community, you can look forward to taking part in exciting community events including group exercises, game and movie night or morning coffee in our Great Room.  Whether you desire to forge new relationships, explore new hobbies, or simply unwind and de-stress, our senior community is the perfect haven for you or your loved one.
            </Text>
            <Text paddingTop={55}>
             In contemporary times, computer proficiency is becoming vital for seniors to navigate their daily routines. It is crucial for them to possess a thorough comprehension of computers and software applications to communicate with essential services, organizations, physicians, and relatives. Personal computers and computer literacy greatly improve and simplify the residents' search for financial autonomy while also offering prospects for education, socializing, and community-related information.
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Feature;