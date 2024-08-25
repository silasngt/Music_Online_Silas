import CardListSong from "@/app/components/card/CardListSong";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section2(props:{singerId:string}){
  const {singerId} = props;
  const result:any = await new Promise((resolve) => {
    const songsRef=ref(dbFirebase,"songs")//biến này để ở trong hoặc ngoài hàm result cũng được
    
    onValue(songsRef,async (snapshot) => {
        const data:any=[];
        for (const key in  snapshot.val()) {
            // Lấy ra giá trị của biến snapshot tại vị trí của key đó
            const value = snapshot.val()[key];
            console.log(value);
            // Sau khi lấy sẽ push lại vào mảng rỗng
            if(value.singerId.includes(singerId)){
              // Kiểmn tra nếu mà singerId hiện tại nằm trong mảng singerId nào thì sẽ hiện bài hát lên
              data.push({
                id:key,
                title:value.title,
                image:value.image,
                audio:value.audio,
                listen:value.listen,
                link:`/song/${key}`, // Đường link động để ấn vô chuyển đến trang chi tiết
                singerId:singerId
              })
            }
            
        }
        resolve(data);
    });
});
    return(
        <>
            <div className="mt-[30px]">
            <Title text="Danh Sách Bài Hát"/>
        
            {/* Phần bọc danh sách bài hát */}
            <CardListSong data={result}/>
            </div>
        </>
    )
}