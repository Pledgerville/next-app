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
      title: 'Life, Style & Substance',
      description:
        'Our Hollywood Hills neighborhood offers a robust arts and culture setting with global cuisine, live music, museums, expertly curated shops, and some of the best coffee in the West Coast. We are nestled between Griffith Observatory and the Hollywood Bowl, just moments from: \nHollywood & Highland, Whole Foods, CVS \nAntica Pizzeria da Michele, Shake Shack, Rubies+Diamonds \nSouthern California Hospital at Hollywood, Los Angeles Medical Center, UCLA Health',
    },
    {
      imageUrl: '/hand-shake.jpg',
      title: 'OUR COMMITMENT',
      description:
        'At Hollywood Hills Senior Living, we dedicate every day to supporting our residents to live the full, active, independent lifestyle they deserve. We know that with a little of the right kind of individualized assistance, our residents can continue to enjoy the activities that are meaningful to them. Personalized care plans, an attentive 24-hour care team, and stand-out amenities make Hollywood Hills Senior Living the premier choice for senior living in Hollywood Hills, California.',
    },
    {
      imageUrl: '/dinner-time.jpg',
      title: 'HEALTHFUL & SATISFYING',
      description:
        'You can count on our professional culinary team to prepare each meal to your unique specifications. <p>Our in-house culinary team prepares fresh, delicious meals made to your specifications, so you can trust that each bite will be as palate pleasing as it is nutritious.\nWe can accommodate allergies, sensitivities, and dietary needs, but above all, we make sure that the food we serve tastes great to you. Everyone has different preferences, and we are happy to honor yours.',
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
