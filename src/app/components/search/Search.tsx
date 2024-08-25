"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();//Lấy được chuỗi trên thanh url
  const keywordUrl=searchParams.get("keyword")|| "";// trường hợp k có thì sẽ gán là rỗng

  const handleSearch = (event:any) => {
    event.preventDefault();

    const keyword = event.target.keyword.value;
    if(keyword){
      // Kiểm tra xem có từ khóa nhập vào không mới chuyển hướng sang trang tìm kiếm
      router.push(`/search?keyword=${keyword}`)
    }

  }
    return (
    <>
    <form 
    onSubmit={handleSearch}
    className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center">
      <input  
      type="text"
      name="keyword"
      placeholder="Tìm kiếm..."
      className="order-2 text-[16px] font-[600] text-white bg-transparent outline-none flex-1"
      defaultValue={keywordUrl}
      />
      <button
      type="submit"
      className="border-1 text-[22px] text-white mr-[20px]"
      >
        <FaMagnifyingGlass/>
      </button>
    </form>
    </>
    );
  }
  