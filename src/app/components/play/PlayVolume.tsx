"use client"
import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume(){
    const handleChange = (event:any) => {
        const boxVolumeTotal=event.target;
        const elementPlayAudio:any = document.querySelector(".play-audio");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");

        // Thuộc tính có sẳn để chỉnh lại ẩm lượng
            // Giá trị được lấy đang là kiểu string sẽ chuyển về dạng số để set
            // Nhưng volume được sử dụng thì giá trị sẵn là 0 đến 1 nhưng volume trên giao diện của mình là 0 đến 100 nên phải chia thêm cho 100
                // 0 đến 1 chia cho 100 = 0 đến 100
        elementAudio.volume = parseFloat(boxVolumeTotal.value)/100;

        const boxVolumeCurrent:any = document.querySelector(".box-volume .inner-current");
        boxVolumeCurrent.style.width=`${boxVolumeTotal.value}%`
    }
    return(
        <>
            <div className="w-[184px] flex items-end box-volume">
                {/* Do khối div ở dưới đã có position là relative và được set cố định absolute nên đã nằm cố định như vây
                muốn cho icon và thanh âm lượng bằng nhau phải set items-end để icon chạy xuống phía dưới   */}
                <button className="text-[16px] text-white inner-button">
                    <FaVolumeHigh/>
                </button>
                <div className="ml-[6px] relative">
                    <div className="h-[3px] w-[100%] bg-primary rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
                    <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={100} // Để ở đây là 80 thì tương ứng chiều rộng thanh màu xanh cũng là 80%(Thanh màu xanh được set bởi thẻ div)
                    className="w-full h-[3px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                    onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}