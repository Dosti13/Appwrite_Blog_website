import React from 'react'

export default function Container({children}) {
  return (
        <div style={{margin:0,padding:0}} className=' box-border w-full px-4 max-w-7xl mx-auto'>{children}</div>
)
}
