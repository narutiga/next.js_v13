import { FC } from "react";
import { Footer } from "src/component/Footer/Footer";
import { Header } from "src/component/Header/Header";
import "./globals.css";

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="flex min-h-screen flex-col text-gray-600">
          <div className="flex-1">
            <Header />
            <div className="">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
