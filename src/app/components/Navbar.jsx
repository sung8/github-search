import React from 'react'
import { Box, Button, Flex } from '@/app/chakra'
import { Image } from '@/app/chakra-next'

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
        <Box position={"relative"} aspectRatio={5/3} minHeight={20}>
            <Image src={"/github-logo.png"} fill alt="GitHub logo" sx={{filter: "invert(1)"}}/>
        </Box>
        <Box>
            <Button size="md" colorScheme='whatsapp'>Search History</Button>
        </Box>
    </Flex>
  )
}

export default Navbar;

