import Carousel from '@src/components/Carousel/Carousel';
import Contact from '@src/components/Contact/Contact';
import Details from '@src/components/Details/Details';
import Feature from '@src/components/Feature/Feature';
import Hero from '@src/components/Hero/Hero';
import Separator from '@src/components/Separator/Separator';
import Services from '@src/components/Services/Services';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import MapComponent from '@src/components/Map/Map';

// import Map from '@src/components/Map/Map';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      


      <main>
        <Hero />
        <Feature />
        <Separator text='Gallery' />
        <Carousel />
        <Separator text='Details' />
        <Details />
        <Separator text='Services' />
        <Services />
        <Separator text='Contact' />
        <Contact />
        <Separator text='' />
        <MapComponent />     
      </main>

    </>
  );
}
