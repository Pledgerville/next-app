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
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

type DetailProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Detail: React.FC<DetailProps> = ({ imageUrl, title, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
  });
  return (
    <SimpleGrid
      m={6}
      columns={{ base: 1, md: 2 }}
      spacing={11}
      backgroundColor={'white'}
      borderRadius='xl'
    >
      <Flex flexGrow={1}>
        <Box
          bg='white'
          borderRadius='xl'
          border='solid white'
          boxShadow='dark-sm'
          p={0}
          ref={ref}
          style={{ overflow: 'hidden' }}
        >
          <animated.div style={animationProps}>
            <Image src={imageUrl} alt={title} width='430px' height='320px' />
          </animated.div>
        </Box>
      </Flex>
      <Flex>
        <Stack mt='1' spacing='2' mr='1'>
          <animated.div style={animationProps}>
            <Heading fontFamily='Linotype Didot' fontSize='2xl' size='md'>
              {title}
            </Heading>
          </animated.div>
          <animated.div style={animationProps}>
            <Text fontFamily='Linotype Didot' fontSize='xl'>
              {description}
            </Text>
          </animated.div>
        </Stack>
      </Flex>
    </SimpleGrid>
  );
};

const Details: React.FC = () => {
  const details: DetailProps[] = [
    {
      imageUrl: '/computers_use.jpg',
      title: 'LIFESTYLE & SUBSTANCE',
      description:
        'Our Pacoima community provides the ideal balance of privacy and community interaction, allowing residents to maintain their independence while having access to engaging activities and social events. The facility also offers various amenities and residents have the freedom to choose from a variety of villa sizes and layouts equipped with appliances and conveniences, allowing them to live comfortably and elegantly.',
    },
    {
      imageUrl: '/hand-shake.jpg',
      title: 'OUR COMMITMENT',
      description:
        'Our mission at Pledgerville is to foster a sense of purpose and independence in our residents lives. We understand that we are not just a community, but also a part of the larger society. As such, we are committed to making a positive impact in the local community by creating employment opportunities for the locals and supporting small businesses. We believe that by investing in the community, we can foster a sense of purpose and belonging that enhances the quality of life for everyone.',
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
