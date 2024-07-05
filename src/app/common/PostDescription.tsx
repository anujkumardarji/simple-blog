'use client'
import { Typography } from "@mui/material";

export default function PostDescription({ ...data }) {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {data?.data?.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {data?.data?.body}
      </Typography>
    </>
  );
}
