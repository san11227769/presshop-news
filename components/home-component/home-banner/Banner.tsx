import React from 'react'
import MapLayout from './map-layout/MapLayout'
import RightContent from './right-content/RightContent'
import BannerBottom from '@/components/home-component/home-banner/banner-bottom/BannerBottom'
import MobileBanner from '@/components/home-component/home-banner/mobile-banner/MobileBanner'
function HomeBanner() {
    return (
        <div className='py-4 px-6'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0  lg:gap-6 ">

                    <div className="w-full h-full lg:col-span-12  xl:col-span-9  flex flex-col gap-3">
                        <MobileBanner />
                        <MapLayout />
                        <BannerBottom />
                    </div>

                    <div className='col-span-3 lg:col-span-12  xl:col-span-3 gap-6'>
                        <RightContent />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeBanner