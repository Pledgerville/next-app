import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';

const CollaboratorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        maxWidth="600px" // Adjust the maxWidth value as needed
        width="100%"
        bg="white"
        boxShadow="md"
        borderRadius="lg"
        p={6}
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default CollaboratorForm;
