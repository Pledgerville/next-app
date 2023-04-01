import {
  Container,
  Box,
  IconButton,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel: React.FC = () => {
  const images: string[] = [
    'coffee-time.jpg',
    'black-man-red.jpg',
    'dinner-time.jpg',
    'good-time.jpg',
  ];
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
    <Container maxW='container.lg'>
      <Box
        position={'relative'}
        height={'600px'}
        width={'full'}
        overflow={'hidden'}
      >
        {/* CSS files for react-slick */}
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        {/* Left Icon */}
        <IconButton
          aria-label='left-arrow'
          colorScheme='messenger'
          borderRadius='full'
          position='absolute'
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label='right-arrow'
          colorScheme='messenger'
          borderRadius='full'
          position='absolute'
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
          {images.map((image, index) => (
            <Box
              key={index}
              height={'4xl'}
              position='relative'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              width={'full'}
            >
              <Image
                src={`${image}`}
                alt=''
                objectFit='inherit'
                boxSize='4xl'
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};
export default Carousel;
