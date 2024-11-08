import React, { useId } from 'react'
import { forwardRef } from 'react'
    

const Input = forwardRef(function Input({
    label,
    className="",
    type = "text",
    ...props

},ref) {
    const id = useId()
return (
    <div className=' w-full inline-block '>
         {label && <label   htmlFor={id} 
        className=' inline-block mb-1 pl-1'>
        {label}</label>}
    <input type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
        ref={ref}
        {...props}
        id={id}
    />  
        </div>
)
}

)
export default Input