import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
interface MenuLink {
    icon:ReactNode,
    title:String,
    link:Url,
    logged?:boolean
}
export default function SiderMenuItem(props:{item:MenuLink,isShow:boolean}){
    const {item,isShow=false} = props;

    // Lấy ra url trên web để so với code nếu đóng thì khi ấn vào mục nào thì mục đó sẽ được xanh lên biết là mình đang ấn vào mục đó
    const pathname = usePathname();
    return(
        <>
        {/* Nếu như biến isShow được xét bằng true thì mới vẽ ra thẻ li */}
        {isShow &&
        (
        <li className="mb-[30px]" >
            {/* Nếu mà đường link được ấn ở trên web khớp với đường link đang được vẽ ra hiện tại
            thì sẽ đổi màu xanh còn không giữ nguyên là trắng */}
            <Link 
            href={item.link} 
            className={
                "flex items-center text-white hover:text-primary "
                + (item.link === pathname ? "text-primary" : "text-white")
            }
            >
                <span className="text-[20px] mr-[20px]">
                    {item.icon}
                </span>
                <span className="text-[16px] font-[700]">
                    {item.title}
                </span>
            </Link>
        </li>
        )}
        
        </>
    )
}