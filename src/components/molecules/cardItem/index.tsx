import { Media } from '@/app/model/ContentResponse';
import PrimaryButton from '@/components/atoms/primaryButton';
import SecondaryButton from '@/components/atoms/secondaryButton';
import { Image, Card, LinkBox, Box, Text, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, LinkOverlay } from '@chakra-ui/react';
import React from 'react';

const CardItem: React.FC<Media> = ({coverImage, title, description}) => {
  return (
    <Card maxW='sm' variant='outline' borderColor="gray.600" bg="black" color="white">
      <CardBody>
        <Image
          src={coverImage.extraLarge}
          alt={title.english}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title.english}</Heading>
          <Text noOfLines={3}>
           {description}
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




