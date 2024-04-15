import { getPostId } from "@/api/post";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const post = await getPostId(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.name,
    description: post.content,
    openGraph: {
      title: post.name,
      description: post.content,
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default async function PostDetail({ params: { id } }: any) {
  const post = await getPostId(id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Post Page Detail {post.id}</h1>
      <div className="">
        <Image
          layout="responsive"
          src={post.image as string}
          alt="image"
          width={500}
          height={300}
          loading="lazy"
        />
      </div>
      <h2>{post.name}</h2>
      <p>{post.content}</p>
    </main>
  );
}
