import SongItem from "./SongItem";


export default function SongList(props:any) {
    // Lấy được data ra là phần dữ liệu được truyền vào
    const {
        data
    } = props;
    return(
        <>
            {/* Item */}
                {/* Chia các item thành dạng lưới và set về thành 1 cột và có gap giứa các item là 12px */}
                    {/* Bổ sung thêm thuộc tính song-list để hỗ trợ cho việc lấy ra được danh sách bài hát giúp chuyển bài hát */}
                <div className="grid grid-cols-1 gap-[12px]" song-list="">
                    {/* Dùng map để lặp qua data được lấy từ object props lấy ra các key cần thiết */}
                    {data.map((item:any,index:number) => (
                        <SongItem 
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        singer={item.singer}
                        listen={item.listen}
                        audio={item.audio}
                        wishlist={item.wishlist}
                        />
                    ))}
                </div>
            {/* End Item */}
        </>
    )
}