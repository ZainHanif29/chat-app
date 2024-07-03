import { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import axios from 'axios';
import {setMessage} from '../redux/messageSlice.js'

const useGetMessages = () => {
  const {selectedUser} = useSelector((store) => store.user);
  const Dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser || !selectedUser._id) {
        console.log('No Id');
        return;
      }
      try {
        const res = await axios.get(`http://localhost:8000/api/send/${selectedUser._id}`, {
          withCredentials: true,
        });
        console.log(res)
        Dispatch(setMessage(res.data))
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [selectedUser]);
};

export default useGetMessages;
