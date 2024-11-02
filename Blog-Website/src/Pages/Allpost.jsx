import service from "../Appwrite/database";
import { Container,PostCard } from "../component";
import React ,{useState,useEffect}from 'react'

export default function Allpost() {
    const [Posts ,setPost] = useState([])
    useEffect(()=>{
    service.getPosts([]).then((posts) => {
        if (posts) {
            setPost(posts.documents)
        }
    })
},[])
   

  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
          
          
            
            {Posts.map((post) => (
                
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>

            ))}
        </div>
        </Container>
</div>
  )
}
