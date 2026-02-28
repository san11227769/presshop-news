import { Button } from '@/components/ui/button'
import React from 'react'

function MobileBanner() {
    return (
        <div className='w-full xl:hidden'>
            <div className="container m-auto">
                <div className='grid grid-cols-5 items-center md:grid-cols-2 lg:grid-cols-5 gap-6 bg-pink  rounded-2xl px-6 pt-6'>
                    <div className='md:ps-12 col-span-3 md:col-span-1 lg:col-span-3'>
                        <h2 className='hed-small md:hed-2sm lg:hed-2sm font-medium mb-2 md:mb-4 text-white'>Wanna see the map? Get the app.</h2>
                        <p className='text-white  mb-2 md:mb-4 fs-xs md:fs-md lg:fs-lg'>Our live incident map isn’t available on mobile web, but it’s just a tap away.</p>
                        <Button variant="secondary" size="lg" className='fs-xs md:fs-md lg:fs-lg py-2 md:py-4 h-auto mb-2'>Download the App</Button>
                    </div>
                    <div className='text-center col-span-2 md:col-span-1  lg:col-span-2 h-full flex justify-center items-end'>
                        <img src="/images/forobile.png" alt="Subscribe Illustration" className='md:hidden object-contain w-full max-w-120' width="139" height="140" />
                        <img src="/images/appscreen.png" alt="Subscribe Illustration" className='hidden md:block object-contain w-full max-w-120' width="600" height="500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileBanner