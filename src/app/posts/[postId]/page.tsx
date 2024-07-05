import Head from "next/head";
import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import PostDescription from "../../common/PostDescription";
import Comments from "@/app/common/Comments";
import Container from '@mui/material/Container';
const apiUrl = process.env.PUBLIC_API_URL;

type PostDetail = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostDetail = async ({ params }: { params: { postId: string } }) => {
  const post = await getPost(params.postId);
  const comments = await getComments(params.postId);

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <main>
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
          <PostDescription key={post.id} data={post} />
          <Comments data={comments} />
        </Container>
      </main>
    </div>
  );
};

async function getPost(postId: string) {
  try {
    const response = await fetch(
      `${apiUrl}/posts/${postId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

async function getComments(postId: string) {
  try {
    const response = await fetch(
      `${apiUrl}/comments?postId=${postId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

export default PostDetail;
