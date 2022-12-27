import Image from "next/image";
import { PageTitle } from "src/component/PageTitle";

const Home = () => {
  return (
    <main>
      <div className="p-8">
        <PageTitle title="ルートページ" />
        <p>Next.js v13を勉強中！</p>
        <p>ここはルートページです</p>
        <p>Next.js v13の概要</p>
        <ul>
          <li>appDirectory（β）</li>
          <li>Turbopack（α）</li>
          <li>next/image</li>
          <li>@next/font（β）</li>
          <li>next/link</li>
        </ul>
        <div className="mt-16">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>
    </main>
  );
};

export default Home;
