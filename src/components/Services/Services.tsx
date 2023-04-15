import {
  Card,
  CardBody,
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  Container,
  Box,
} from '@chakra-ui/react';
import React from 'react';

type ServiceProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Service: React.FC<ServiceProps> = ({ imageUrl, title, description }) => {
  return (
    <Flex>
      <Card maxW='md'>
        <CardBody p={2}>
          <Image
            src={imageUrl}
            alt={title}
            borderRadius='lg'
            minWidth='300px'
            height='200px'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      imageUrl: '/play-time.jpg',
      title: 'AMENITIES & SERVICES',
      description:
        'An Engaged Lifestyle. Extraordinary Events. Elevated Experiences. Seize your moment to participate in inspiring activities, every day! Our on-site amenities provide you with everything from pampering and self-care treatments, to a full calendar of social events, to physical activities for all levels of ability! There is always something happening in your new community, stimulating the mind and strengthening the body, with interesting activities and extraordinary outings that are simply a part of everyday life. Do you enjoy listening to a visiting pianist’s performance or heading to the theater to screen classic pictures and contemporary blockbusters? Or do you prefer staying fit or taking a stroll through lushly landscaped courtyards and picnic areas? There’s always plenty to do with friendly neighbors. Engage in your best life today!',
    },
    {
      imageUrl: '/monarch_society.jpg',
      title: 'INDEPENDENT & ASSISTED LIVING, MEMORY CARE',
      description:
        'Luxury Senior Living, Redefined. You deserve to live your best life. We’re determined to help. We create Senior Living communities that feel like you’re on vacation, every day. Our communities inspire you to flourish, with a selection of homes that are contemporary, yet timeless. Sophisticated, yet comfortable. We provide custom care for all of our residents, tailored to their specific needs. Our communities give you a new standard for senior living, with inspired independent living, state-of-the-art assisted living and forward-thinking memory care — all thoughtfully designed for you! Choose your beautifully designed residence, with floor plans ranging from a spacious 1-bedroom homes, to spectacular penthouse. We give you uncompromising luxury homes that are the perfect home base to take advantage of inspiring opportunities, enhanced by premium amenities and services.',
    },
    {
      imageUrl: '/wheel_chair.jpg',
      title: 'TAKE A VIRTUAL TOUR',
      description:
        'Experience Your New Home. We invite you to an exclusive Virtual Tour, where you’ll have the opportunity to explore your new home. Our communities come to life from every angle, with thoughtfully designed homes and engaging activities, all ready to enhance your lifestyle. And you can rest easy and move through your day with confidence, knowing that our compassionate caregivers are available any time, day or night. Our weekly housekeeping, laundry, linen services, restaurant, style, dining, social activities, daily fitness classes, and uncompromising life-enhancing amenities, ensure that you will be living your best life, every day!',
    },
  ];
  return (
    <Container maxW='container.lg' mt={10} centerContent overflow='hidden'>
      <Box
        display='flex'
        flexDirection='row'
        gap='6'
        justifyItems='center'
        justifyContent='space-evenly'
      >
        {services.map((service, index) => (
          <Flex key={index}>
            <Service
              title={service.title}
              imageUrl={service.imageUrl}
              description={service.description}
            />
          </Flex>
        ))}
      </Box>
    </Container>
  );
};
export default Services;
