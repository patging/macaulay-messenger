import "../styles/global.css"
import "../styles/links.css"

import {articleBody} from "./ArticleThumbnail"
import SectionButton from "./SectionButton"

import Link from 'next/link'

const MainpageSmallArticle = ({Title, description, section,  authorID, createdAt, id } : articleBody) => {
    return(
        <div className="group relative md:container mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white py-6 grid grid-cols-3">


            
                
                
                <Link href={`/article/${id}`}><img className="object-scale-down h-48 w-48 " src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" alt="" /></Link> 
                
                <div className="col-span-2 divide-y-2 ">
                    <div className="pb-6">
                    <Link href={`/article/${id}`} className="text-2xl font-bold text-slate-800">{ Title.length < 100 ? Title : Title.substring(0,97) + "..." }</Link>

                    <SectionButton section={section} />

                    <p className="text-base text-slate-800">{description}</p>
                    <div><p className="text-sm font-semibold text-slate-400">By <Link href={`/profile/${authorID}`}>{ `Author ${authorID}` }</Link> </p></div>
                       
                    <div><p className="text-sm font-semibold text-slate-400">{createdAt} </p></div>
                    </div>
                    <div></div>
                </div>
                

            
        </div>
        </div>
    )
}

export default MainpageSmallArticle; 