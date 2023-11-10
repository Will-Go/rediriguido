'use client'

import { useEffect } from "react";
import { redirect } from "next/navigation";




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
    redirect('https://docs.google.com');
  }, [])

  return (
    <main className="flex items-center justify-center h-screen">
              {/* <div className="rounded-full h-20 w-20 bg-blue-400 animate-ping"></div> */}
    
              <div class="wrapper">
                <div class="blue ball"></div>
                <div class="red ball"></div>  
                <div class="yellow ball"></div>  
                <div class="green ball"></div>  
              </div>
    </main>
  )
}
