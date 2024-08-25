import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { notFound } from "next/navigation";

export default async function SongDetailPage(props:{params:{id:string}}) {
  const {params} = props;
  let result:any = await new Promise((resolve) => {
    const songRef=ref(dbFirebase,`songs/${params.id}`)//biến này để ở trong hoặc ngoài hàm result cũng được
    onValue(songRef,async (snapshot) => {
        const data = snapshot.val();// Vì chỉ lấy ra 1 bản ghi cho trang chi tiết nên không cần vòng lặp
        
        resolve(data);
    });
});
if(!result){ // Kiểm tra xem có data ở trang đó không
  notFound();//Nếu trang không có data sẽ được chuyển sang trang 404
}
    return (
    <>
      <div className="">
        {/* CardInfo */}
        <CardInfo
         image={result.image}
         title={result.title}
         description="Hồ Quang Hiếu, Huỳnh Văn"
        />
        {/* Section 2 : Lời bài hát */}
        <Section2 lyric={result.lyric}/>

        {/* Section 3 : Bài Hát Cùng Danh Mục*/}
        <Section3 categoryId={result.categoryId}/>
      </div>
    </>
    );
  }
  