'use client'

import { ContentResponse } from '@/app/model/ContentResponse'
import CardItem from '@/components/molecules/cardItem'
import Pagination from '@/components/molecules/pagination'
import { contentQuery } from '@/lib/queries'
import { TypedDocumentNode, gql } from '@apollo/client'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { SimpleGrid, Box } from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const ContentLayout: React.FC = () => {
    const urlParams = useSearchParams()

    const pageNumber = urlParams.get('page')
        ? parseInt(urlParams.get('page') as string)
        : 1

    const GET_CONTENT_QUERY: TypedDocumentNode<ContentResponse> =
        gql(contentQuery)

    const { data } = useSuspenseQuery(GET_CONTENT_QUERY, {
        variables: { perPage: 12, page: pageNumber },
    })
    const { pageInfo, media } = data.Page

    return (
        <Box>
            <SimpleGrid
                spacing={4}
                p={4}
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
                {media.map((item) => (
                    <CardItem
                        key={item.id}
                        coverImage={item.coverImage}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                        siteUrl={item.siteUrl}
                    />
                ))}
            </SimpleGrid>
            <Pagination
                currentPage={pageInfo.currentPage}
                lastPage={pageInfo.lastPage}
                total={pageInfo.total}
                hasNextPage={false}
                perPage={0}
            />
        </Box>
    )
}

export default ContentLayout
