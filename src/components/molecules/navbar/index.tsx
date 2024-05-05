import { Box, Heading, Button, Spacer, Flex } from '@chakra-ui/react'
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <Flex minWidth="max-content" alignItems="center" gap="2" p={4} w="100%">
            <Box p="2">
                <Heading as="h2" size="xl" color="white">
                    i love anime
                </Heading>
            </Box>
            <Spacer />
            <Button
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                colorScheme="white"
            >
                Update my profile
            </Button>
        </Flex>
    )
}

export default Navbar
