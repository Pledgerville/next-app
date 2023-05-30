import React, { useState } from 'react';
import moment from 'moment-timezone';
import { Box, Flex, Image, Text, Input, Stack } from '@chakra-ui/react';

const FeaturedEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Meditation with Nadi',
      date: '2023-05-30',
      description: 'Meditation with Nadi is relaxing and fulfilling. Take time to reflect and become one with nature. Slots are limited.',
      image: '/meditation.jpg',
    },
    {
      id: 2,
      title: "Pledgerville's Anniversary",
      date: '2023-06-29',
      description: "Come celebrate Pledgerville's Anniversary on November 25th, 2023. Come as you are and bring your glowing selves.",
      image: '/celebration.jpg',
    },

    {
      id: 3,
      title: 'Water Workout',
      date: '2023-06-19',
      description: 'Meditation with Nadi is relaxing and fulfilling. Take time to reflect and become one with nature. Slots are limited.',
      image: '/play-time.jpg',
    },
    {
      id: 4,
      title: "Tea Time Book Club",
      date: '2023-6-25',
      description: "Please join us as we take a visit to the local Mahogany Tea Shop. Bring your favorite mug and book",
      image: '/computers.jpg',
    },
    {
      id: 5,
      title: 'Walk & Talk',
      date: '2023-06-10',
      description: 'Come take a walk and chat with your fellow residents as we visit local shops.',
      image: '/hand-bag.jpg',
    },
    {
      id: 6,
      title: "Church",
      date: '2023-06-25',
      description: "Weekly Sunday Service",
      image: '/mountain_sunrise.jpg',
    },
  ];

  const view_today = moment().tz('America/Los_Angeles').format('MMMM D, YYYY');
  const today = moment().tz('America/Los_Angeles').format('YYYY-MM-DD');
  const [searchValue, setSearchValue] = useState('');

  const filteredEvents = upcomingEvents.filter((event) =>
    event.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Box>
      <Text fontFamily="Linotype Didot" align="center" fontSize="2xl" fontWeight="extrabold" mb={4}>
        Featured Events
      </Text>
      <Text fontFamily="Linotype Didot" align="center" mb={4}>
        {view_today}
      </Text>
      <Box mb={4} maxWidth="400px" mx="auto">
        <Input
          borderRadius="xl"
          border="2px solid #ccc"
          boxShadow="sm"
          placeholder="Search events"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Box>
      <Flex justify="center">
        <Box maxHeight="600px" overflow="auto"> {/* Container with scroll */}
          <Stack spacing={3} maxWidth="1200px">
            {filteredEvents.map((event) => (
              <Flex
                key={event.id}
                align="center"
                mb={2}
                border="2px solid #ccc"
                borderRadius="md"
                p={4}
                maxWidth="100%"
                boxShadow="md"
                position="relative"
                _before={
                  today === event.date
                    ? {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '7px',
                        bg: '#2036EC',
                        borderRadius: 'md',
                      }
                    : {}
                }
                bg="white"
              >
                <Box boxShadow="xl" flexShrink={0} mr={4}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    objectFit="cover"
                    borderRadius="xl"
                    boxSize="200px"
                  />
                </Box>
                <Box>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    {event.title}
                  </Text>
                  <Text fontFamily="Linotype Didot" fontWeight="slight">Date: {event.date}</Text>
                  <Text fontFamily="Linotype Didot" fontWeight="slight">Description: {event.description}</Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default FeaturedEvents;
