import React, { useRef, useState } from "react";
import { Button, Grid, Typography, IconButton, Rating } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Div from "../../shared/Div";
import AverageRating from "./AverageRating";


const CopyLink = ({ userLoginID, reviewData, userID }) => {
  const [copyMessage, setCopyMessage] = useState("");
  const textRef = useRef(null);

  const handleCopyClick = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard.writeText(textToCopy);
    setCopyMessage("Link copied");
    setTimeout(() => setCopyMessage(""), 3000);
  };


  const averageRating = () => {
    const totalRating = reviewData.reduce((sum, row) => sum + row.rating, 0);
    const average = totalRating / reviewData.length;
    return isNaN(average) ? 0 : average; // Avoid NaN if there are no reviews
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-end"
      sx={{ padding: 2 }}
    >
      <Button
        sx={{
          m: 1,
          color: "#fff",
          backgroundColor: "#ee7925",
          "&:hover": {
            backgroundColor: "#fff",
            borderColor: "#ee7925",
            color: "#ee7925",
          },
        }}
        size="medium"
        variant="contained"
        color="primary"
        disableElevation
        onClick={handleCopyClick}
        endIcon={<FileCopyIcon />}
      >
        Copy Link
      </Button>
      <Div>
        <Typography
          variant="body2"
          sx={{ color: "green", marginRight: "45px" }}
        >
          {copyMessage}
        </Typography>
      </Div>
      <Typography>
        Average Rating:
        {reviewData[0]?.userid === userID && (
          <AverageRating value={averageRating()} />
        )}
      </Typography>
      <p style={{ color: "green" }}>Share your Review Link with your clients</p>

      <Div style={{ display: "none" }}>
        <span ref={textRef}>
          http://localhost:3000/user-review/{userLoginID}
        </span>
        {/* <span ref={textRef}>https://dyslexiafocus.com/user-review/{userLoginID}</span> */}
      </Div>
    </Grid>
  );
};

export default CopyLink;
