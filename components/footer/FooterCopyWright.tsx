import { Facebook, Instagram, XOctagon, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from '../ui/icon'
function FooterCopyWright() {
    return (
        <div className='flex justify-between items-center  py-2 
                flex-col gap-4 
                lg:flex-row md:gap-0'>

            <div className='flex items-center gap-2 order-1 lg:order-none'>
                <Link href="#" className=' text-white bg-black dark:bg-[#383838] hover:bg-pink w-8.5 h-8.5 flex justify-center items-center rounded-full'>
                    <Image src="/images/icon/facebook.png" alt='' className='w-3.5' width="16" height="16" />
                </Link>
                <Link href="#" className=' text-white bg-black dark:bg-[#383838] hover:bg-pink w-8.5 h-8.5 flex justify-center items-center rounded-full'>
                    <Image src="/images/icon/linkedIn.png" alt='' className='w-3.5' width="16" height="16" />
                </Link>
                <Link href="#" className=' text-white bg-black dark:bg-[#383838] hover:bg-pink w-8.5 h-8.5 flex justify-center items-center rounded-full'>
                    <Image src="/images/icon/x.png" alt='' className='w-3.5' width="16" height="16" />

                </Link>
                <Link href="#" className=' text-white bg-black dark:bg-[#383838] hover:bg-pink w-8.5 h-8.5 flex justify-center items-center rounded-full'>
                    <Image src="/images/icon/youtube.png" alt='' className='w-3.5' width="16" height="16" />
                </Link>
            </div>
            <div className="text-center order-3 lg:order-2 lg:order-none dark:text-[#D1D1D1]">© {new Date().getFullYear()} PressHop News. All rights reserved.</div>
            <div className="flex gap-2 order-2 lg:order-3 lg:order-none">
                {/* 
                <Link href="#">
                    <Image src="/images/app-store.png" alt="App Store" width={150} height={30}
                        className='h-8.5 w-auto' />

                </Link>
                <Link href="#">
                    <Image src="/images/play-store.png" alt="Google Play Store" width={150} height={30}
                        className=' h-8.5 w-auto' />
                </Link> */}
            </div>
        </div>
    )
}

export default FooterCopyWright