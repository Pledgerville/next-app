import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Icon,
  Textarea,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
      fontFamily='Linotype Didot'
      fontSize='xl'
      fontWeight='bold'
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
      <Box fontFamily='Linotype Didot'>
        <Text fontSize='3xl' fontWeight='bold'>
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
          <NavItem to='/services'>Services</NavItem>
          <NavItem to='/about-us'>About Us</NavItem>
          <Menu>
            <MenuButton
              as={Button}
              alignItems='center'
              cursor='pointer'
              fontFamily='Linotype Didot'
              fontSize='xl'
              fontWeight='bold'
              rightIcon={<ChevronDownIcon />}
              backgroundColor='white'
            >
              More
            </MenuButton>
            <MenuList fontFamily='Linotype Didot'>
              <MenuItem>
                <Link href='/monarch'>Monarch Society</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/contact-us'>Calendar</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/contact-us'>Events</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/contact-us'>News</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
