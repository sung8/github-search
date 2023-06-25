import React from 'react'
import { Input, Button } from '@/app/chakra'

const Search = () => {
  return (
    <form>
        <Input 
        variant={"outline"} 
        placeholder={"Type a username (i.e. sung8)"}
        focusBorderColor='green.500'
        />
        <Button size="md" type='submit' colorScheme='whatsapp' mt={4}>
            Search
        </Button>
    </form>
  )
}

export default Search;