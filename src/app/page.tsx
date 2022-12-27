import { PageTitle } from "src/component/PageTitle";

const Home = () => {
  return (
    <main>
      <div className="p-8">
        <PageTitle title="ルートページ" />
        <p>Next.js v13をさわってみてます</p>
        <p>ここはルートページです</p>
        <div className="m-8">
          <p>Next.js v13の概要</p>
          <ul>
            <li>appDirectory（β）</li>
            <li>Turbopack（α）</li>
            <li>next/image</li>
            <li>@next/font（β）</li>
            <li>next/link</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
