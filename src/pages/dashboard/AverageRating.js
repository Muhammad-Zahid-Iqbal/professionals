import { Rating } from '@mui/material'
import React from 'react'
import StarIcon from "@mui/icons-material/Star";


const AverageRating = ({ value }) => {
  return (
    <Rating
        name="average-rating"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
  )
}

export default AverageRating