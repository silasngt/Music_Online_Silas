export default function FormInput(props:any){
    const {
        label="",
        type="text",
        name="",
        id="",
        placeholder="",
        required="false"
    } = props;
    return(
        <>
            <div className="mb-[15px]">
                {/* Có truyền label thì mới vẽ ra không mặc định chỉ vẽ ra ô input */}
                {label &&
                    <label 
                    htmlFor={id}
                    className="block mb-[5px] font-[600] text-[14px]"
                    >
                    <span className="text-white">{label}</span>
                    <span className="text-red-500 ml-[5px]">*</span>
                    </label>
                }
                <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                required={required}
                className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
                /> 
          </div>
        </>
    )
}