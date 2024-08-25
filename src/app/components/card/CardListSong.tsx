import { FaPlay, FaRegHeart } from "react-icons/fa6";
import CardItemSong from "./CardItemSong";

export default function CardListSong(props:{
    data:any
}) {
    const {
        data=[]
    } = props;
    return(
        <>
            <div className="grid grid-cols-1 gap-[10px]">
                {data.map((item:any,index:number) => (
                    <CardItemSong
                    key={index}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    singer={item.singer}
                    time={item.time}
                    link={item.link}
                    audio={item.audio}
                    wishlist={item.wishlist}
                    />    
                ))}
            </div>
        </>
    )
}