import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import useGetMessages from '../hooks/useGetMessages';

const HomePage = () => {
  const { authUser , setOtherUsers } = useSelector((store) => store.user);

  // useEffect(() => {
  //   console.log('HomePage - Selected User:', selectedUser);
  //   console.log('HomePage - Auth User:', authUser);
  //   console.log('HomePage - Other User:', setOtherUsers);
  // },[]);

  useGetOtherUsers();
  useGetMessages();

  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />

    </div>
  );
};

export default HomePage;

