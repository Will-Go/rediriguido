'use client'

import { useEffect } from "react";

export default function Home() {

  function getCookie() {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      console.log(cookies[i]);
        
    }
    return null;
  }

  useEffect(()=>{
    getCookie()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hola Mundillo
      </div>
    </main>
  )
}
