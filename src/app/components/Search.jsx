"use client";
import React, { useState } from 'react';
import { Input, Button } from '@/app/chakra';

const Search = () => {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('You searched for query');
    }
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