import Link from "next/link";
import { Post } from "src/app/(group1)/dynamic_segments/[id]/page";

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="p-8">
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id} className="list-disc list-inside mb-2">
            <Link href={`/dynamic_segments/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Page;
