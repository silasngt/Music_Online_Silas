import CardInfo from "@/app/components/card/CardInfo";
import CardListSong from "@/app/components/card/CardListSong";
import Title from "@/app/components/title/Title";
import { FaHeartBroken } from "react-icons/fa";
import { FaHeart, FaHeartCircleBolt, FaHeartCircleCheck, FaHeartCircleXmark, FaPlay, FaRegHeart } from "react-icons/fa6";
import Section2 from "../Section2";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";

export default async function SongCategoriesPage(props:{params :{id:string}}) {
  const {params} = props;
  let result:any = await new Promise((resolve) => {
    const categoryRef=ref(dbFirebase,`categories/${params.id}`)//biến này để ở trong hoặc ngoài hàm result cũng được
    onValue(categoryRef,async (snapshot) => {
        const data = snapshot.val();// Vì chỉ lấy ra 1 bản ghi cho trang chi tiết nên không cần vòng lặp
        
        resolve(data);
    });
});
  return (
      
    <>
       {/* Section 1 : CardInfo */}
       <CardInfo
        image={result.image}
        title={result.title}
        description={result.description}
       />
       {/* Section 2 */}
       <Section2 id={params.id}/>
    </>
    );
  }
  