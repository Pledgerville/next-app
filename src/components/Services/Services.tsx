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
import React from 'react';

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
            <Heading size='md'>{title}</Heading>
            <Text>{description}</Text>
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
      title: 'SERVICES',
      description:
      "The Service Coordinator in the Multifamily Housing program will assist the elderly residents and non-elderly residents with disabilities living at Pledgerville to obtain needed supportive services from the community.  This assistance enables them to continue living as independently as possible in their homes.  The service coordinator is responsible for assuring that elderly residents with disabilities are linked to the supportive services they need to continue living independently in their current homes. The Service Coordinator program at Pledgerville will involve programs that will empower and transform the residents’ lives.  A Resident Council and Neighborhood Network Center will be established to help residents make transformative changes within themselves and encourage social and cultural activities and events."
    },
    {
      imageUrl: '/purple_flowers.jpg',
      title: 'INDEPENDENT LIVING',
      description:
        "The objectives and focus of the Pledgerville Resident Council include helping residents see how they can contribute to their community, bringing people together as often as possible, ensuring that programs represent the diversity of the residents, and encouraging multi-cultural activities and events.",
    },
    {
      imageUrl: '/wheel_chair.jpg',
      title: 'TAKE A VIRTUAL TOUR',
      description:
        'Experience Your New Home. We invite you to an exclusive Virtual Tour, where you’ll have the opportunity to explore your new home. Our communities come to life from every angle, with thoughtfully designed homes and engaging activities, all ready to enhance your lifestyle. And you can rest easy and move through your day with confidence, knowing that our compassionate caregivers are available any time, day or night. Our weekly housekeeping, laundry, linen services, restaurant, style, dining, social activities, daily fitness classes, and uncompromising life-enhancing amenities, ensure that you will be living your best life, every day!',
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
