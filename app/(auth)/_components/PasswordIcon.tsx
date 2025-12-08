import { password } from '@/assets'
import Image from 'next/image'
import React from 'react'

const PasswordIcon = () => {
  return (
    <div className='w-[83px] h-[73px] relative mx-auto'>
        <Image src={password} alt="Password Recovery" fill sizes='83px' className='object-contain' /> 
    </div>
  )
}

export default PasswordIcon