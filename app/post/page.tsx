import { getAllPosts } from "@/api/post";
import Link from "next/link";

export default async function Post() {
  const post = await getAllPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Post Page 1</h1>
      <img src={"https://picsum.photos/300/200.jpg"} alt="" />
      <div className="flex gap-4 ">
        {post.map((item: any) => {
          return (
            <Link href={"/post/" + item.id} key={item.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={item.image} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">{item.content}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}