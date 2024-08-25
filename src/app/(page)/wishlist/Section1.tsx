"use client"

import CardListSong from "@/app/components/card/CardListSong";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1(){

  const [data,setData] = useState([]);
// Lọc ra những bài hát đã thêm vào yêu thích để hiển thị ra
  useEffect(()=> {
    onAuthStateChanged(authFirebase, async(user) => {
        if(user){
            const userId=user.uid;
            console.log("Đã đăng nhập",userId);
            const result:any = await new Promise((resolve) => {
              const songsRef=ref(dbFirebase,"songs")//biến này để ở trong hoặc ngoài hàm result cũng được
              onValue(songsRef,async (snapshot) => {
                  const data:any=[];
                  for (const key in  snapshot.val()) {
                      // Lấy ra giá trị của biến snapshot tại vị trí của key đó
                      const value = snapshot.val()[key];
                      console.log(value);
                      // Sau khi lấy sẽ push lại vào mảng rỗng
                      // Kiểm tra đã thêm vào yêu thích chưa mới push vào
                      if(value.wishlist && value.wishlist[userId]){
                        data.push({
                          id:key,
                          title:value.title,
                          image:value.image,
                          audio:value.audio,
                          listen:value.listen,
                          link:`/song/${key}`, // Đường link động để ấn vô chuyển đến trang chi tiết
                          wishlist:value.wishlist
                      })
                      }
                  }
                  resolve(data);
              });
          });
          // Sau khi lấy được hết data ra rồi thì mới set ngược lại vào biến useState để truyền và vẽ ra giao diện
          setData(result);
        }
    })
},[])

  
    return(
        <>
            <div className="mt-[30px]">
            <Title text="Bài Hát Yêu Thích"/>
        
            {/* Phần bọc danh sách bài hát */}
            <CardListSong data={data}/>
            </div>
        </>
    )
}

