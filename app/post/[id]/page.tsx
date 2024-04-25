import { getPostId } from "@/api/post";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

let cachedPost: any = null;

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  if (!cachedPost || cachedPost.id !== id) {
    // Nếu không có dữ liệu trong cache hoặc id khác id hiện tại, thực hiện API call
    const post = await getPostId(id);
    // Lưu trữ dữ liệu vào cache
    cachedPost = post;
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: cachedPost.name,
    description: cachedPost.content,
    openGraph: {
      title: cachedPost.name,
      description: cachedPost.content,
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default async function PostDetail({ params: { id } }: any) {
  // fetch data
  if (!cachedPost || cachedPost.id !== id) {
    // Nếu không có dữ liệu trong cache hoặc id khác id hiện tại, thực hiện API call
    cachedPost = await getPostId(id);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Post Page Detail {cachedPost.id}</h1>
      <div className="">
        <Image
          layout="responsive"
          src={cachedPost.image as string}
          alt="image"
          width={500}
          height={300}
        />
      </div>
      <h2>{cachedPost.name}</h2>
      <p>{cachedPost.content}</p>
    </main>
  );
}
