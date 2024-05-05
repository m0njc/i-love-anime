import Navbar from '@/components/molecules/navbar'
import ContentLayout from '@/components/organisms/contentLayout'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const ContentPage: React.FC = () => {
    return (
        <Flex direction="column" flex="1" bg="black">
            <Navbar />
            <Box mt="10">
                <ContentLayout />
            </Box>
        </Flex>
    )
}

export default ContentPage
