import { FC } from "react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Page = async ({ params }: any) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="p-8">
      <p className="mb-8">{`${id} page`}</p>
      <p>{post.body}</p>
    </div>
  );
};

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

export default Page;
