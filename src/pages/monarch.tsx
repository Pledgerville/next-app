import { MotionBox } from '../components/MotionElements/MotionElements';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type AboutUsProps = {};

const MonarchSociety: React.FC<AboutUsProps> = () => {
  return (
    <Box h="100vh" position="relative" >
      <MotionBox
        w={{ base: '100%', md: '40%' }}
        h="100vh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        position="relative"
        zIndex={1}
        
      >
        <Image
          src="/monarch_society.jpg"
          alt="description-of-your-image"
          h="100%"
          w="100%"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.6)"
        />
        <Flex
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={40}
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          color="white"
          zIndex={2}
          px={{ base: 4, md: 16 }}
        >
          <VStack spacing={4} textAlign={{ base: 'center', md: 'left' }} paddingBottom = "450">
            <Heading
              fontFamily="Linotype Didot"
              as="h2"
              size="2xl"
              mb="3"
              mt={{ base: 1, md: 10 }}
            >
              Monarch Society
            </Heading>
          </VStack>
        </Flex>
      </MotionBox>
      <Box
        position="absolute"
        top={350}
        left={600}
        right={1}
        bottom={0}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        px={8}
        color="black"
      >
            <Text
              fontFamily="Linotype Didot"
              fontSize="md"
              mb="400"
              lineHeight={1.5}
              textAlign ={'left'}
            >
            In the quest for personal growth and spiritual evolution, a group of individuals came together, <br/> 
            inspired by the transformative qualities of the monarch butterfly. They formed a monarch group, <br/> 
            united by their shared values and the desire to work collectively towards positive change. The group<br/> 
            embodied the essence of change and transformation, recognizing that just as the butterfly undergoes a <br/> 
            remarkable metamorphosis, they too can undergo profound personal growth and emerge as their best selves.<br/> 
            Within the monarch group, strength and endurance were revered virtues. They drew inspiration from the monarch<br/> 
            butterfly's incredible migratory journey, spanning thousands of miles, which symbolized the indomitable spirit<br/> 
            and resilience needed to face life's challenges. Like the butterflies, they understood that strength comes from<br/> 
            facing adversity head-on, persisting despite the obstacles, and persevering in their pursuit of a better future.<br/> 
            Hope and resilience were the guiding lights that illuminated the path of the monarch group. They saw the monarch<br/>
            butterflies' annual migration as a testament to the power of hope, even in the face of overwhelming odds. Each<br/>
            year, despite the losses suffered along the way, the butterflies embarked on their journey with unwavering determination,
            believing in the possibility of reaching their destination. Similarly, the members of the monarch group embodied hope 
            and resilience, finding solace in the knowledge that their collective efforts, no matter how small, could make a difference in the world.<br/>
            <br/>

            Trusting their journey was a fundamental principle within the monarch group. Just as the butterflies set off on their<br/>
            migratory path, unaware of their ultimate destination, the group members understood the importance of having<br/> 
            faith in their own journeys. They recognized that not every individual would witness the culmination of their<br/>
            efforts, but by trusting in the value of their work and passing the torch to future generations, they could create a lasting impact.
            The monarch group's mission centered on spiritual evolution, embracing personal growth beyond<br/>
            one lifetime. They explored interconnectedness, dedicating themselves to spiritual development shaping future <br/>
            incarnations. Monarch sightings urged them to embrace change, trust their path, and balance the spiritual and <br/>
            physical. These encounters reminded them of hidden strength, resilience, and spiritual growth potential. In communion with nature, 
            they celebrated the transformative power of the monarch butterfly, guiding their collective journey.
            <br/>
            <br/>
              <Link href="/monarch_nodes" style={{ color: 'blue' }}>
              Click here to be a Monarch. 
              </Link>
              
            </Text>
          
      </Box>
    </Box>
  );
};

export default MonarchSociety;