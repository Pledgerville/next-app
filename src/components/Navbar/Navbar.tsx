import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type NavbarProps = {};
type NavItemProps = {
  children: React.ReactNode;
  isLast?: boolean;
  to: string;
};

const NavItem: React.FC<NavItemProps> = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      bg='white'
      height='64px'
      padding='6px 16px'
      justifyContent='space-between'
      align='center'
      wrap='wrap'
      as='nav'
    >
      <Box>
        <Text fontSize='lg' fontWeight='bold'>
          <Link href='/'>Pledgerville</Link>
        </Text>
      </Box>
      <Box flexBasis={{ base: '100%', md: 'auto' }}>
        <Flex
          align='center'
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/services' >Services</NavItem>
          <NavItem to='/about-us'>About Us</NavItem>
          <NavItem to='/contact-us'>Contact Us</NavItem>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Navbar;
