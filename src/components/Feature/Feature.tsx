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
    <Container maxW='8xl' paddingBottom={2} paddingTop={50}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        <Flex direction='row' gap={4}>
          <Flex direction='column' w='full' h='full' alignItems='stretch' flexGrow={1} gap={3}>
            <Image src='/black-man-cooking.jpg' alt='Black man cooking' rounded='md' objectFit='cover' width='600px' height='250px' paddingTop={57} />
            <Image src='/coffee-time.jpg' alt='Black man cooking' rounded='md' objectFit='cover' width='600px' height='250px' paddingTop={45} />
          </Flex>
          <Flex direction='column' gap={1}>
            <Heading fontSize='normal' fontWeight='bold' noOfLines={1}>
            </Heading>
            <Heading noOfLines={1}>Home Is Here</Heading >
            <Text>
              Our senior community is the perfect place to benefit from round-the-clock support and enjoy all the advantages of a vibrant lifestyle. As a resident of our independent living community, you can look forward to taking part in exciting community events, indulging in luxurious resort-style amenities, and savoring delectable, personalized meals served in our sophisticated dining room. Whether you're looking to make new friends, discover new interests, or simply relax and unwind, our senior community is the ideal destination for you or your loved one.
            </Text>
            <Text paddingTop={55}>
              In today's society, computer literacy is rapidly becoming a crucial requirement for daily living. It is essential for seniors to possess a comprehensive understanding of computers and software to communicate with necessary services, organizations, doctors, and family members. Personal computers and computer literacy significantly enhance and streamline individual residents' pursuit of economic independence, while also providing opportunities for education, socialization, and community information.            </Text>
            <Text >
              Feeling curious? Give us a call today and we will be happy to help you plan your visit to Hollywood Hills Senior Living for a firsthand look.
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Feature;