import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import React, { useEffect, useState } from 'react'

export default function Authlayout ({children,authentication = true}) {
  const [load,setload] = useState(true)
    const navigate = useNavigate()
    const authStatus =  useSelector(state => state.auth?.status)
    useEffect(()=>{

      if(authentication && authStatus !== authentication){
        navigate("/login")
    } else if(!authentication && authStatus !== authentication){
        navigate("/")
    }
    setload(false)
}, [authStatus, navigate, authentication])
    
  return (
    load ? <h1>Loading...</h1> : <>{children}</>  )
}
