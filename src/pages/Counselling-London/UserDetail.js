import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/joy";
import Div from "../../shared/Div";


const UserDetail = () => {
  const { id } = useParams();
  const location =  useLocation();
  const therapists = location.state.therapists;
  const pictureLink = location.state.pictureLink;
  const loading = location.state.loading;
  const user = therapists && therapists.find((user) => user.id === parseInt(id, 10));

  if (!user && loading) {
    return <div>User not found</div>;
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
      </Box>
    </>
  );
};

export default UserDetail;
