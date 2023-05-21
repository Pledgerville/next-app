import { MotionBox } from '../components/MotionElements/MotionElements';
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

type AboutUsProps = {};

const AboutPage: React.FC<AboutUsProps> = () => {
  return (
    <Box h='100vh' >
      <Flex flexWrap='wrap' alignItems='center' justifyContent='center'>
        <MotionBox
          w={{ base: '100%', md: '50%' }}
          h='100vh'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          <Image
            src='/brick_dof.jpg'
            alt='description-of-your-image'
            h='100%'
            w='100%'
            objectFit='cover'
          />
        </MotionBox>
        <MotionBox
          w={{ base: '100%', md: '50%' }}
          h='100vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          overflowY='scroll'
        >
          <Box
            maxW={{ base: '100%', md: '80%' }}
            mx='auto'
            textAlign={{ base: 'center', md: 'left' }}
            overflowY='scroll'
          >
            <Heading
              fontFamily='Linotype Didot'
              as='h2'
              size='2xl'
              mb='3'
              mt={{ base: 1, md: 10 }}
            >
              About Us
            </Heading>
            <Text
              fontFamily='Linotype Didot'
              fontSize='xl'
              mb='2'
              lineHeight={1.5}
            >
              In May 1972, Rev. T.G. Pledger wrote a note that expressed concern
              for the welfare of the community&rsquo;s seniors and handicapped.
              In 1977, the note inspired nine members of the Greater Community
              Baptist Church to form a Planning Committee to pursue building a
              facility to meet the needs of these individuals. The committee was
              introduced to a Planning, Architect, Engineering Management, and
              Consulting Firm by Mr. Ken Thomas. The firm submitted a proposal
              for a senior citizens&rsquo; housing project, but it was not
              approved by HUD. With legal guidance from Bryce D. Wisner, Esq.,
              the Planning Committee reported its findings to the Executive
              Board of Greater Community Baptist Church in July 1978. As a
              result, a Board of Directors was established, and the chartered
              name PLEDGERVILLE SENIOR CITIZENS VILLA, INC. was chosen.
            </Text>
            <Text
              fontFamily='Linotype Didot'
              fontSize='xl'
              mb='1'
              lineHeight={1.8}
            >
              The corporation hired Barker Management, Edward C. Barker and
              Associates, and a consultant. After several proposals and changes,
              the project was funded in 1980 for $3.99 million. The Barkers
              submitted another proposal which was approved for $6,051,700.
              Occupancy occurred in March 1984, and the facility currently
              boasts a 90% occupancy rate.
            </Text>
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default AboutPage;
