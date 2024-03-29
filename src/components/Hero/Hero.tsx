import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const hero = document.getElementById('hero');
      const nextSection = document.getElementById('next-section');

      if (hero && nextSection) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        const nextSectionTop = nextSection.getBoundingClientRect().top;

        if (heroBottom >= nextSectionTop) {
          const distance = heroBottom - nextSectionTop;
          const opacityValue = 1 - (distance / window.innerHeight);
          setOpacity(opacityValue);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box pos="relative" w="100%" h="70vh" id="hero">
        <Image
          src="/held_hand.jpg"
          alt="description-of-your-image"
          h="100%"
          w="100%"
          objectFit="cover"
        />
        <Box
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.6)"
          opacity={opacity}
          transition="opacity 0.3s ease-in-out"
        />
        <Flex
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          justify="center"
          color="white"
          textAlign="center"
          zIndex="1"
        >
          <Heading
            fontFamily="Linotype Didot"
            fontSize="4xl"
            as="h2"
            size="xl"
            mb="5"
          >
            Senior Living: 39 Years of Exceeding Expectations and Community
            Excellence
          </Heading>
          <Text
            fontFamily="Linotype Didot"
            fontSize="2xl"
            textAlign="center"
            mb="5"
            fontWeight="semibold"
            w="155%"
          >
        Pledgervile Senior Citizen Villa is a cherished landmark in the Northeast San Fernando Valley. The 
        housing estate, which was built on top of the esteemed Pacoima soil, has become an emblem of community 
        pride for its residents. It is noteworthy for being the first housing project designed for seniors and 
        disabled individuals in the area, opening its doors in May 1984. Since then, Pledgerville has been making
        a positive impact on the lives of its residents, solidifying its status as an important part of the community. 
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Hero;