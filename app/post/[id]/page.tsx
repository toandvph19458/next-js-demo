import { getPostId } from "@/api/post";
import Link from "next/link";

export default async function PostDetail({ params: { id } }: any) {
  console.log(id);
  const post = await getPostId(id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Post Page Detail {post.id}</h1>
      <img src={post.image} alt="" />
      <h2>{post.name}</h2>
      <p>{post.content}</p>
    </main>
  );
}
