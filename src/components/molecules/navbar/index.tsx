'use client'

import {
    Box,
    Heading,
    Button,
    Spacer,
    Flex,
    Menu,
    MenuButton,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar: React.FC = () => {
    const router = useRouter()
    const handleClick = (e: React.FormEvent) => {
        e.preventDefault()
        router.push('/update')
    }

    return (
        <Flex minWidth="max-content" alignItems="center" gap="2" p={4} w="100%">
            <Box p="2">
                <Heading as="h2" size="xl" color="white">
                    i love anime
                </Heading>
            </Box>
            <Spacer />

            <Menu>
                <MenuButton as={Button} onClick={handleClick}>
                    Update my profile
                </MenuButton>
            </Menu>
        </Flex>
    )
}

export default Navbar
