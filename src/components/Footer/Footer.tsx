import {
  Box,
  Button,
  Container,
  Stack,
  VisuallyHidden,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';

type FooterProps = {};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      bg='white'
      rounded={'full'}
      w={16}
      h={16}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box bg='white'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Text fontSize='x-large' fontWeight='bold'>
          Pledgerville, Inc.
        </Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>Services</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>&copy; 2023 Pledgerville, Inc. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebookF />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;