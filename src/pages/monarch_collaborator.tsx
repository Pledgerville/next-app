import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, VStack } from '@chakra-ui/react';

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
        maxWidth="600px" 
        width="100%"
        bg="white"
        boxShadow="md"
        borderRadius="lg"
        p={6}
      >
       <Heading as="h1" mb={6} textAlign="center" fontFamily="Linotype Didot">
          Join The Journey
        </Heading>
        
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" borderRadius="xl" border="2px solid #ccc" value={name} onChange={(e) => setName(e.target.value)} required />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" borderRadius="xl" border="2px solid #ccc" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>
            <FormControl id="message" >
              <FormLabel>Message</FormLabel>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                borderRadius="xl" 
                border="2px solid #ccc"
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
