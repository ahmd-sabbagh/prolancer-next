import { useTranslations } from 'next-intl'
import React from 'react'

const AboutYou = () => {
    const t = useTranslations()
  return (
    <div className='md:col-span-2 flex flex-col'>
        <label htmlFor="about" className='dark-color text-sm'>{t("About you")}</label>
        <textarea id="about" placeholder={t("About you")} className='mt-2 border border-[#E4E4E4] h-16 grow rounded-lg py-2 px-4 outline-0'></textarea>
    </div>
  )
}

export default AboutYou