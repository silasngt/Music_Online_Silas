import Link from "next/link";

export default function CardItem(props:any) {
    const {
        image="",
        title="",
        description="",
        link=""
    } = props
    return (
        <>
            <div className="">
                <Link href={link}>
                    <div className="w-full aspect-square rounded-[15px] truncate mb-[10px]">
                       <img src={image} alt={title} className="w-full h-full object-cover"/> 
                    </div>
                    <div className="font-[700] text-[14px] text-white mb-[10px] line-clamp-1">
                        {title}
                    </div>
                    {/* Thêm line-clamp-1 giúp chữ chỉ hiển thị 1 dòng dài hơn sẽ bị ẩn đi và hiển thị thành ... */}
                    <div className="font-[400] text-[12px] text-white  line-clamp-1">
                        {description}
                    </div>
                </Link>
            </div>
        </>
    )
}