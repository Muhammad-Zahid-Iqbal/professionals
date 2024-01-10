import { Card } from "@mui/joy";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Div from "../../shared/Div";
import SingleCard from "./SingleCard";

const UserCards = () => {
  const TestimonialData = [
    {
      name: "Dale Clark",
      role: "Designer",
      image:
        "https://brisk.uicore.co/saas/wp-content/uploads/sites/4/2019/11/saas-testimonial-1.jpg",
      quote:
        "I wish I would have thought of it first. Brisk did exactly what you said it does.",
    },
    {
      name: "Miguel Hoffman",
      role: "Forex Trader",
      image:
        "https://brisk.uicore.co/saas/wp-content/uploads/sites/4/2019/11/saas-testimonial-2.jpg",
      quote:
        "“It’s just amazing. I was amazed at the quality of Brisk. It’s all good. “",
    },
    {
      name: "Elsie Harris",
      role: "Vlogger",
      image:
        "https://brisk.uicore.co/saas/wp-content/uploads/sites/4/2019/11/saas-testimonial-3.jpg",
      quote:
        "“I don’t know what else to say. I made back the purchase price in just 48 hours!”",
    },
    {
      name: "Elizabeth Payne",
      role: "Freelancer",
      image:
        "https://brisk.uicore.co/saas/wp-content/uploads/sites/4/2019/11/saas-testimonial-4.jpg",
      quote:
        "“I like Brisk more and more each day because it makes my life a lot easier.”",
    },
    {
      name: "Aiden Olson",
      role: "IT Engineer",
      image:
        "https://brisk.uicore.co/saas/wp-content/uploads/sites/4/2019/11/saas-testimonial-5.jpg",
      quote:
        "“Without Brisk, we would have gone bankrupt by now. I use Brisk often.”",
    },
    {
      name: "Kristin Gordon",
      role: "Fashion Model",
      image:
        "https://brisk.uicore.co/saas/wp-content/uploads/sites/4/2019/11/saas-testimonial-6.jpg",
      quote:
        "“Your company is truly upstanding and is behind its product 100%.”",
    },
  ];
  return (
    <Box sx={{ background: "#f2f2f2" }}>
      <Div
        sx={{
          fontSize: "36px",
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: "0.027em",
          textTransform: "none",
          textAlign: "center",
          padding: "45px",
        }}
      >
        Testimonials
      </Div>
      <SingleCard TestimonialData={TestimonialData} />
    </Box>
  );
};

export default UserCards;
