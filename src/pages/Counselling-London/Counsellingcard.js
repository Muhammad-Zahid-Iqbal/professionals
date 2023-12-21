import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/joy";
import Div from "../../shared/Div";
import { Link, useNavigate } from "react-router-dom";
import { Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

const Counsellingcard = ({ therapists, loading, pictureLink }) => {
  const maxDetailLength = 400;
  const itemsPerPage = 5;
  const maxDisplayedPages = 10;
  console.log("therapistsCard", therapists);
  console.log("pictureLink", pictureLink);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [userID, setUserID] = React.useState("");
  const handleOpen = (userid) => {
    setOpen(true);
    setUserID(userid);
  };
  const user =
    therapists && therapists.find((user) => user.id === parseInt(userID, 10));
  console.log("userID", userID);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const totalPages = Math.ceil(therapists?.length / itemsPerPage);

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    console.log("Current Page:", currentPage);
    console.log("Total Pages:", totalPages);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -40%)",
    minWidth: "70vw",
    borderRadius:"20px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const top = 25;
  const left = 25;
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

  if (loading && !therapists) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <Box
        sx={{
          width: "73%",
          position: "relative",
          margin: "auto",
          overflow: { xs: "auto", sm: "initial" },
          mb: 5,
        }}
      >
        <Grid item>
          <Div sx={{ padding: "20px" }}>
            <h1>Counselling in London</h1>
          </Div>
          {therapists?.slice(startIndex, endIndex).map((value, index) => (
            <Card
              orientation="horizontal"
              onClick={() => handleOpen(value.id)}
              key={index}
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
                          state: { therapists, pictureLink },
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
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
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
            // sx={{width:"100%"}}
            disableScrollLock={true}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
              {/* <Box
                sx={{
                  width: "73%",
                  position: "relative",
                  margin: "auto",
                  overflow: { xs: "auto", sm: "initial" },
                  mb: 5,
                }}
              > */}
                <Grid item>
                  {/* <Div sx={{ padding: "20px" }}>
                      <h1>Counselling in London</h1>
                    </Div> */}
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
                </Grid>
                {/* </Box> */}
              </Box>
            </Fade>
          </Modal>
        </Grid>
      </Box>
    </>
  );
};

export default Counsellingcard;
