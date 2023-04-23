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
  
  type AboutUsProps = {};
  
  const About_Us: React.FC<AboutUsProps> = () => {
    return (
      <Box pos="relative" w="100%" h="70vh" overflow="hidden">
        <Image
          src="/green-monarch-dof.jpg"
          alt="description-of-your-image"
          h="100%"
          w="100%"
          objectFit="cover"
          pos="absolute"
          top="0"
          left="0"
          zIndex={-1}
        />
        <Box
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.6)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="auto"
        >
          <Box maxW="container.xl" mx="auto" px={4} py={8} bg="transparent">
            <Heading as="h2" size="xl" mb="5" color="white">
              About Us
            </Heading>
            <Text fontSize="2xl" textAlign="center" mb="5" fontWeight="semibold" color="white">
            In May 1972, while reflecting on the welfare of the community and Pacoima, Rev. T.G. Pledger wrote a note to the Lord. Five years later, the note resurfaced, prompting Rev. Pledger to take action. On December 28, 1977, nine members of the Greater Community Baptist Church in Pacoima met to discuss the note's contents and decided to pursue the erection of a building for the seniors and handicapped of the community. A Planning Committee was formed, chaired by Mrs. Earlene Stepney, with Mrs. Eula C. Rose appointed as secretary. The committee requested information from the Department of Housing and Urban Development (HUD) in Washington, D.C., and was introduced to a Planning, Architect, Engineering Management, and Consulting Firm by Mr. Ken Thomas, Deputy to former councilman of the First Council District, Mr. Bob Ronka. The firm submitted a proposal to HUD for a senior citizens housing project, which was not approved. Legal guidance was obtained from Bryce D. Wisner, Esq., and in July 1978, the Planning Committee reported its findings to the Executive Board of Greater Community Baptist Church. A Board of Directors was established, and the chartered name PLEDGERVILLE SENIOR CITIZENS VILLA, INC. was chosen. The corporation secured the services of Barker Management Inc., Mr. Byron Barker, President, and Edward C.Barker and Associates, Architects, and with the guidance of the Consultant, new proposals were submitted to HUD
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default About_Us;