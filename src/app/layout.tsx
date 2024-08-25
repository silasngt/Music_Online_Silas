import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sider from "./components/sider/Sider";
import Search from "./components/search/Search";
import Play from "./components/play/Play";
import { Suspense } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project 5",
  description: "Project 5 : Nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929]`}>
        <div className="container mx-auto">
          {/* Set flex ở đây để khối Sider và khối Search, Children nằm cùng 1 hàng, sau đó set align-item bằng start để cho cả 2 khối đều nằm lên trên
          căn chỉnh cho dễ dàng hơn */}
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider/>
            </div>
            {/* Khối nay cách khối sider bên phải 20px và chiếm phần còn lại so với khối
            sider nên để flex là 1 */}
            <div className="ml-[20px] flex-1">
              {/* Nhúng suspense vào để khi deloy web lên online không xảy ra lỗi */}
            <Suspense>
              <Search/>
            </Suspense>
              
              <main className="mt-[30px] mb-[120px]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Play/>
      </body>
    </html>
  );
}
