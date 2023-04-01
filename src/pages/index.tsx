import Carousel from '@src/components/Carousel/Carousel';
import Contact from '@src/components/Contact/Contact';
import Feature from '@src/components/Feature/Feature';
import Hero from '@src/components/Hero/Hero';
import Head from 'next/head';

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
        <Carousel />
        <Contact />
      </main>
    </>
  );
}
