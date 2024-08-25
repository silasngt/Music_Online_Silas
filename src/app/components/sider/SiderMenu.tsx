"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import { ReactNode, useEffect, useState } from "react";
import { FaHouse,FaMusic,FaPodcast,FaHeart,FaRightFromBracket,FaUser,FaUserPlus } from "react-icons/fa6";
import SiderMenuItem from "./SiderMenuItem";
export default function SiderMenu() {
    // Kiểm tra trạng thái đăng nhập - để thực hiện chức năng đăng xuất
        // Ban đầu biến isLogin được có gí trị là undifinded
    const [isLogin,setIsLogin] = useState<boolean>();
    useEffect(() =>{
        onAuthStateChanged(authFirebase,(user) => {
            // Nếu như có người dùng thì mới chạy vào if để thực hiện
            if(user){
                // Lấy ra được id của ng dùng
                const uid = user.uid;
                // console.log("Đã đăng nhập", uid);
                setIsLogin(true);
            } else {
                // console.log("Chưa đăng nhập");
                setIsLogin(false)
            }
        })
    },[])// Truyền vào dependences rỗng cho useEffect để mỗi lần biến isLogin có sự thay đổi thì mới chạy lại
    // console.log(isLogin)


    interface MenuLink {
        icon:ReactNode,
        title:String,
        link:Url,
        logged?:boolean // Có dấu chấm hỏi là trường tự chọn có hay không cũng được
    }
    const menu:MenuLink[] = [
        {
            icon:<FaHouse/>,
            title:"Trang chủ",
            link:"/"
        },
        {
            icon:<FaMusic/>,
            title:"Danh mục bài hát",
            link:"/categories"
        },
        {
            icon:<FaPodcast/>,
            title:"Ca sĩ",
            link:"/singer"
        },
        {
            icon:<FaHeart/>,
            title:"Bài hát yêu thích",
            link:"/wishlist",
            logged:true //Cờ để lưu lại những trang mà k cần đăng nhập vẫn có thể xem được
        },
        {
            icon:<FaRightFromBracket/>,
            title:"Đăng xuất",
            link:"/logout",
            logged:true
        },
        {
            icon:<FaUser/>,
            title:"Đăng nhập",
            link:"/login",
            logged:false
        },
        {
            icon:<FaUserPlus/>,
            title:"Đăng ký",
            link:"/register",
            logged:false
        },
    ]

    
    

    return (
    <>
      <nav className="pt-[30px] px-[20px]" >
          <ul className="">
            {menu.map((item,index) => (
                <SiderMenuItem key={index} 
                item={item} 
                // Nếu như biến logged này là undf thì set lại biến show bằng true để show ra còn k thì false để ấn đi hoặc bằng biến login cũng tương tự
                isShow={item.logged === undefined || item.logged === isLogin ? true : false}/>
            ))}
          </ul>
        </nav>
    </>
    );
  }
  