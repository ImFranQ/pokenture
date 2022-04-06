import { Box, Container, Grid, GridItem, Button, Flex, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

import Header from "../../components/Header"
import PokemonPreview from "../../components/PokemonPreview"

const breakPoints = {
  base: 'repeat(2, 1fr)',
  md: 'repeat(3, 1fr)',
  lg: 'repeat(4, 1fr)',
}


const Favorites = () => {
  return (
    <>
      <Box textAlign={'center'}>
        <Text fontSize={'xl'} mb={4} color={'primary.500'}>TOP FAVORITES</Text>
      </Box>
      <Grid templateColumns={breakPoints} gap={6}>
        <GridItem>
          <PokemonPreview name={'charmander'} />
        </GridItem>
        <GridItem>
          <PokemonPreview name={'charizard'} />
        </GridItem>
        <GridItem>
          <PokemonPreview name={'ponyta'} />
        </GridItem>
        <GridItem>
          <PokemonPreview name={'zigzagoon'} />
        </GridItem>
      </Grid>
    </>
  )
}

const Welcome = () => {
  return (
    <Box>
      <Header />
      <Container maxW={'6xl'} py={12}>
        <Favorites />
        <Flex justifyContent={'center'} mt={4}>
          <Button to="/pokemons" as={RouterLink}>See all pokemons</Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Welcome