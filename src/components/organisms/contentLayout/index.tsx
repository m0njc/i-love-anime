"use client"

import { ContentResponse } from '@/app/model/ContentResponse';
import CardItem from '@/components/molecules/cardItem';
import { TypedDocumentNode, gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Button, Card, CardBody, CardFooter, CardHeader, Text, Container, Heading, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

const ContentLayout: React.FC = () => {

  const GET_CONTENT_QUERY: TypedDocumentNode<ContentResponse> = gql`query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search) {
        id
        title {
          english
        }
        description
        status
        coverImage {
          extraLarge
          large
          medium
          color
        }
        siteUrl
      }
    }
  }`;

  const { data } = useSuspenseQuery(GET_CONTENT_QUERY);
  const { pageInfo, media } = data.Page;
  return (
    <SimpleGrid spacing={4} p={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
      {
        media.map((item) => (
          <CardItem key={item.id} coverImage={item.coverImage} title={item.title} description={item.description} id={item.id} siteUrl={item.siteUrl} />
        ))
      }
    </SimpleGrid>
  );
};

export default ContentLayout;




