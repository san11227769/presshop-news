import { Button } from '@/components/ui/button'
import React from 'react'

function SubscribeCard() {
    return (
        <div className='w-full px-6 p-4 mb-8'>
            <div className="container m-auto">
                <div className='grid grid-cols-5 items-center md:grid-cols-2 lg:grid-cols-2 gap-6 bg-pink  rounded-2xl px-6 pt-6'>
                    <div className='md:ps-12 col-span-3 md:col-span-1'>
                        <h2 className='hed-small md:hed-xl lg:hed-3xl font-medium mb-2 md:mb-4 text-white'>Unlock Entire  Marketplace Access</h2>
                        <p className='text-white  mb-2 md:mb-4 fs-xs md:fs-md lg:fs-lg'>Get premium content, real-time local updates, and insights from on-ground Hoppers—all in one seamless experience.</p>
                        <Button variant="secondary" size="lg" className='fs-xs md:fs-md lg:fs-lg py-2 md:py-4 h-auto mb-2'>Subscribe to PressHop</Button>
                    </div>
                    <div className='text-center col-span-2 md:col-span-1 h-full flex justify-center items-end'>
                        <img src="/images/forobile.png" alt="Subscribe Illustration" className='md:hidden object-contain w-full max-w-120' width="139" height="140" />
                        <img src="/images/appscreen.png" alt="Subscribe Illustration" className='hidden md:block object-contain w-full max-w-120' width="600" height="500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeCard