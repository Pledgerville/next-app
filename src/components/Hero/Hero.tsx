import sunsetImage from 'public/pac_sunset.jpg';

function MyComponent() {
  return (
    <div className="home_image-container">
      <Image src="/branch-dof.jpg" alt="pledger_sunset" width={500} height={500} 
      
      />
    </div>
  );
}


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
import React from 'react';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <Box pos="relative" w="100%" h="70vh">
      <Image
        src="/pac_sunset.jpg"
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
        bg="rgba(0, 0, 0, 0.5)"
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
        <Heading as="h2" size="xl" mb="2">
        SENIOR LIVING: BEYOND YOUR EXPECTATIONS
        </Heading>
        <Text fontSize="2xl" testAlign = "center" mb="5" fontWeight="semibold" w="155%">
      Nestled against the iconic Hollywood Hills and surrounded by
      world-class arts, culture, and cuisine, you will find a unique
      lifestyle opportunity in Los Angeles, California. At Hollywood
      Hills Senior Living, we balance professional care with the ability
      to live as independently as possible. We offer Assisted Living,
      Memory Care, and Respite Care apartments.  
        </Text>
      </Flex>
    </Box>

    </>
  );
};
export default Hero;
 