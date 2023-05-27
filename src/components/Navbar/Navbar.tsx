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
  IconButton,
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
      as='header'
      position='fixed'
      width='100%'
      top={0}
      zIndex={1}
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
          <NavItem to='/about-us'>About Us</NavItem>
          <NavItem to='/calendar'>Calendar</NavItem>
          <Menu>
            <MenuButton
              className='menu-btn'
              as={Button}
              alignItems='center'
              cursor='pointer'
              fontFamily='Linotype Didot'
              fontSize='xl'
              fontWeight='bold'
              rightIcon={<ChevronDownIcon color='black' />}
              backgroundColor='white'
              color='black'
              _hover={{ backgroundColor: 'transparent' }}
            >
              More
            </MenuButton>
            <MenuList fontFamily='Linotype Didot'>
              <MenuItem>
                <Link href='/monarch'>Monarch Society</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/events'>Events</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/news'>News</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/contact-us'>Contact Us</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
