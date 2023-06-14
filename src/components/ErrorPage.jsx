import React from 'react'

const nopage = {
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     height:"100vh"
}

export default function ErrorPage() {
  return (
    <div className={nopage}>PageNotFound</div>
  )
}
