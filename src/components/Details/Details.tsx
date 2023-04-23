import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

type DetailProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Detail: React.FC<DetailProps> = ({ imageUrl, title, description }) => {
  return (
    <SimpleGrid m={4} columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex flexGrow={1}>
        <Image src={imageUrl} alt={title} borderRadius='lg' />
      </Flex>
      <Flex>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </Flex>
    </SimpleGrid>
  );
};

const Details: React.FC = () => {
  const details: DetailProps[] = [
    {
      imageUrl: '/black-man-office.jpg',
      title: 'LIFESTYLE & SUBSTANCE',
      description:
        'Our Pacoima community provides the ideal balance of privacy and community interaction, allowing residents to maintain their independence while having access to engaging activities and social events. The facility also offers various amenities and residents have the freedom to choose from a variety of villa sizes and layouts equipped with appliances and conveniences, allowing them to live comfortably and elegantly.'
    },
    {
      imageUrl: '/hand-shake.jpg',
      title: 'OUR COMMITMENT',
      description:
        'Our mission at Pledgerville is to foster a sense of purpose and independence in our residents lives. We understand that we are not just a community, but also a part of the larger society. As such, we are committed to making a positive impact in the local community by creating employment opportunities for the locals and supporting small businesses. We believe that by investing in the community, we can foster a sense of purpose and belonging that enhances the quality of life for everyone.'
    },
    {
      imageUrl: '/branch-dof.jpg',
      title: 'PEACEFUL & SATISFYING',
      description:
        'Our independent living facility is the epitome of tranquility and contentment. We pride ourselves on creating an environment that promotes peacefulness and fulfillment, where our residents can lead a life of serenity and harmony. Our serene surroundings provide the perfect atmosphere for reflection and contemplation, with ample opportunities to connect with nature and enjoy the great outdoors.',
    },
  ];
  return (
    <Container maxW='container.lg' mt={10} centerContent overflow='hidden'>
      <Box flexDirection='column' gap={8}>
        {details.map((detail, index) => (
          <Detail
            key={index}
            imageUrl={detail.imageUrl}
            title={detail.title}
            description={detail.description}
          />
        ))}
      </Box>
    </Container>
  );
};
export default Details;
