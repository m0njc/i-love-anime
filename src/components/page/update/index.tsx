import React, { useState } from 'react';
import UserInfoForm from '@/components/organisms/userInfoForm';
import { useDispatch } from 'react-redux';
import { userActions } from '@/lib/usersSlice';

const UserIntroUpdatePage: React.FC = () => {

  const [userName, setUserNameState] = useState('');
  const [jobTitle, setJobTitleState] = useState('');
    

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const dispatch = useDispatch();
    dispatch(userActions.setUser({userName, jobTitle}));
  };


  return (
    <UserInfoForm
        headerText='Update your detail here'
        handleSubmit={handleSubmit}
        userName={userName}
        setUserNameState={setUserNameState}
        jobTitle={jobTitle}
        setJobTitleState={setJobTitleState}    
    />
  );
};

export default UserIntroUpdatePage;




