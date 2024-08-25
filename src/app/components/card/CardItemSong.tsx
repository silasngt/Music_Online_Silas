import Link from "next/link";
import { FaPlay, FaRegHeart } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart2 from "../button/ButtonHeart2";

export default function CardItemSong(props:any) {
    const {
        image="",
        title="",
        singer="",
        time="",
        link=""
    } = props;
    return(
        <>
            <div className=" flex items-center justify-between  rounded-[15px] py-[18px] px-[10px] bg-[#212121]">
                {/* Nút Play + Hình ảnh + Tên bài hát */}
                {/* Left */}
                <div className="flex items-center w-[40%]">
                    <ButtonPlay {...props} className="text-[24px] text-white"/>
                    <div className="w-[42px] truncate aspect-square rounded-[8px] mx-[12px]">
                        <img
                        src={image}
                        alt={title}
                        className="w-full h-auto"
                        />
                    </div>
                    <div className="font-[700] text-[14px] text-[#FFFFFF]">
                        <Link href={link}>
                            {title}
                        </Link>
                        
                    </div>
                </div>
                {/* Center */}
                <div className="w-[30%] text-center">
                    <div className="font-[400] text-[14px] text-[#FFFFFF] ">
                        {singer}
                    </div>
                </div>
                
                    {/* Right */}
                    {/* Justify-end để cho hai khối nằm ỏ phía cuối */}
                <div className="flex items-center justify-end w-[30%] text-right">
                    <div className="font-[400] text-[14px] text-[#FFFFFF] mr-[18px]">
                        {time}
                    </div>
                    <ButtonHeart2 {...props}/>
                </div>
            </div>
        </>
    )
}