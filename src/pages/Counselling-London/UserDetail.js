import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/joy";
import Div from "../../shared/Div";
import { postRequest } from "../../backendservices/ApiCalls";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const UserDetail = () => {
  const [userID, setUserID] = React.useState("");
  const [reviewData, setReviewData] = useState([]);
  console.log("reviewData", reviewData);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const therapists = location.state.therapists;
  const pictureLink = location.state.pictureLink;
  const selectedLocation = location.state.selectedLocation;
  const loading = location.state.loading;
  const user =
    therapists && therapists.find((user) => user.id === parseInt(id, 10));

  const AverageRating = ({ value }) => {
    return (
      <Rating
        name="average-rating"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    );
  };
  const averageRating = () => {
    const totalRating = reviewData.reduce((sum, row) => sum + row.rating, 0);
    const average = totalRating / reviewData.length;
    return isNaN(average) ? 0 : average; // Avoid NaN if there are no reviews
  };

  const GetReviews = () => {
    let param = {
      userid: id,
    };
    postRequest(
      "/getreviews",
      param,
      (response) => {
        setIsLoading(true);
        if (response?.data?.status === "success") {
          setReviewData(response?.data?.data);
        }
        setIsLoading(false);
      },
      (error) => {
        console.log(error?.response?.data);
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    GetReviews();
  }, []);

  if (!user && loading) {
    return <div>User not found</div>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <Box
      // sx={{
      //   width: "73%",
      //   position: "relative",
      //   margin: "auto",
      //   overflow: { xs: "auto", sm: "initial" },
      //   mb: 5,
      // }}//
      >
        <Grid container sm={10} xs={12} margin={"auto"}>
          <Div sx={{ padding: "20px" }}>
            <h1>{selectedLocation?  selectedLocation : "Counselling"} in London</h1>
          </Div>
          <Card
            orientation="horizontal"
            sx={{
              flexWrap: "wrap",
              marginBottom: "5px",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              resize: "horizontal",
              "&:hover": {
                cursor: "pointer",
                boxShadow: "6px 0 6px #ccc",
              },
            }}
          >
            <Box
              flex={1}
              minHeight={250}
              sx={{
                minWidth: 182,
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                src={`${pictureLink}${user?.profilepic}`}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                alt=""
              />
            </Box>
            <CardContent sx={{ flex: "30%" }}>
              <h2
                style={{
                  color: "#477be4",
                  fontSize: "26px",
                  fontFamily:
                    "Proxima Nova,Open Sans,Helvetica Neue,Arial,sans-serif",
                }}
              >
                {user?.firstname}
              </h2>
              <Typography>
                Average Rating:
                {reviewData[0]?.userid === parseInt(id, 10) && (
                  <AverageRating value={averageRating()} />
                )}
              </Typography>
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                {user?.education}
              </Typography>
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                {user?.user_type}
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontFamily:
                    "Proxima Nova,Open Sans,Helvetica Neue,Arial,sans-serif",
                }}
                dangerouslySetInnerHTML={{
                  __html: user?.detail.replace(/\\n/g, "").replace(/\\/g, ""),
                }}
              />
            </CardContent>
            <CardContent sx={{ flex: "10%" }}>
              <h1>{user?.mobile}</h1>
              {/* <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white",
                  color: "dark",
                  border: "1px solid lightgray",
                  padding: "10px",
                  marginTop: 2,
                }}
              >
                Email
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "white",
                  color: "dark",
                  border: "1px solid lightgray",
                  padding: "10px",
                  marginTop: 2,
                }}
              >
                View
              </Button> */}
              <Div style={{paddingTop:50}}>
                        <h4 >Email:</h4>
                      <Typography >{user?.email}</Typography>
                      </Div>
                      <Div style={{paddingTop:50}}>
                        <h4 >Address:</h4>
                      <Typography >{user?.address}</Typography>
                      </Div>
                      <Div style={{paddingTop:50}}>
                        <h4 >Postcode:</h4>
                      <Typography >{user?.postcode}</Typography>
                      </Div>
            </CardContent>
          </Card>
         
        </Grid>
        <Grid container sm={10} xs={12} margin={"auto"} paddingBottom={4}>
        <>
            <Card sx={{width:"100%"}}>
              <h3>Reviews: </h3>
            </Card>
            {!isLoading &&
              reviewData &&
              reviewData?.map(
                (row) => (
                  row.userid === parseInt(id, 10) && (
                    <Card key={row?.id} sx={{width:"100%",}}>
                      <Rating
                        name="text-feedback"
                        value={row?.rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <Typography variant="h5" component="div">
                        {row?.sender_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontFamily:
                            "Proxima Nova,Open Sans,Helvetica Neue,Arial,sans-serif",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: row?.detail
                            .replace(/\\n/g, "")
                            .replace(/\\/g, ""),
                        }}
                      />
                    </Card>
                  )
                )
              )}
          </>
          </Grid>
      </Box>
    </>
  );
};

export default UserDetail;
