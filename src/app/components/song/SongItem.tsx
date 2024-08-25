import Link from "next/link";
import { FaHeart, FaPlay } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart from "../button/ButtonHeart";

export default function SongItem(props:any){
    const {
        id="",
        image="",
        title="",
        singer="",
        listen="",
        audio=""
    } =props
    return(
        <>
        <div className="bg-[#212121] rounded-[15px] p-[10px] flex items-center"
        //Mỗi một bài hát sẽ được bổ sung thêm phần id của bài hát đó
        song-id={id}
        >
            <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
              <img src={image} alt={title} className="w-full h-full object-cover"/>
            </div>
            <div className="flex-1">
                <div className="mb-[2px]">
                    <Link href={"#"} className="font-[600] text-[16px] text-white">
                    {title}
                    </Link>
                </div>
                <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[5px]">
                    <div>
                        {singer}
                    </div>
                </div>
                <div className="font-[400] text-[12px] text-white">
                    <div>
                        {/* Tự thêm dấu phẩy ở hàng nghìn vào cho lượt nghe */}
                        {listen.toLocaleString()} lượt nghe
                    </div>
                </div>
            </div>
            <div>
                {/* Dùng destructuring để phá vỡ cấu trúc truyền tất cả các biến cần có của props sang nút play */}
                <ButtonPlay {...props} className="w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px]"/>
                <ButtonHeart {...props}/>
            </div>
          </div>
        </>
    )
}