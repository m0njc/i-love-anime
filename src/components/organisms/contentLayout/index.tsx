import CardItem from '@/components/molecules/cardItem';
import { Button, Card, CardBody, CardFooter, CardHeader, Text, Container, Heading, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

const ContentLayout: React.FC = () => {

  return (
    <SimpleGrid spacing={4} p={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </SimpleGrid>
  );
};

export default ContentLayout;




