import React, { useEffect, useState } from "react";
import Counsellingcard from "./Counsellingcard";
import { postRequest } from "../../backendservices/ApiCalls";
import { useLocation } from "react-router-dom";

const Counselling = () => {
  const [usersProfileData, setUsersProfileData] = useState([]);
  const [pictureLink, setPictureLink] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const usersProfileData1 = location.state?.usersProfileData || [];
  const loading1 = location.state?.loading || false;
  const pictureLink1 = location.state?.pictureLink || "";
  const selectedLocation = location.state?.selectedLocation || "";

  const GetallUsers = () => {
    postRequest(
      "/getallusers",
      "",
      (response) => {
        setLoading(true);
        if (response?.data?.status === "success") {
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
      {selectedLocation === "Tutors" || selectedLocation === "Assessors" ? (
        <Counsellingcard
          therapists={usersProfileData1}
          pictureLink={pictureLink1}
          loading={loading1}
          selectedLocation={selectedLocation}
        />
      ) : (
        <Counsellingcard
          therapists={usersProfileData}
          pictureLink={pictureLink}
          loading={loading}
        />
      )}
    </>
  );
};

export default Counselling;
