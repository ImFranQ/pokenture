import { Box, Button, Link, Flex, Text, useColorModeValue, IconButton, useDisclosure, HStack, Stack } from "@chakra-ui/react"
import { NavbarProps } from "./types";
import pokeball from '../../assets/images/pokeball.svg'
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Brand = () => (
  <Flex as={RouterLink} to={'/'}>
    <img src={pokeball} width="32" />
    <Text fontSize="2xl" color={'primary.500'} ml={6} display={{ base: 'none', md: 'flex' }}>POKENTURE</Text>
  </Flex>
)

const Navbar = (props: NavbarProps) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { to: 'Pokemons', text: 'Pokemons' },
    { to: '/', text: 'Store' },
    { to: '/', text: 'Games' },
  ]

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex alignItems={'center'} justifyContent={'space-between'} h={16}>

        <Brand />

        <HStack spacing={8} alignItems={'center'}>
          <HStack
            as={'nav'}
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map(({to, text}) => <Link {...{to}} as={RouterLink}>{text}</Link>)}
          </HStack>
        </HStack>

        <Box>
          <Button 
            leftIcon={<FontAwesomeIcon icon={faGithub} />} 
            href="https://github.com/ImFranQ/pokenture" 
            target={'_blank'} 
            as={Link}
          >
            Github
          </Button>

          <IconButton
            ml={8}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>

      </Flex>
      
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {links.map(({ to, text }) => <Link {...{ to }} as={RouterLink}>{text}</Link>)}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar