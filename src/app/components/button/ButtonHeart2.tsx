"use client"
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export default function ButtonHeart2(props:any){
    const [isActive,setIsActive] = useState(false);
    const {id,wishlist} = props;

    // Kiểm tra trạng thái đã đăng nhập chưa để hiển thị wishlist
    useEffect(()=> {
        onAuthStateChanged(authFirebase,(user) => {
            if(user){
                const userId=user.uid;
                console.log("Đã đăng nhập",userId);
                // Kiểm tra object wishlist đã tồn tại userId chưa nếu rồi thì set lại là true
                if(wishlist && wishlist[userId]){
                    setIsActive(true);
                }
            }
        })
    },[])


    const handleAddWishList = () => {
        // Lấy ra được id của người thêm bài hát vào yêu thích
        const userId = authFirebase?.currentUser?.uid;
        console.log(id);
        console.log(userId);
        if(id && userId){
            // Đầu tiên là truy vấn đến bài hát có id như vậy trong db khi ấn vào nút thích
            const songRef=ref(dbFirebase,`/songs/${id}`);
            // Hàm để kiểm tra đã được thêm vào danh sách yêu thích chưa
                // Nếu có rồi thì xóa ra
                // Nếu chưa có thì thêm vào
                // Lấy các bài hát đã được truy vấn ra rồi truyền vào hàm run sau đó lấy ra bài hát
                runTransaction(songRef,(song) => {
                    // Có bài hát được lấy ra thì mới thực hiện các logic bên trong if
                    if(song){
                        // Nếu như song đã có cái key wishlist rồi cũng như là userid => Bài hát đã được thêm vào yêu thích
                        // Nên khi ấn vào sẽ xóa bài hát khỏi mục yêu thích
                        if(song.wishlist && song.wishlist[userId]){
                        song.wishlist[userId]=null;
                        setIsActive(false)
                        } else {
                            // Nếu chưa tồn tại key đó thì sẽ thêm vào
                            if(!song.wishlist){
                                song.wishlist={};
                            }
                            // Rồi sau đó mới thêm id của ng dùng vào
                            song.wishlist[userId]=true;
                            setIsActive(true)
                        }
                    }
                    return song;    
                })
        }
    }
    return(
        <>
        <button 
        className={"text-[20px] " + (isActive ? "text-primary" :"text-white")}
        onClick={handleAddWishList}
        >
            <FaRegHeart/>
        </button>
        </>
    )
}