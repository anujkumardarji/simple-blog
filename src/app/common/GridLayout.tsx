"use client";

import * as React from "react";
import Link from "next/link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material'; // Import necessary components

export default function RowAndColumnSpacing({ ...data }) {
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Blog
        </Typography>
        <Typography variant="h5" component="div">
          {data.data.title}
        </Typography>
        <Typography variant="body2">
          {data.data.body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={`/posts/${data.data.id}`} passHref>
            Read More
          </Link>
        </Button>
      </CardActions>
    </>
  );
}
