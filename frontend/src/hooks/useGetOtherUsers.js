import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  const {authUser} = useSelector((store) => store.user);

  useEffect(() => {

    const fetchOtherUsers = async () => {
      if (!authUser || !authUser._id) {
        console.log("No User");
        return;
      }

      try {
        const res = await axios.get("http://localhost:8000/api/user", {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        dispatch(setOtherUsers(res.data.otherUser));
      } catch (error) {
        console.error("Error fetching other users:", error);
      }
    };

    fetchOtherUsers();
  }, [authUser, dispatch]);
};

export default useGetOtherUsers;
