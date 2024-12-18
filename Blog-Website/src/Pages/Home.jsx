import { useEffect } from 'react'
import React ,{useState} from 'react'
import service from '../Appwrite/database'
import { Container, PostCard } from '../component'

export default function Home() {
    const [Posts ,setPost ]= useState([])
    useEffect(()=>{
        
        service.getPosts([]).then((post)=>{ 
        if (post){
        
        setPost(post.documents)}
    
    })
    },[])
    if (Posts.length === 0) {
        return (
                <Container>
            <div className="w-full py-8 mt-4 text-center">
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
            </div>
                </Container>
        )
    }
    return (
            <Container>
        <div className='w-full py-8'>
                <div className='flex flex-wrap'>
                    {Posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
        </div>
            </Container>
    )

  
}
