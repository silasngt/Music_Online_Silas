"use client"
import CardListSong from "@/app/components/card/CardListSong";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1(){
  const searchParams = useSearchParams();//Lấy được chuỗi trên thanh url
  const keywordUrl=searchParams.get("keyword")|| "";
  // Hỗ trợ lấy data theo kiểu useclient
  const [data,setData] = useState([]);
  useEffect(() => {
    // Lấy ra toàn bộ bài hát
    const fetchApi= async () => {
      let result:any = await new Promise((resolve) => {
        const songsRef=ref(dbFirebase,"songs")
        onValue(songsRef,async (snapshot) => {
            const data:any=[];
            for (const key in  snapshot.val()) {
                // Lấy ra giá trị của biến snapshot tại vị trí của key đó
                const value = snapshot.val()[key];
                console.log(value);
                // Sau khi lấy sẽ push lại vào mảng rỗng
                data.push({
                    id:key,
                    title:value.title,
                    image:value.image,
                    audio:value.audio,
                    listen:value.listen,
                    link:`/song/${key}` // Đường link động để ấn vô chuyển đến trang chi tiết
                })
            }
            resolve(data);
        });
    });
    //  Hỗ trợ tìm ra đúng tên bài hát chứa những kí tự ( Có dấu ) được nhập vào
    const regex = new RegExp(keywordUrl,"i")
    result = result.filter((item:any) => regex.test(item.title))// Lọc qua từng bản ghi để tìm ra từ chứ câu regex trên (Không phân biệt hoa thường)
    // Đầu tiên là một chuỗi data rỗng sau đó sẽ được lấy ra hết từ firebase và truyền ngược vào mảng data bằng useState
    setData(result);
    }
    fetchApi();
  }, [keywordUrl]);// Chỉ lấy data lại khi keyword trên url bị thay đổi
    return(
        <>
            <div className="mt-[30px]">
            <Title text="Kết quả tìm kiếm"/>
        
            {/* Phần bọc danh sách bài hát */}
            <CardListSong data={data}/>
            </div>
        </>
    )
}