import React from 'react';
import { Button, Flex, FormControl, Heading, Input } from "@chakra-ui/react";

const UserInfoForm: React.FC<{
  headerText: string;
  handleSubmit: (e: any) => void;
  userName: string;
  setUserNameState: (value: string) => void;
  jobTitle: string;
  setJobTitleState: (value: string) => void;
}> = ({headerText, handleSubmit, userName, setUserNameState, jobTitle, setJobTitleState}) => {

  return (
    <form onSubmit={handleSubmit}>
      <Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor="black" color="white">
        <Flex direction="column" background="gray.800" rounded={6} p={12}>
          <Heading mb={6}>{headerText}</Heading>
          <FormControl isRequired>
            <Input type="text" placeholder="What should we call you?" mb={3} value={userName} onChange={(e) => setUserNameState(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <Input type="text" placeholder="What do you love to do?" mb={6} value={jobTitle} onChange={(e) => setJobTitleState(e.target.value)}  /> 
          </FormControl>
          <Button type='submit' bgGradient='linear(to-l, #7928CA, #FF0080)' colorScheme="white">Submit</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default UserInfoForm;




