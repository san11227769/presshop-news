import React from 'react'
import NewsCardTypeTwo from '@/components/news-cards/NewsCardTypeTwo'
function BannerBottom() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3'>
                <NewsCardTypeTwo />
                <NewsCardTypeTwo />
            </div>

        </>
    )
}

export default BannerBottom