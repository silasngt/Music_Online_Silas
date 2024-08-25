import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { notFound } from "next/navigation";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue,ref } from "firebase/database";

export default async function SingerDetailPage({params}:{params:{id:string}}) {
  let result:any = await new Promise((resolve) => {
    const singerRef=ref(dbFirebase,`singers/${params.id}`)//biến này để ở trong hoặc ngoài hàm result cũng được
    onValue(singerRef,async (snapshot) => {
        const data = snapshot.val();// Vì chỉ lấy ra 1 bản ghi cho trang chi tiết nên không cần vòng lặp
        
        resolve(data);
    });
});
  if(!result){
    notFound();
  }
  
  return (
    <>
      {/* CardInfo */}
      <CardInfo
      image={result.image}
      title={result.title}
      description={result.description}
      />
      {/* Section 2: Danh sách bài hát */}
      <Section2 singerId={params.id}/>
    </>
    );
  }
  