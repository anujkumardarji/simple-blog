"use client";

import * as React from "react";
import Link from "next/link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RowAndColumnSpacing({ ...data }) {
  const truncateText = (text : string, maxLines : number) => {
    const lines = text.split("\n"); 
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join("\n") + "..."; 
    }
    return text;
  };
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
        {truncateText(data.data.body, 3)} 
          <br />
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
