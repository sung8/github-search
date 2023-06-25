"use client";
import React, { useState } from 'react';
import { Input, Button, useToast } from '@/app/chakra';

const Search = () => {
    const [query, setQuery] = useState('')
    const toast = useToast(); 
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!query) return;
      try {
        const res = await fetch(`https://api.github.com/users/${query}`);
        const data = await res.json();
        console.log(data);
        console.log("data is here");
        if (data.message) {
          return toast({
            title: "Error",
            description: data.message === "Not Found" ? "User not found" : data.message,
            status: "error",
            duration: 3000,
            isClosable: true
          }) 
        }
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true
        })
      }
    };
  return (
    <form onSubmit={handleSubmit}>
        <Input 
        variant={"outline"} 
        placeholder={"Type a username (i.e. sung8)"}
        focusBorderColor='green.500'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <Button size="md" type='submit' colorScheme='whatsapp' mt={4} disabled={!query} opacity={!query ? 0.5 : 1}>
            Search
        </Button>
    </form>
  )
}

export default Search;