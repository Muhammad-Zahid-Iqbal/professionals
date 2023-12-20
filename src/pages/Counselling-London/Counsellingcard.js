import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/joy";
import Div from "../../shared/Div";
import { Link } from "react-router-dom";

const Counsellingcard = ({ therapists,loading, pictureLink }) => {
  const maxDetailLength = 400;
  const itemsPerPage = 5;
  const maxDisplayedPages = 10;
  console.log("therapists", therapists);
  console.log("pictureLink", pictureLink);

  const [currentPage, setCurrentPage] = React.useState(1);

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
  if(loading && !therapists) {
    return <h1>Loading ...</h1>
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
            key={index}
            sx={{
              flexWrap: "wrap",
              marginBottom:"5px",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              resize: "horizontal",
              "&:hover": {
                cursor:"pointer",
                boxShadow: "6px 0 6px #ccc"
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
                {value?.detail?.length > maxDetailLength
                  ? `${value.detail.substring(0, maxDetailLength)}...`
                  : value.detail}
                 {value?.detail?.length > maxDetailLength ? (
                  <Link
                    to={{
                      pathname: `/user-detail/${value.id}`,
                      state: { therapists }, // Pass therapists data in state
                    }}
                  >
                    <span style={{ color: "blue", cursor: "pointer" }}>
                      Read More
                    </span>
                  </Link>
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
      </Grid>
    </Box>
    </>
    
  );
};

export default Counsellingcard;
