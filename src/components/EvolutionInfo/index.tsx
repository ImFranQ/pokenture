import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/react"

import { ReactComponent as CharmanderImage } from '../../assets/images/charmander.svg';
import { ReactComponent as CharmeleonImage } from '../../assets/images/charmeleon.svg';
import { ReactComponent as CharizardImage } from '../../assets/images/charizard.svg';

const EvolutionInfo = () => {

  const items = [
    {
      icon: <CharmanderImage height={'100%'} />,
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nulla animi fugit pariatur corrupti explicabo placeat odit, provident eveniet nesciunt neque delectus perferendis aut? Harum fugit iusto corrupti cum cumque!'
    },
    {
      icon: <CharmeleonImage height={'100%'} />,
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nulla animi fugit pariatur corrupti explicabo placeat odit, provident eveniet nesciunt neque delectus perferendis aut? Harum fugit iusto corrupti cum cumque!'
    },
    {
      icon: <CharizardImage height={'100%'} />,
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nulla animi fugit pariatur corrupti explicabo placeat odit, provident eveniet nesciunt neque delectus perferendis aut? Harum fugit iusto corrupti cum cumque!'
    }
  ]

  return (
    <>
      <Box textAlign={'center'}>
        <Text fontSize={'xl'} mb={4} color={'primary.500'}>EVOLUTIONS</Text>
      </Box>

      <Text fontSize={'xl'} textAlign={'center'} my={6}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo tempore, distinctio nostrum sit ut incidunt quibusdam pariatur amet reiciendis excepturi vero maxime tenetur veniam ea cupiditate, esse culpa. Perferendis, reiciendis.
      </Text>

      <Flex flexWrap={'wrap'} justifyContent="center" gap={6}>
        {items.map(({ icon, info }) => (
          <Box 
            borderRadius={10} 
            borderWidth={1} 
            borderColor={'gray.700'} 
            p={6}
            maxW={'400px'}
            w={{ base: '100%', lg: '31%' }}
          >
            <Flex alignItems={'center'} flexDir={'column'}>
              <Box h={'150px'}>
                {icon}
              </Box>
              <Text textAlign={'center'} mt={4}>{info}</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default EvolutionInfo