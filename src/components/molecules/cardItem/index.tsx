import PrimaryButton from '@/components/atoms/primaryButton';
import SecondaryButton from '@/components/atoms/secondaryButton';
import { Image, Card, LinkBox, Box, Text, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react';

const CardItem: React.FC = () => {
  return (
    <Card maxW='sm' variant='outline' borderColor="gray.600" bg="black" color="white">
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <PrimaryButton btnText='Watch now' />
          <SecondaryButton btnText='Add to wishlist' />
        </ButtonGroup>
      </CardFooter>
  </Card>
  );
};

export default CardItem;




