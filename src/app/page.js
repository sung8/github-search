"use client";
import { Text, Container } from '@/app/chakra';
import Navbar from './components/Navbar';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import { useState } from 'react';

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(userData);
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text fontSize={"2xl"} textAlign={"center"} my={4}>Search Users on GitHub</Text>
      <Search setUserData={(res) => setUserData(res)} setLoading={setLoading}/>

      <UserProfile setUserData={setUserData}/>
    </Container>
  );
}
