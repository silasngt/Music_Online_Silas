"use client"
export default function PlayTime(){
    // Logic để có thể kéo được thanh thời gian 
    const handleChange = (event:any) => {
        const boxPlayTimeTotal = event.target;
        console.log(boxPlayTimeTotal.value);

        // Chuyển lại thành kiểu float cho thanh thời gian mỗi khi kéo và thay đổi thời gian
        const elementPlayAudio:any = document.querySelector(".play-audio");
        // Đứng từ thẻ cha truy vấn ra các thẻ con bằng class
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");


        elementAudio.currentTime=parseFloat(boxPlayTimeTotal.value);
    }
    return(
        <>
            <div className="mt-[11px] relative box-play-time">
                {/* Thẻ div này dùng để hiển thị phần thanh màu xanh chạy */}
                <div className="h-[4px] w-[0] bg-primary rounded-[50px] absolute left-0 top-[13px] inner-current"></div>
                <input
                type="range"
                min={0}
                max={0}
                defaultValue={80}
                className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total "
                onChange={handleChange}
                />
            </div>
        </>
    )
}