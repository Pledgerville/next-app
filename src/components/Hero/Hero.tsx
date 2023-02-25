import {
  Box,
  Button,
  Flex,
  Heading,
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
      {/* <Box height={300} backgroundColor='blue.100'>
        <Flex
          paddingTop={5}
          flexDirection='column'
          maxW='80%'
          margin='0 auto'
          align='center'
        >
          <Flex justify='center'></Flex>
          <Flex justify='center'>
            <Text fontSize='2xl' noOfLines={3}></Text>
          </Flex>
        </Flex>
      </Box> */}
      <Flex
        w={'full'}
        h={'50vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'80%'} align={'flex-center'} spacing={6} margin='0 auto'>
            <Heading alignItems={'flex-center'} mb={2} color={'white'}>
              SENIOR LIVING: BEYOND YOUR EXPECTATIONS
            </Heading>
            <Text
              color={'white'}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
            >
              Nestled against the iconic Hollywood Hills and surrounded by
              world-class arts, culture, and cuisine, you will find a unique
              lifestyle opportunity in Los Angeles, California. At Hollywood
              Hills Senior Living, we balance professional care with the ability
              to live as independently as possible. We offer Assisted Living,
              Memory Care, and Respite Care apartments.
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};
export default Hero;
