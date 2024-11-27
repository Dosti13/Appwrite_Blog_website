import React from 'react'

export default function Button({
    children,
   className="",
   type = "button",
   ...props
}) {
  return (
<button 
className={` rounded-lg px-3 py-4${className}`}
type={type}
{...props}

>{children}</button>
  )
}
