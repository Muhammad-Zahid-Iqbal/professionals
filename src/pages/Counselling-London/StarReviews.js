import { Typography } from "@mui/material";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import React from "react";

const StarReviews = ({ generateStars, reviewData, loading, isLoading, userID,}) => {

if(isLoading) {
    return <h1>Loading ...</h1>
}
  return (
    <>
      <Card>
        <h3>Reviews: </h3>
      </Card>
      {!isLoading &&
        !loading &&
        reviewData &&
        reviewData?.map(
          (item) =>
            item.userid === userID && (
              <Card key={item.id}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {generateStars(item.rating)}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item?.sender_name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontFamily:
                        "Proxima Nova,Open Sans,Helvetica Neue,Arial,sans-serif",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: item?.detail
                        .replace(/\\n/g, "")
                        .replace(/\\/g, ""),
                    }}
                  />
                </CardContent>
              </Card>
            )
        )}
    </>
  );
};

export default StarReviews;
