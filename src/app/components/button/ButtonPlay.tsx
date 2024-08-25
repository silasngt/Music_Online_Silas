"use client"
import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props:any){
    const hanblePlay = () => {
        // Một elemtent lấy từ trong giao diện sẽ có rất nhiều kiểu dữ liệu
            // Nên để kiểu any cho biến cha để không gặp lỗi
        const elementPlayAudio:any = document.querySelector(".play-audio");
        // Đứng từ thẻ cha truy vấn ra các thẻ con bằng class
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        const elementSource = elementPlayAudio?.querySelector(".inner-source");
        // Gán lại thuộc tính src của thẻ inner-source bằng thuộc tính audio của props
        elementSource.src=props.audio;

        // Chèn song-id để giúp lấy ra dễ dàng hỗ trợ cho việc chuyển qua lại giữa các bài hát
        elementPlayAudio.setAttribute("song-id",props.id)


        // Tải dữ liệu của đường link lên
        elementAudio.load();
        // Để chạy file âm thanh đó lên
        elementAudio.play();

        // Logic để khi nào phát nhạc thì mới hiện khối Play lên
        if(elementPlayAudio.classList.contains("hidden")){
            // Kiểm tra thẻ có đang chứa class hidden hay không 
            elementPlayAudio.classList.remove("hidden")
        }

        // Khi ấn phát nhạc thông tin sẽ được truyền xuống khối Play
            // Hiển thị ảnh ca sĩ
            const elementImage= elementPlayAudio?.querySelector(".inner-image");
            elementImage.src=props.image;
            elementImage.alt=props.title;

            // Hiển thị tiêu đề
            const elementTitle= elementPlayAudio?.querySelector(".inner-title");
            elementTitle.innerHTML=props.title;

            // Hiển thị ca sĩ
            const elementSinger= elementPlayAudio?.querySelector(".inner-singer");
            elementSinger.innerHTML=props.singer;

            // Thêm class Play cho box-button-play
                // Nói đơn giản là ấn dừng hoặc chạy tiếp bài hát
                const boxButtonPlay=document.querySelector(".box-button-play")
                boxButtonPlay?.classList.add("play");

            // Đưa tổng thời gian vào thanh thòi gian
            const boxPlayTime:any = document.querySelector(".box-play-time");
            const boxPlayTimeTotal= boxPlayTime?.querySelector(".inner-total");
            const boxPlayTimeCurrent= boxPlayTime?.querySelector(".inner-current");
            // Khi ấn vào nút Play lấy ra tổng thời gian của bài hát
                // Sử dụng hàm có sẵn là onloadedmetadata và duration
            elementAudio.onloadedmetadata = () => {
                const totalTime=elementAudio.duration;
                // Gán tổng thời gian của bài hát
                boxPlayTimeTotal.max=totalTime;

                // Lấy ra thòi gian hiện tại bài hát đang phát đến
                elementAudio.ontimeupdate = () => {
                    const currentTime = elementAudio.currentTime;
                    // Thêm thời gian vào khối để chạy
                    boxPlayTimeTotal.value=currentTime;

                    // Logic lại khối màu xanh chạy theo
                    const percent = currentTime*100/totalTime;
                    boxPlayTimeCurrent.style.width=`${percent}%`;
                }
            }
    }
    return(
        <>
            <button 
            onClick={hanblePlay}
            className={props.className + " inner-button-play"}
            >
                <FaPlay/>
            </button>
        </>
    )
}