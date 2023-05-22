import { MotionBox } from '../components/MotionElements/MotionElements';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as TWEEN from '@tweenjs/tween.js';

type MonarchSocietyProps = {};

const MonarchSociety: React.FC<MonarchSocietyProps> = () => {
  const data = {
    nodes: [
      { id: 'Pledgerville', color: 'purple' },
      { id: 'Node 2', color: 'gray' },
      { id: 'Node 3', color: 'gray' },
    ],
    links: [
      { source: 'Pledgerville', target: 'Node 2' },
      { source: 'Node 2', target: 'Node 3' },
      { source: 'Node 3', target: 'Pledgerville' },
    ],
  };

  return (
    <Box h="100vh" position="relative">
      <Flex
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        alignItems="center"
        justifyContent="center"
        color="black"
        zIndex={2} // Increase the z-index value
      >
        <Flex flex="3" justifyContent="center" alignItems="center" maxWidth="50%">
          <ForceGraph3D
            graphData={data}
            nodeLabel="id"
            nodeColor={(node: any) => node.color}
            linkAutoColorBy="source"
            linkThreeObjectExtend={true}
          />
        </Flex>
      </Flex>
      <MotionBox
        w="100%"
        h="100vh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        position="relative"
        zIndex={1} // Decrease the z-index value
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
          justifyContent="center"
          color="white"
          zIndex={2} 
          px={{ base: 4, md: 12 }}
        >
          <VStack spacing={4} textAlign={{ base: 'center', md: 'left' }} paddingBottom="360">
            <Heading fontFamily="Linotype Didot" as="h2" size="2xl" mb="3" mt={{ base: 1, md: 10 }}>
              Monarch Society
            </Heading>
          </VStack>
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default MonarchSociety;
``
