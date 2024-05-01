import { Button, Flex, Heading, Input } from "@chakra-ui/react";


export default function Home() {
  return (
    <div>
      <Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor="black" color="white">
        <Flex direction="column" background="gray.800" rounded={6} p={12}>
          <Heading mb={6}>Hello! Intro please...</Heading>
          <Input type="text" placeholder="What should we call you?" mb={3} />
          <Input type="text" placeholder="What do you love to do?" mb={6} variant="filled" />
          <Button bgGradient='linear(to-l, #7928CA, #FF0080)' colorScheme="white">Submit</Button>
          </Flex>
      </Flex>
    </div>   
  );
}
