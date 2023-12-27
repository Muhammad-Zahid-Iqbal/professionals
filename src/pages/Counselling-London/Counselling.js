import React from "react";
import Counsellingcard from "./Counsellingcard";
import { useMyContext } from "../../components/context-user-data/ContextUserData";

const Counselling = () => {
  const { loading, pictureLink, usersProfileData } = useMyContext();

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
