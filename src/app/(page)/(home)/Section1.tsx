import BannerHome from "@/app/components/banner/BannerHome";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { resolve } from "path";

export default async function Section1() {
    
    // Tạo ra một mảng dữ liệu để truyền vào Song List
        // Kiểu dữ liệu là any tại vì là một mảng object

    // Biến để lấy dữ liệu từ database về
    const songRef=ref(dbFirebase,"songs")

    // Để lấy dữ liệu từ biến chứa dữ liệu được lấy từ database về
        // Phải dùng hàm async để chờ cho biến trên ref được hết dữ liệu từ database về
    
        // const data: any =[
    //     {
    //         image:"/demo/img-3.png",
    //         title:"Cô Phòng",
    //         singer:"Hồ Quang Hiếu, Huỳnh Văn",
    //         listen:24500
    //     },
    //     {
    //         image:"/demo/img-4.png",
    //         title:"Hoa Nở Bên Đường",
    //         singer:"Quang Đăng Trần, ACV",
    //         listen:20500
    //     },
    //     {
    //         image:"/demo/img-5.png",
    //         title:"Hứa Đợi Nhưng Chẳng Tới",
    //         singer:"Lâm Tuấn, Vương Thiên Tuấn",
    //         listen:18200
    //     },
    // ];

    // Để giải quyết vấn đề là mảng data sau khi push vào chỉ có thể lấy ra được ở trong đúng hàm onValue mà không thể vẽ ra giao diện
    // Promise đơn giản là cú pháp để tạo ra hàm chờ đợi thôi
        // resovle là hàm để đợi lấy đủ hết data sau đó sẽ truyền ngược lại cho biến result (Kiểu như một hàm trung gian)
        let result:any = await new Promise((resolve) => {
            onValue(songRef,async (snapshot) => {
                const data:any=[];
                for (const key in  snapshot.val()) {
                    // Lấy ra giá trị của biến snapshot tại vị trí của key đó
                    const value = snapshot.val()[key];
                    // Sau khi lấy sẽ push lại vào mảng rỗng
                    data.push({
                        id:key,
                        image:value.image,
                        title:value.title,
                        audio:value.audio,
                        listen:value.listen,
                        singer:"Hồ Quang Hiếu, Huỳnh Văn",
                        wishlist:value.wishlist // Để hiển thị mặc định bài hát yêu thích người dùng thêm vào khi đăng nhập tài khoản cá nhân
                    })
                }
                resolve(data);
            });
        });
        result = result.slice(0,3);//Cắt mảng từ ví trí 0 đến ví trí 3 là 3 bảng ghi

        console.log(result);
    return(
        <>
            <div className="flex flex-wrap items-start">
                <div className="xl:w-[534px] lg:w-[100%]">
                    <BannerHome/>
                </div>

                <div className="xl:flex-1 xl:ml-[20px] lg:w-[100%]
                lg:flex-none">
                    <Title text="Nghe Nhiều"/>
                    
                    <SongList data={result}/>
                    
                </div>
            </div>
        </>
    )
}