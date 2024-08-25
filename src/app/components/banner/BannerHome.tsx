export default function BannerHome() {
    return(
        <>
            <div
                className="w-full flex items-center rounded-[15px] bg-cover"
                style={{backgroundImage:"url('/demo/bg-1.png')"}}
                >
                {/* Phần chữ bên trái */}
                {/* Để flex-1 để phần chũ sẽ chiếm phần còn lại của giao diện */}
                <div className="flex-1 mr-[34px] ml-[30px]">
                    <div className="font-[700] text-[32px] text-white mb-[6px]">
                    Nhạc EDM
                    </div>
                    <div className="font-[500] text-[14px] text-white">
                    Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
                    </div>
                </div>
                {/* Phần hình ảnh con người bên phải */}
                {/* Khung để chứa ảnh có kích thước là 215px rộng */}
                <div className="w-[215px] mr-[22px] mt-[48px]">
                    <img
                    src="/demo/img-2.png"
                    alt="Hình 2"
                    className="w-full h-auto"
                    />
                </div>
            </div>
        </>
    )
}