import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../Store/authSlice";
import {Input , Container ,Button,Logo} from './index'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";



export default function Login() {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,seterror] = useState("")

    const login = async(data)=>{
        seterror("")
        try {
            const Session = await  authService.login(data)
            if (Session){
                const UserData = await authService.getCurrentUser
                if (UserData){
                    dispatch(authLogin(UserData))
                    Navigate("/")
                }
            }
        } catch (error) {
            seterror(error.message)
        }

    }


  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link></p>
                    {error && <p className=" text-red-600 mt-8 text-cente">{error}</p>}
            <form onSubmit={handleSubmit(login)}>

                <Input 
                label= "email :"
                type = "email"
                placeholder="enter your email "
                {...register("email"
                    ,{
                    required: true 
                })}
                />
                   <Input 
                label= "password :"
                type = "password"
                placeholder="enter your password "
                {...register("password",{
                    required: true 
                })}
                />
                <Button
                type="submit"
                className={`w-full`}
                >Sign in</Button>
                

            </form>


        </div>
        </div>
  )
}
