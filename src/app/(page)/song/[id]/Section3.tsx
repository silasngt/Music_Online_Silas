import CardListSong from "@/app/components/card/CardListSong";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";

export default async function Section3(props:{categoryId:string}){
  const {categoryId} = props;


    let result:any = await new Promise((resolve) => {
    const songsRef=ref(dbFirebase,"songs")//biến này để ở trong hoặc ngoài hàm result cũng được
    // orderChildBy sẽ hỗ trợ lấy ra theo key nào, thì key ở đây là categoryId và bằng với id được lấy từ file json
    const songQuery = query(songsRef,orderByChild("categoryId"),equalTo(categoryId)) // Lấy ra bài hát theo id
    onValue(songQuery,async (snapshot) => {
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

result = result.filter((item:any) => item.id!=="2")//Lọc ra những bài hát có id khác 2
    return(
        <>
            <div className="mt-[30px]">
            <Title text="Bài Hát Cùng Danh Mục"/>
        
            {/* Phần bọc danh sách bài hát */}
            <CardListSong data={result}/>
            </div>
        </>
    )
}