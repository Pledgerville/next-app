import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';


type MonarchSocietyProps = {};

const MonarchSociety: React.FC<MonarchSocietyProps> = () => {
  const data = {
    nodes: [
      { id: 'Pledgerville', color: '#e54304' },
      { id: 'Node 2', color: 'gray' },
      { id: 'Node 3', color: 'gray' },
      { id: 'Node 4', color: 'gray' },
      { id: 'Node 5', color: 'gray' },
    ],
    links: [
      { source: 'Pledgerville', target: 'Node 2' },
      { source: 'Node 3', target: 'Pledgerville' },
      { source: 'Node 4', target: 'Pledgerville' },
      { source: 'Node 5', target: 'Pledgerville' },
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
        zIndex={2}
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
    </Box>
  );
};

export default MonarchSociety;