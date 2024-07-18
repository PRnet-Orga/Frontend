'use client'

import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='  w-full bg-[rgba(241,236,245)] rounded-t-[36px] mt-[-20px]  h-[180px] flex justify-between items-center px-[340px]'>
      <div>
        <Image src='/Icon/logo.png' alt='logo' width={124} height={80} />
      </div>
      <div className=' flex justify-center items-center gap-[80px]'>
        <span>AGB </span>
        <span>Impressum </span>
        <span>Datenschutz </span>
        <span className=' text-[rgba(65,5,126,1)]'>support@privatrezept.net </span>
      </div>
    </div>
  )
}

export default Footer