"use client"

import { redirect } from 'next/navigation'
import { useEffect } from 'react';
function Test() {
    
    useEffect(()=>{
        redirect('https://www.example.com')
    }, [])

  return (
    <div >
        Test
        
    </div>
   
  )
}

export default Test