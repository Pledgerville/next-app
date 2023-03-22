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
    <Container maxW='6xl' paddingBottom={2} paddingTop={2}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex direction={'row'} gap={4}>
          <Flex direction={'column'} gap={3}>
            <Heading fontSize='normal' fontWeight='bold' noOfLines={1}>
              Home is here
            </Heading>
            <Heading noOfLines={1}>PLEDGERVILLE</Heading>
            <Flex>
              <Text>
                Wherever you or your loved one is on life’s journey, you will
                benefit from our round-the-clock support and all the perks of
                living in Hollywood’s most inviting senior community. Residents
                of our Los Angeles senior living community can say goodbye to
                daily housekeeping and other mundane activities, opening up
                their days to engaging community events, resort-style amenities,
                and delicious, world-class personalized meals served in our
                elegant dining room.
              </Text>
            </Flex>
            <Flex>
              <Text>
                Want to freshen up? Head to the resident salon and barbershop.
                Want to put up your feet and enjoy the view? Our rooftop lounge
                overlooking the Hollywood Hills will have you spending your days
                relaxing alongside incredible views. This is more than a place
                to call home. It’s an entire lifestyle.{' '}
              </Text>
            </Flex>
            <Flex>
              <Text>
                Feeling curious? Give us a call today and we will be happy to
                help you plan your visit to Hollywood Hills Senior Living for a
                firsthand look.
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={'column'}
            w='full'
            h='full'
            alignItems='stretch'
            flexGrow={1}
            gap={2}
          >
            <Image
              src='/black-man-cooking.jpg'
              alt='Black man cooking'
              rounded={'md'}
              objectFit={'cover'}
              width='600px'
              height='250px'
            />
            <Image
              objectFit={'cover'}
              src='/coffee-time.jpg'
              alt='Black man cooking'
              rounded={'md'}
              width='600px'
              height='250px'
            />
          </Flex>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
export default Feature;
