import {
  Card,
  CardBody,
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  Container,
  Box,

} from '@chakra-ui/react';
import  React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type ServiceProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const Service: React.FC<ServiceProps> = ({ imageUrl, title, description }) => {
  return (
    <Flex>
      <Card maxW='md'>
        <CardBody p={2}>
          <Image
            src={imageUrl}
            alt={title}
            borderRadius='lg'
            minWidth='300px'
            height='200px'
          />
          <Stack mt='6' spacing='3'>
            <Heading  fontFamily="Linotype Didot" fontSize="xl" size='md'>{title}</Heading>
            <Text fontFamily="Linotype Didot" fontSize="xl"> {description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      imageUrl: '/play-time.jpg',
      title: 'SERVICES COORDINATOR',
      description:
      "At Pledgerville's senior citizens housing, the Service Coordinator will aid both elderly and non-elderly residents with disabilities in acquiring necessary community support services. This aid will enable them to maintain as much independence as possible while living in their homes. The Service Coordinator's responsibility includes ensuring that elderly residents with disabilities receive access to the required supportive services to continue their independent living. In addition to this, the Service Coordinator program will initiate empowering programs at Pledgerville to bring about positive changes in the residents' lives. To foster social and cultural activities and events, a Resident Council and Neighborhood Network Center will be established to promote transformative change among residents."
    },
    {
      imageUrl: '/purple_flowers.jpg',
      title: 'INDEPENDENT LIVING',
      description:
      "The Pledgerville Resident Council aims to promote community involvement by encouraging residents to contribute and organizing diverse events that bring people together. They also strive to ensure that programs are inclusive and represent the diversity of the community, while encouraging multi-cultural activities and events. In turn, the Pledgerville Neighborhood Networks Center is committed to providing residents with access to technology and the internet, as well as local services and healthcare options. They offer computer training in a supportive and non-intimidating environment, allowing for shared learning and community involvement. Together, these initiatives work towards creating an inclusive and empowered community where residents feel valued, supported, and engaged."
    },
    {
      imageUrl: '/wheel_chair.jpg',
      title: 'TAKE A VIRTUAL TOUR',
      description:
      "Come and explore all that Pledgerville has to offer with an exclusive tour of your new home. From the first shopping center established after the development to a variety of engaging activities, our community comes to life from every angle, enriching your lifestyle. You'll gain insight into the pride that many residents feel when reflecting on the history and visual imagery that our six-story, tri-level building brings. Additionally, during the exclusive tour of your new home, you will have the opportunity to meet our dedicated caregivers, who are available 24/7 to assist you with any needs that may arise. By interacting with our compassionate staff, you will gain a sense of the genuine care and support they provide to our residents on a daily basis."
    },
  ];
  return (
    <Container maxW='container.lg' mt={10} centerContent overflow='hidden'>
      <Box
        display='flex'
        flexDirection='row'
        gap='6'
        justifyItems='center'
        justifyContent='space-evenly'
      >
        {services.map((service, index) => (
          <Flex key={index}>
            <Service
              title={service.title}
              imageUrl={service.imageUrl}
              description={service.description}
            />
          </Flex>
        ))}
      </Box>
    </Container>
  );
};
export default Services;
