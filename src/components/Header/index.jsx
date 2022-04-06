import { Box, Flex, Text } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box h={500} className="bg-image">
      <Box bg="rgba(0,0,0,0.5)" h={'100%'} >
        <Flex alignItems={'center'} justifyContent={'center'} h={'100%'} flexDir={'column'}>
          <Text fontSize={'6xl'}>Pokenture</Text>
          <Text fontSize={'4xl'}>Go on a Pokémon adventure</Text>
        </Flex>        
      </Box>
    </Box>
  )
}

export default Header