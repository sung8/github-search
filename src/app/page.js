import { Text, Container } from '@/app/chakra';
import Navbar from './components/Navbar';
import Search from './components/Search'

export default function Home() {
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text fontSize={"2xl"} textAlign={"center"} my={4}>Search Users on GitHub</Text>
      <Search />
    </Container>
  );
}
