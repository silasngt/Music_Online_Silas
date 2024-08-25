import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue,ref } from "firebase/database";

export default async function  Section2() {
    let result:any = await new Promise((resolve) => {
        const categoriesRef=ref(dbFirebase,"categories")//biến này để ở trong hoặc ngoài hàm result cũng được
        onValue(categoriesRef,async (snapshot) => {
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
                    description:value.description,
                    link:`/categories/${key}` // Đường link động để ấn vô chuyển đến trang chi tiết
                })
            }
            resolve(data);
        });
    });
    //Phải để kiểu cho result là any và biến là let thì mới có thể gán lại kiểu dữ liệu
    result = result.slice(0,5);//Cắt mảng từ ví trí 0 đến ví trí 3 là 3 bảng ghi

    console.log(result);
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh Mục Nổi Bật"/>
                <CardList data={result}/>
            </div>
        </>
    )
}