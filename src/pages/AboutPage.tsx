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
  
  const AboutPage: React.FC<AboutUsProps> = () => {
    return (
      <Box h="100vh" overflowY="scroll">
        <Box pos="relative" w="100%" h="70vh">
          <Image
            src="/green-monarch-dof.jpg"
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
            bg="rgba(0, 0, 0, 0.4)"
          />
        </Box>
        <Box
          maxW="container.xl"
          mx="auto"
          px={4}
          py={8}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          my={8}
          overflow="scroll"
          maxHeight="60vh"
        >
          <Heading as="h2" size="xl" mb="5">
            About Us
          </Heading>
          <Text fontSize="xl" textAlign="center" mb="5" fontWeight="semibold">
            In May 1972, while reflecting on the welfare of the community and Pacoima, Rev. T.G. Pledger wrote a note to the Lord. Five years later, the note resurfaced, prompting Rev. Pledger to take action. 
          </Text>
          <Text fontSize="xl" textAlign="center" mb="5" fontWeight="semibold">
           In 1977, nine members of the Greater Community Baptist Church in Pacoima gathered to discuss a note left by Rev. T. G. Pledger that expressed concern for the welfare of the community's seniors and handicapped. The group formed a Planning Committee led by Mrs. Earlene Stepney and Mrs. Eula C. Rose to pursue building a facility to meet these needs. After seeking information from the Department of Housing and Urban Development (HUD) in Washington, D.C., the committee was introduced to a Planning, Architect, Engineering Management, and Consulting Firm by Mr. Ken Thomas. The firm submitted a proposal for a senior citizens housing project, but it was not approved by HUD. With legal guidance from Bryce D. Wisner, Esq., the Planning Committee reported its findings to the Executive Board of Greater Community Baptist Church in July 1978. As a result, a Board of Directors was established, and the chartered name PLEDGERVILLE SENIOR CITIZENS VILLA, INC. was chosen.          </Text>
          <Text fontSize="xl" textAlign="center" mb="5" fontWeight="semibold">
          </Text>
          <Text fontSize="xl" textAlign="center" mb="5" fontWeight="semibold">
           The corporation secured the services of Barker Management Inc., Mr. Byron Barker, President, and Edward C.Barker and Associates, Architects, and with the guidance of the Consultant, new proposals were submitted to HUD requiring many changes before the project was finally funded in September 1980 in the amount of $3.99 million. The Barkers drafted another proposal for the project, which they resubmitted to HUD, and it was approved at a total cost of $6,051,700.00. Groundbreaking ceremonies were held on February 19, 1983, and construction began a week later. Occupancy occurred in March 1984, and the facility currently boasts a 90% occupancy rate. 
          </Text>
          <Text fontSize="xl" textAlign="center" mb="5" fontWeight="semibold">
           In September 1980, Pledgerville Senior Citizens Villa, Inc. secured funding of $3.99 million from HUD with the help of Barker Management Inc., led by President Byron Barker, and Edward C. Barker and Associates, Architects. However, the project required additional funding to cover the total cost of $6,051,700.00. To secure the remaining funding, the Barkers drafted a new proposal that was approved by HUD. Groundbreaking ceremonies were held on February 19, 1983, and construction began a week later. By March 1984, the facility was ready for occupancy and currently has a 90% occupancy rate.
          </Text>
          <Text fontSize="2xl" textAlign="center" mb="5" fontWeight="semibold">
            
          </Text>
          <Text fontSize="2xl" textAlign="center" mb="5" fontWeight="semibold">
            
          </Text>
          <Text fontSize="2xl" textAlign="center" mb="5" fontWeight="semibold">
            
          </Text>
        </Box>
      </Box>
    );
  };
  
  export default AboutPage;