import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/joy";
import Div from "../../shared/Div";
import { useNavigate } from "react-router-dom";
import { Fade, Modal, Rating } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import StarIcon from "@mui/icons-material/Star";
import { postRequest } from "../../backendservices/ApiCalls";
import CancelIcon from '@mui/icons-material/Cancel';


const Counsellingcard = ({ therapists, loading, pictureLink }) => {
  const maxDetailLength = 400;
  const itemsPerPage = 5;
  const maxDisplayedPages = 10;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [userID, setUserID] = React.useState("");
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleOpen = (userid) => {
    setOpen(true);
    setUserID(userid);
  };
  const user =
    therapists && therapists.find((user) => user.id === parseInt(userID, 10));
  const handleClose = () => setOpen(false);
console.log("user", user)
  const navigate = useNavigate();

  const totalPages = Math.ceil(therapists?.length / itemsPerPage);

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    minWidth: "70vw",
    borderRadius: "20px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pages = [];
  const startPage = Math.max(
    currentPage - Math.floor(maxDisplayedPages / 2),
    1
  );
  const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

  for (let i = 1; i <= totalPages; i++) {
    if (
      (i === 1 && startPage > 2) ||
      (i === totalPages && endPage < totalPages - 1)
    ) {
      // Show ellipsis for the first and last buttons if there is space
      pages.push("...");
    } else if (i >= startPage && i <= endPage) {
      // Show the current page and the surrounding pages
      pages.push(i);
    }
  }
  const removePTags = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const textContent = doc.body.textContent || "";
    return textContent.replace(/\\/g, ""); //
  };
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
      userid: userID,
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
  }, [userID]);

  if ( loading && !therapists) {
    return <h1>Loading ...</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>
  }
  return (
    <>
      <Box
        sx={{
          // width: "73%",
          // position: "relative",
          marginTop: "30px",
          // overflow: { xs: "auto", sm: "initial" },
          mb: 5,
        }}
      >
        <Grid container sm={10} xs={12} margin={"auto"}>
          <Div sx={{ padding: "20px" }}>
            <h1>Tutors & Assessors</h1>
          </Div>
          {therapists?.slice(startIndex, endIndex).map((value, index) => (
            <Card
              orientation="horizontal"
              onClick={() => handleOpen(value.id)}
              key={index}
              sx={{
                flexWrap: "wrap",
                marginBottom: "5px",
                width:"100%",
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
                  src={`${pictureLink}${value?.profilepic}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  {value.firstname}
                </h2>
                <Typography
                  level="body-sm"
                  fontWeight="lg"
                  textColor="text.tertiary"
                >
                  {value.education}
                </Typography>
                <Typography
                  level="body-sm"
                  fontWeight="lg"
                  textColor="text.tertiary"
                >
                  {value.user_type}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontFamily:
                      "Proxima Nova,Open Sans,Helvetica Neue,Arial,sans-serif",
                  }}
                >
                  {removePTags(value.detail).length > maxDetailLength
                    ? `${removePTags(value.detail).substring(
                        0,
                        maxDetailLength
                      )}...`
                    : removePTags(value.detail)}
                  {removePTags(value.detail).length > maxDetailLength ? (
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() =>
                        navigate(`/user-detail/${value.id}`, {
                          state: { therapists, pictureLink, loading, userID },
                        })
                      }
                    >
                      Read More
                    </span>
                  ) : null}
                </Typography>
              </CardContent>
              <CardContent sx={{ flex: "10%" }}>
                <h1>{value.mobile}</h1>
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
                </Button>
              </CardContent>
            </Card>
          ))}
          <Box sx={{ margin:"auto", marginTop: 2 }}>
            <Button
              variant="contained"
              sx={{ margin: "0 5px", border: "1px solid lightgray" }}
              onClick={handlePreviousClick}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {pages.map((page, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{ margin: "0 5px", border: "1px solid lightgray" }}
                onClick={() => page !== "..." && handlePageClick(page)}
                disabled={page === "..." || page === currentPage}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{ margin: "0 5px", border: "1px solid lightgray" }}
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Box>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            disableScrollLock={true}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
            sx={{overflowY:"scroll"}}
          >
            <Fade in={open}>
              {/* <Box sx={style}> */}
                <Grid container sm={10} xs={12} margin={"auto"}>
                  <Card
                    orientation="horizontal"
                    sx={{
                      flexWrap: "wrap",
                      marginBottom: "5px",
                      width:"100%",
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
              <Typography sx={{position:"absolute",  right:0, top:0}}><CancelIcon sx={{fontSize:"30px"}} onClick = {()=>handleClose()}/></Typography>

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
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
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
                      {reviewData[0]?.userid === userID &&
                      <AverageRating value={averageRating()} />
                      }
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
                          __html: user?.detail
                            .replace(/\\n/g, "")
                            .replace(/\\/g, ""),
                        }}
                      />
                    </CardContent>
                    <CardContent sx={{ flex: "10%" }}>
                      <h1>{user?.mobile}</h1>
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
                      </Button> */}
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
                        View
                      </Button> */}
                    </CardContent>
                  </Card>
                  <>
                  <Grid container sm={12} xs={12} margin={"auto"}>
                     <Card sx={{width:"100%"}}>
                      <h3>Reviews: </h3>
                    </Card>
                  </Grid>
                   
                    {!isLoading && reviewData?.map(row => (
                      row.userid === userID && (
                    <Card key={row?.id} sx={{width:"100%"}}>
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
                    ))}
                  </>
                </Grid>
              {/* </Box> */}
            </Fade>
          </Modal>
        </Grid>
      </Box>
    </>
  );
};

export default Counsellingcard;
