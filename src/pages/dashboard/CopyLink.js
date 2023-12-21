import React, { useRef, useState } from "react";
import { Button, Grid, Typography, IconButton } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Div from "../../shared/Div";

const CopyLink = ({userLoginID}) => {
  const [copyMessage, setCopyMessage] = useState("");
  const textRef = useRef(null);

  const handleCopyClick = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard.writeText(textToCopy);
    setCopyMessage("Link copied");
    setTimeout(() => setCopyMessage(""), 3000);
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
        // sx={{ marginBottom: 2 }}
      >
        Copy Link
      </Button>
      <Div>
        <Typography variant="body2" sx={{ color: "green", marginRight:"45px" }}>
          {copyMessage}
        </Typography>
      </Div>
      <Typography
        variant="h6"
        sx={{ color: "#ffcc00", fontSize: "35px" }}
      >
        ★★★★★
      </Typography>
      <p style={{color:"green"}}>Share your Review Link with your clients</p>

      <Div style={{ display: "none" }}>
        {/* Hidden text for copying */}
        <span ref={textRef}>http://localhost:3000/user-review/{userLoginID}</span>
      </Div>
    </Grid>
  );
};

export default CopyLink;
