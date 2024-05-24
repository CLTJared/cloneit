
import { UserArticle } from "../models/models";
import { CiInboxOut } from "react-icons/ci";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";

export default function Article( {article}: { article: UserArticle} ) {
  return (
    <div className="article">
      <div className="" aria-label={article.id} id={article.id} title={article.id} >
        <a href="#" className="text-xs text-neutral-400">c/{article.location}</a>
        <p className="font-semibold">{ article.title } </p>
        <p className="text-sm">{ article.description }</p>
        { typeof article.media !== 'undefined' 
          ? <img src={article.media} className="w-full object-cover h-[250px] rounded-2xl mt-4 mb-2" /> 
          : <span aria-label="no media included"></span> }
        <ul className="flex gap-3 mt-2">
          <li className="rounded-xl pill flex"><TbArrowBigUp className="text-xl mr-2" /> {Math.floor(Math.random() * 90 + 1)}k <TbArrowBigDown className="text-xl ml-2"/></li>
          <li className="rounded-xl pill flex"><HiOutlineChatBubbleBottomCenter className="text-xl mr-2" />{Math.floor(Math.random() * 900 + 1)}</li>
          <li className="rounded-xl pill flex"><CiInboxOut className="text-xl mr-2 items-center" />Share</li>
        </ul>
      </div>
    </div>
  )
}
