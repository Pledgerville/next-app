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
  dots: false,
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
    'black-man-office.jpg',
    'dinner-time.jpg',
    'good-time.jpg',
  ];
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '10px', md: '30px' });
  const imageHeight = useBreakpointValue({ base: '300px', md: '600px' });
  const imageWidth = useBreakpointValue({ base: '80%', md: '100%' });
  return (
    <Container maxW='container.lg' mt={5}>
      <Box
        position={'relative'}
        height={imageHeight}
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
              height={imageHeight}
              position='relative'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              width={'full'}
            >
              <Image
                src={`${image}`}
                alt=''
                objectFit='cover'
                width={imageWidth}
                height={imageHeight}
                margin='0 auto'
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};
export default Carousel;