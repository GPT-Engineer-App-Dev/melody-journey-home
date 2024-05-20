import { Container, Box, VStack, Text, Heading, Image, Button, SimpleGrid, Flex, Link, IconButton, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box
        bgImage="url('/path-to-your-hero-image.jpg')"
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
      >
        <Heading as="h1" size="4xl" mb={4}>Band Name</Heading>
        <Text fontSize="xl" mb={8}>A brief description or tagline capturing the band's style</Text>
        <Button colorScheme="teal" size="lg">Buy Tickets</Button>
      </Box>

      {/* Upcoming Tour Dates */}
      <Box py={16} bg="gray.100">
        <Heading as="h2" size="2xl" textAlign="center" mb={8}>Upcoming Tour Dates</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <Box bg="white" p={6} boxShadow="md" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Date</Text>
            <Text>Location</Text>
            <Button mt={4} colorScheme="teal">Buy Tickets</Button>
          </Box>
          {/* Repeat the above Box for each tour date */}
        </SimpleGrid>
      </Box>

      {/* Music Player */}
      <Box py={16} textAlign="center">
        <Heading as="h2" size="2xl" mb={8}>Listen to Our Music</Heading>
        <Box as="iframe" src="https://open.spotify.com/embed/album/your-album-id" width="300" height="380" frameBorder="0" allow="encrypted-media"></Box>
      </Box>

      {/* Band Members */}
      <Box py={16} bg="gray.100">
        <Heading as="h2" size="2xl" textAlign="center" mb={8}>Meet the Band</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          <Box textAlign="center">
            <Image borderRadius="full" boxSize="150px" src="/path-to-member-photo.jpg" alt="Band Member" mb={4} />
            <Text fontSize="lg" fontWeight="bold">Member Name</Text>
            <Text>Instrument</Text>
          </Box>
          {/* Repeat the above Box for each band member */}
        </SimpleGrid>
      </Box>

      {/* Social Media Links */}
      <Box py={16} textAlign="center">
        <Heading as="h2" size="2xl" mb={8}>Follow Us</Heading>
        <Flex justifyContent="center" spacing={4}>
          <IconButton as={Link} href="https://facebook.com" icon={<FaFacebook />} size="lg" isRound="true" mx={2} />
          <IconButton as={Link} href="https://twitter.com" icon={<FaTwitter />} size="lg" isRound="true" mx={2} />
          <IconButton as={Link} href="https://instagram.com" icon={<FaInstagram />} size="lg" isRound="true" mx={2} />
          <IconButton as={Link} href="https://spotify.com" icon={<FaSpotify />} size="lg" isRound="true" mx={2} />
        </Flex>
      </Box>

      {/* Newsletter Signup */}
      <Box py={16} bg="gray.100">
        <Heading as="h2" size="2xl" textAlign="center" mb={8}>Stay Updated</Heading>
        <Flex justifyContent="center">
          <FormControl id="email" maxW="md">
            <FormLabel>Email address</FormLabel>
            <Input type="email" mb={4} />
            <Button colorScheme="teal" size="lg">Sign Up</Button>
          </FormControl>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;