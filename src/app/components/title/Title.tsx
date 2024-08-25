export default function Title(props:{text:string, className?:string}) {
    // Props có kiểu dữ liệu là object
        // Nên phải định nghĩa kiểu dữ liệu là mở ngoặc nhọn
        // Bên trong object props chứa một key tên là text có kiểu dữ liệu là string sẽ nhận được do người dùng truyền vào
        // Dấu hỏi ở className thể hiện là có truyền vào hay không cũng được
    const {text="",className=""} = props;
    // Lấy ra props và lấy giá trị của key text mặc định không truyền gì vào sẽ là rỗng
    return(
        <>
            <div className={"font-[700] text-[24px] text-[#EFEEE0] mb-[20px] " +className}>
                {text}
            </div>
        </>
    )
}