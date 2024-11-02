import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../Appwrite/database";
import { Button, Container } from "../component";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const status= useSelector((state)=> state.auth.status)

    const userData = useSelector((state) => state.auth.userData);
    
    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);
    if (!status) navigate("/")
    const Author = post && userData ? post.user_id === userData.$id : false;
    

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredimage);
                navigate("/");
            }
        });
    };

    return post ? (
    
            <Container>
    <div className="py-8">
    {console.log("post data",post)}
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2 flex-col">
                    
                    <img
                        src={service.getFilePreview(post.featuredimage)}
                        alt={post.title}
                        className="rounded-xl w-80 h-80 items-center justify-center"
                    />

                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
                    {Author && (
                        <div className="flex justify-center items-center">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button  className=" px-5 mr-4  bg-black text-white">
                                    Edit
                                </Button>
                            </Link>
                            <Button className=" bg-black text-white" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
        </div>
            </Container>
    ) : null;
}