import { Flex, Divider, Text } from '@chakra-ui/react';
import React from 'react';

type SeparatorProps = {
  text: string;
};

const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return (
    <Flex mt={10} align='center'>
      <Divider display={'flex'} />
      <Text fontWeight={'bold'} fontSize={'2xl'}>
        <span>{text}</span>
      </Text>
      <Divider />
    </Flex>
  );
};
export default Separator;
