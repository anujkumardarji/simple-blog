"use client";
import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

export default function Comments({ ...data }) {
  type CommentDetail = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <Paper elevation={3} style={{ padding: "1rem" }}>
        <List>
          {data?.data?.map((comment: CommentDetail) => (
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemText
                primary={<Typography variant="h5">{comment.name}</Typography>}
                
                secondary={
                  <>
                   <Typography
                      variant="body2"
                      color="textPrimary"
                    >
                      {comment.email}
                    </Typography>
                    <Typography variant="body2" >
                      {comment.body}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
}
