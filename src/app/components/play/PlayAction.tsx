"use client"
import { FaBackwardStep, FaForwardStep, FaPlay,FaPause } from "react-icons/fa6";

export default function PlayAction(){
    const handlePlay=() => {
        // Lấy ra nút play để có rồi thì xóa đi, chưa có thì thêm vào tương đương với việc ấn dừng hoặc chạy tiếp bài hát
        const playAudio:any = document.querySelector(".play-audio");
        const boxButtonPlay=playAudio?.querySelector(".box-button-play");
        // Hỗ trợ cho việc dừng và phát nhạc , kết hợp với hàm pause và play có sẵn
        const elementAudio = playAudio?.querySelector(".inner-audio");
        
        // Có thể sử dụng toggle những có một số logic không hay khi dừng và phát nhạc
        if(boxButtonPlay?.classList.contains("play")){
            boxButtonPlay.classList.remove("play");
            elementAudio.pause();
        } else {
            boxButtonPlay.classList.add("play");
            elementAudio.play();
        }
    }
    const handleNextPrev = (action:string) => {
        const playAudio:any = document.querySelector(".play-audio");
        // Lấy ra được id của bài hát hiện tại
        const idSongCurrent = playAudio.getAttribute("song-id");
        // lấy ra được danh sách bài hát và id của bài hát hiện tại
        const elementSongCurrent:any = document.querySelector(`[song-list] [song-id="${idSongCurrent}"]`)

        // Kiểm tra xem có bài hát hiện tại chưa thì mới cho thực hiện action
        if(elementSongCurrent){
            switch (action) {
                case "next":
                    // Tìm ra phần tử kế tiếp
                    const elementSongNext = elementSongCurrent.nextElementSibling;
                    // Kiểm tra xem có phần tử kế tiếp không biết đâu là bài hát cuối cùng
                    if(elementSongNext){
                        const buttonPlay = elementSongNext.querySelector(".inner-button-play");
                        buttonPlay.click();
                    }
                    break;
                case "prev":
                    const elementSongPrev = elementSongCurrent.previousElementSibling;
                    // Kiểm tra xem có phần tử trước đó không biết đâu là bài hát cuối cùng
                    if(elementSongPrev){
                        const buttonPlay = elementSongPrev.querySelector(".inner-button-play");
                        buttonPlay.click();
                    }
                    break;
            
            }
        }
    }
    return(
        <>
            <div className="flex items-center justify-center">
                <button className="text-white text-[16px]"
                onClick={() => handleNextPrev("prev")}
                >
                    <FaBackwardStep/>
                </button>
                <button 
                onClick={handlePlay}
                className="text-white text-[16px] w-[32px] h-[32px] bg-primary rounded-full inline-flex items-center justify-center mx-[42px]
                box-button-play">
                    <FaPlay className="inner-icon-play"/>
                    <FaPause className="inner-icon-pause"/>
                </button>
                <button className="text-white text-[16px]"
                onClick={() => handleNextPrev("next")}
                >
                    <FaForwardStep/>
                </button>
            </div>
        </>
    )
}