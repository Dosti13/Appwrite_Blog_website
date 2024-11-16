import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authService from '../../Appwrite/Auth'
import { logout } from '../../Store/authSlice'
import {  useNavigate } from 'react-router-dom'
function LogoutBtn() {
    const dispatch = useDispatch()
    const authStatus = useSelector((state) => state.auth.status);
    const naviagte = useNavigate()
if (!authStatus) naviagte("/")
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
          })

    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
