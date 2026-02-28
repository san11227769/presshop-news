import { Card } from '@/components/ui/card'
import React from 'react'

function Trending() {
    return (
        <div className='w-full px-6 py-12'>
            <div className="container m-auto">
                <Card className='  px-4 border border-gray-300'>
                    <h2 className='hed-2sm mb-1 font-bold'>Trending Searches</h2>
                    <div className='flex flex-row flex-wrap fs-md md:fs-lg items-center gap-3'>
                        <div className='bg-light text-light-gray px-4 py-2 rounded-full'>#Fire</div>
                        <div className='bg-light text-light-gray px-4 py-2 rounded-full'>#Fire</div>
                        <div className='bg-light text-light-gray px-4 py-2 rounded-full'>#Fire</div>
                        <div className='bg-light text-light-gray px-4 py-2 rounded-full'>#Fire</div>
                        <div className='bg-light text-light-gray px-4 py-2 rounded-full'>#Fire</div>
                        <div className='bg-light text-light-gray px-4 py-2 rounded-full'>#Fire</div>
                        <div className='bg-light text-light-gray px-4 py-2 rounded-full'>#Fire</div>
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default Trending