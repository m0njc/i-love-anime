import { Image, Card, LinkBox, Box, Text, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react';
import { text } from 'stream/consumers';

const PrimaryButton: React.FC<{
    btnText: string;
    }> = ({btnText}) => {
      return (
    
        <Button bgGradient='linear(to-l, #7928CA, #FF0080)'colorScheme="white" >
          {btnText}
        </Button>
      );
    };

export default PrimaryButton;




