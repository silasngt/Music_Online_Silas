import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
    return (
    <>
      {/* h-100vh có nghĩa là sẽ full chiều cao cả 1 trang web */}
      <div className="bg-[#212121] h-[100vh] fixed w-[280px]">
        <div className="g-[#1C1C1C] py-[25px] px-[20px">
          <Link href={"/"}>
          <img
          src="/Logo.svg"
          alt="Logo"
          className="h-[42px] w-auto"
          />
          </Link>
        </div>
        <SiderMenu/>
      </div>
      
    </>
    );
  }
  