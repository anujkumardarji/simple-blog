"use client";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

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
      <h3 style={{ marginBottom: '1rem' }}>Comments</h3>
      <Paper elevation={3} style={{ padding: "1rem" }}>
        <List>
          {data?.data?.map((comment: CommentDetail) => (
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemText
                primary={comment.name}
                primaryTypographyProps={{
                  component: 'h5',
                  style: { marginBottom: '0.5rem' } // Example style
                }}
                secondary={
                  <>
                    <div style={{ marginBottom: '0.25rem' }}>
                      {comment.email}
                    </div>
                    <div>
                      {comment.body}
                    </div>
                  </>
                }
                secondaryTypographyProps={{
                  component: 'div',
                  style: { color: 'rgba(0, 0, 0, 0.54)' } // Example style
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
}
