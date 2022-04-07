import { Box, Button, Link, Flex, Text, useColorModeValue, IconButton, useDisclosure, HStack, Stack } from "@chakra-ui/react"
import { NavbarProps } from "./types";
import pokeball from '../../assets/images/pokeball.svg'
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import SearchInput from "../SearchInput";

const Brand = () => (
  <Flex as={RouterLink} to={'/'}>
    <img src={pokeball} width="32" />
    <Text fontSize="2xl" color={'primary.500'} ml={6} display={{ base: 'none', xl: 'flex' }}>POKENTURE</Text>
  </Flex>
)

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { to: 'Pokemons', text: 'Pokemons' },
    { to: '/', text: 'Store' },
    { to: '/', text: 'Games' },
  ]

  const searchHandler = (term:string) => {
    navigate(`/pokemon/${term.toLowerCase()}`)
  }

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex alignItems={'center'} justifyContent={'space-between'} h={16}>

        <Brand />

        <HStack spacing={8} alignItems={'center'} flexGrow={1} justifyContent={'space-between'} mx={4}>
          <HStack
            as={'nav'}
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map(({ to, text }, index) => <Link key={index} {...{to}} as={RouterLink}>{text}</Link>)}
          </HStack>

          <HStack display={{ base: 'none', md: 'flex' }}>
            <SearchInput onSubmit={searchHandler} />
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
            ml={4}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>

      </Flex>
      <HStack display={{ base: 'flex', md: 'none' }}>
        <SearchInput />
      </HStack>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {links.map(({ to, text }, index) => <Link key={index} {...{ to }} as={RouterLink}>{text}</Link>)}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar