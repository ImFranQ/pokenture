import { Box, Button, Link, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { NavbarProps } from "./types";
import pokeball from '../../assets/images/pokeball.svg'
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Brand = () => (
  <Flex as={RouterLink} to={'/'}>
    <img src={pokeball} width="32" />
    <Text fontSize="2xl" color={'primary.500'} ml={6}>POKENTURE</Text>
  </Flex>
)

const Navbar = (props: NavbarProps) => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex alignItems={'center'} justifyContent={'space-between'} h={16}>
        <Brand />

        <Box>
          <Link to={'/pokemons'} as={RouterLink} mr={6}>Pokemons</Link>
          <Link to={'/'} as={RouterLink} mr={6}>Store</Link>
          <Link to={'/'} as={RouterLink} mr={6}>Games</Link>
        </Box>

        <Button 
          leftIcon={<FontAwesomeIcon icon={faGithub} />} 
          href="https://github.com/ImFranQ/pokenture" 
          target={'_blank'} 
          as={Link}
        >
          Github
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar