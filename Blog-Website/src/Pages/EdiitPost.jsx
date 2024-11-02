import React, {useEffect, useState} from 'react'
import {Container} from '../component'
import { useNavigate,  useParams } from 'react-router-dom';
import service from '../Appwrite/database';
import PostForm from '../component/PostForm/PostForm';


function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost