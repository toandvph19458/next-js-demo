export const getAllPosts = async () => {
  const response = await fetch("http://localhost:3000/posts/");
  const posts = await response.json();
  return posts;
};
export const getPostId = async (id: string) => {
  const response = await fetch("http://localhost:3000/posts/" + id);
  const post = await response.json();
  return post;
};
