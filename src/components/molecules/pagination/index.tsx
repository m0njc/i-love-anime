import { Paginator } from '@/app/model/Paginator'
import { Box, Text, ButtonGroup, Center, Link } from '@chakra-ui/react'
import React from 'react'

const Pagination: React.FC<Paginator> = ({ currentPage, total }) => {
    const showPrev = currentPage > 1
    const showNext = currentPage < total
    const hrefPrev = `/content?page=` + (currentPage - 1).toString()
    const hrefNext = `/content?page=` + (currentPage + 1).toString()
    return (
        <Center>
            <Box my={5}>
                <ButtonGroup spacing="2">
                    {showPrev && (
                        <Link href={hrefPrev} color="white">
                            {' '}
                            prev{' '}
                        </Link>
                    )}
                    <Text color="white" px={10}>
                        Page {currentPage} of {total}
                    </Text>
                    {showNext && (
                        <Link href={hrefNext} color="white">
                            {' '}
                            next{' '}
                        </Link>
                    )}
                </ButtonGroup>
            </Box>
        </Center>
    )
}

export default Pagination
