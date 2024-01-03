import React, { useEffect, useState } from "react";
import Counsellingcard from "./Counsellingcard";
import { postRequest } from "../../backendservices/ApiCalls";

const Counselling = () => {
  const [usersProfileData, setUsersProfileData] = useState([]);
  const [pictureLink, setPictureLink] = useState();
  const [loading,setLoading]=useState(false)

  const GetallUsers = () => {
    postRequest(
      '/getallusers',
      "",
      (response) => {
        console.log("getallusersRespons", response)
        setLoading(true);
        if (response?.data?.status === 'success') {
          setUsersProfileData(response?.data?.data);
          setPictureLink(response?.data?.profilePicLink);
        }
        setLoading(false);
      },
      (error) => {
        console.log(error?.response?.data);
        setLoading(false);
      }
    );
  };

  
  useEffect(() => {
    GetallUsers();
  }, []);
  
  return (
    <>
      <Counsellingcard
        therapists={usersProfileData}
        pictureLink={pictureLink}
        loading={loading}
      />
    </>
  );
};

export default Counselling;
