import React, { useState ,useEffect} from 'react'
import service from "../Appwrite/database"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredimage}) {
const [BackgroundImage,setBackgroundImage] = useState("")
  useEffect(() => {
    const bgImage = service.getFilePreview(featuredimage);
    setBackgroundImage(bgImage)
  }, []);
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
              {console.log(BackgroundImage)}
              
                <img src={BackgroundImage} alt={title}
             //           https://cloud.appwrite.io/v1/storage/buckets/66e33f1d00261c8f8171/files/6723c4ba00127e8ff3ad/view?project=66e33b0c002d2fea8962&project=66e33b0c002d2fea8962&mode=admin
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard