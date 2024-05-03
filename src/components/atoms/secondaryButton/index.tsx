import { Image, Card, LinkBox, Box, Text, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react';
import { text } from 'stream/consumers';

const SecondaryButton: React.FC<{
    btnText: string;
    }> = ({btnText}) => {
  return (
    
          <Button borderColor="purple" colorScheme='black'>
            {btnText}
          </Button>
  );
};

export default SecondaryButton;




