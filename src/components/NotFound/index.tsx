import { Box, Flex, Text } from "@chakra-ui/react"
import { NotFoundComponentProps } from "./types"
import { ReactComponent as CharmanderImage } from '../../assets/images/charmander.svg';

const NotFound = ({ message }: NotFoundComponentProps) => {
  return (
    <Flex textAlign={'center'} flexDir={'column'} alignItems={'center'}>
      <Box h={150} mb={3}>
        <CharmanderImage height={'100%'} />
      </Box>
      <Text fontSize={'3xl'}>Error 404: Not found</Text>
      {message && <Text fontSize={'xl'}>{message}</Text>}
    </Flex>
  )
}

export default NotFound