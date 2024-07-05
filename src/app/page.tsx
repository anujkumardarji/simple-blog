import * as React from "react";
import GridLayout from "../app/common/GridLayout";
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid"; 

const apiUrl = process.env.PUBLIC_API_URL;

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type HomeProps = {
  posts: Post[];
};




const Home: React.FC<HomeProps> = async () => {
  const posts = await getData();

  return (
    <div className="container">
      <main className="center-main" style={{  padding: '20px' }}>
        <ul> 
          <Grid container spacing={2} >
              {posts.map((post: Post) => (
             <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card variant="outlined">
                   <GridLayout  variant="outlined" key={post.id} data={post} />
                </Card>
                </Grid>
              ))}
              </Grid>
        </ul>
      </main>
    </div>
  );
};

export default Home;

async function getData() {
  const response = await fetch(`${apiUrl}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}
