import { Container, Flex, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Feature: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      <Container maxW="8xl" paddingLeft={200} paddingBottom={2} paddingTop={60}>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={50}>
          <Flex direction="row" gap={5}>
            <Flex direction="column" w="full" h="full" alignItems="stretch" flexGrow={1} gap={3}>
              <motion.div variants={itemVariants}>
                <Image src="/black-man-cooking.jpg" alt="Black man cooking" rounded="md" objectFit="cover" width="600px" height="390px" paddingTop={50} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Image src="/computers.jpg" alt="Black man cooking" rounded="md" objectFit="cover" width="600px" height="360px" paddingTop={78} />
              </motion.div>
            </Flex>
            <Flex direction="column" gap={-30} maxH="390px">
              <motion.div variants={itemVariants}>
                <Heading fontSize="normal" fontWeight="bold" noOfLines={1}>
                  {/* Add your heading text here */}
                </Heading>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Heading noOfLines={1} paddingLeft={140} >Home Is Here</Heading>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Text style={{ wordWrap: 'break-word'} } paddingTop={2}>
                  Our senior community is the perfect place to benefit from round-the-clock<br/> 
                  support and enjoy all the advantages of a vibrant lifestyle. As a resident of <br/>
                  our independent living community, you can look forward to taking part in<br/> 
                  exciting community events including group exercises, game and movie night<br/> 
                  or morning coffee in our Great Room.  Whether you desire to forge new relationships,<br/>
                  explore new hobbies, or simply unwind and de-stress, our senior community is the 
                  perfect haven for you or your loved one.
                </Text>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Text paddingTop={260}>
                  In contemporary times, computer proficiency is becoming vital for seniors<br/>
                  to navigate their daily routines. It is crucial for them to possess a thorough<br/>
                  comprehension of computers and software applications to communicate with <br/>
                  essential services, organizations, physicians, and relatives. Personal computers <br/>
                  and computer literacy greatly improve and simplify the residents' search for financial autonomy while also offering prospects for education, socializing, and community-related information.
                </Text>
              </motion.div>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Container>
    </motion.div>
  );
};

export default Feature;