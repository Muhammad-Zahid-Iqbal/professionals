import React, { useEffect, useState } from "react";
import FindCounsellingCard from "./FindCounsellingCard";
import { useLocation } from "react-router-dom";


const FindCounselling = () => {
  const location = useLocation();

  const usersProfileData = location.state.usersProfileData
  const loading = location.state.loading
  const pictureLink = location.state.pictureLink
console.log("usersProfileData", usersProfileData)
  if (loading && !usersProfileData){
    return <h1>Loading ...</h1>
  }
  return (
    <>
      <FindCounsellingCard
        therapists={usersProfileData}
        pictureLink={pictureLink}
        loading={loading}
      />
    </>
  );
};

export default FindCounselling;
