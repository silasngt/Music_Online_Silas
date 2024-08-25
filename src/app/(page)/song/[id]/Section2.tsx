import Title from "@/app/components/title/Title";

export default function Section2(props:{lyric:string}){
    const {
        lyric=""
    } = props;
    return(
        <>
            <div>
                <Title text="Lời Bài Hát"/>
                {/* whitespace-pre-line hỗ trợ cho việc tự động xuống hàng */}
                <div className="bg-[#212121] text-white rounded-[15px] p-[20px] whitespace-pre-line">
                    {lyric}
                </div>
            </div>
        </>
    )
}