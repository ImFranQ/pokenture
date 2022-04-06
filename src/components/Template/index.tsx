import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import Navbar from "../Navbar";

export interface TemplateProps {
  children: ReactNode
}

const Template = (props: TemplateProps) => {
  return (
    <Box as={Flex} flexDir={'column'} h={'100vh'}>
      <Box>
        <Navbar />
      </Box>
      <Box flexGrow={1}>
        {props.children}
      </Box>
    </Box>
  )
}

export default Template