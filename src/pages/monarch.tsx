import { MotionBox } from '../components/MotionElements/MotionElements';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type AboutUsProps = {};

const AboutPage: React.FC<AboutUsProps> = () => {
  return (
    <Box h="100vh" position="relative">
      <MotionBox
        w={{ base: '100%', md: '50%' }}
        h="100vh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        position="relative"
        zIndex={1}
      >
        <Image
          src="/monarch_society.jpg"
          alt="description-of-your-image"
          h="100%"
          w="100%"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.6)"
        />
        <Flex
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          color="white"
          zIndex={2}
          px={{ base: 4, md: 12 }}
        >
          <VStack spacing={4} textAlign={{ base: 'center', md: 'left' }} paddingBottom = "360">
            <Heading
              fontFamily="Linotype Didot"
              as="h2"
              size="2xl"
              mb="3"
              mt={{ base: 1, md: 10 }}
            >
              Monarch Society
            </Heading>
          </VStack>
        </Flex>
      </MotionBox>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        px={8}
        color="black"
      >
            <Text
              fontFamily="Linotype Didot"
              fontSize="xl"
              mb="2"
              lineHeight={1.5}
            >
              In May...
            </Text>
            <Text
              fontFamily="Linotype Didot"
              fontSize="xl"
              mb="1"
              lineHeight={1.8}
            >
              Monarch Society
            </Text>
      </Box>
    </Box>
  );
};

export default AboutPage;
