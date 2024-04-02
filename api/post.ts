"use server";
export const getAllPosts = async () => {
  const response = await fetch("http://localhost:3000/posts");
  const posts = await response.json();
  console.log("🚀 ~ getPosts ~ posts:", posts);
  return posts;
};
export const getPostId = async (id: string) => {
  const response = await fetch("http://localhost:3000/posts/" + id);
  const posts = await response.json();
  console.log("🚀 ~ getPosts ~ posts:", posts);
  return posts;
};
