"use client"

import { redirect } from 'next/navigation'
import { useEffect } from 'react';
function test() {
    
    useEffect(()=>{
        redirect('https://www.example.com')
    }, [])

  return (
    <div >
        test
        
    </div>
   
  )
}

export default test