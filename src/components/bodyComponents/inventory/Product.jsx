import { Avatar, Typography } from "@mui/material";
import React from "react";

export default function Product({ productName }) {
  // Extract the first letter from the product name
  const initials = productName.charAt(0).toUpperCase();

  return (
    <>
      <Avatar alt={productName} sx={{ width: 30, height: 30 }}>
        {initials}
      </Avatar>
      <Typography sx={{ mx: 3 }} variant="subtitle2">
        {productName}
      </Typography>
    </>
  );
}
