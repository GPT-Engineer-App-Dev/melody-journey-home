import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaMusic, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white">
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" mt={8}>
          Welcome to the Band's Tour
        </Heading>
        <Text fontSize="xl">
          Join us on our journey across the world. Experience the music live!
        </Text>
        <Box>
          <Image src="/path/to/your/image.jpg" alt="Band Image" borderRadius="md" boxShadow="lg" />
        </Box>
        <Flex justify="center" wrap="wrap" spacing={4}>
          <Button leftIcon={<FaMusic />} colorScheme="teal" variant="solid" m={2}>
            Our Music
          </Button>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid" m={2}>
            Tour Dates
          </Button>
          <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid" m={2}>
            Buy Tickets
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;