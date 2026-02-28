import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function ApoutUsPage() {
    return (
        <>
            <div className='py-10 px-4 lg:px-6'>
                <div className="container m-auto">
                    <div className='w-full mb-8 lg:mb-15'>
                        <Image src="/images/about-banner1.png" alt="" width={1200} height={584} className='w-full h-auto rounded-2xl' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 lg:grid-cols-2 gap-6 [&_p]:text-gray'>
                        <div className='md:col-span-3 lg:col-span-1'>
                            <h1 className='mb-12 line-height120 hed-lg md:hed-2sm lg:hed-3xl font-medium'>
                                On a mission to re-write the future of News
                            </h1>
                            <Button variant="default">
                                Learn more
                            </Button>
                        </div>
                        <div className="text-gray md:col-span-4 lg:col-span-1 md:[&_p]:text-sm   [&_p]:fs-xl [&_p]:text-justify space-y-2">
                            <p>
                                Transforming news by empowering real people like you
                            </p>
                            <p>Welcome to the PressHop revolution — where real stories meet real change.
                            </p>
                            <p>  We’re on a mission to shake up the $1.96 trillion media industry, rewriting the rules on how newsworthy, authentic content is sourced — straight from the people who live it.</p>
                            <p>   Imagine this - 6.9 billion smartphone users across the globe — all with the power to become citizen journalists. Capturing life as it happens — photos, videos, interviews, scans — and selling them anonymously to a hungry marketplace of over ~100,000 media outlets worldwide. Real <span className='text-pink cursor-pointer'>Read more...</span></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-10 lg:py-15  px-4 lg:px-6 bg-black text-white'>
                <div className="container m-auto space-y-10">
                    <div className='w-full text-center'>
                        <h4 className='hed-2sm font-medium'>Built on Trust. Powered by Truth</h4>
                    </div>
                    <div className='flex justify-center items-center gap-10 md:gap-18'>
                        <div className='text-center'>
                            <h2 className='hed-lg md:hed-3xl lg:hed-4xl font-medium line-height120' >
                                2M+
                            </h2>
                            <p className='fs-sm md:fs-xl'>
                                Active Users
                            </p>
                        </div>
                        <div className='text-center'>
                            <h2 className='hed-lg md:hed-3xl  lg:hed-4xl font-medium line-height120' >
                                5,000+
                            </h2>
                            <p className='fs-sm md:fs-xl'>
                                Active Hopers
                            </p>
                        </div>
                        <div className='text-center'>
                            <h2 className='hed-lg md:hed-3xl  lg:hed-4xl font-medium line-height120' >
                                $32M+
                            </h2>
                            <p className='fs-sm md:fs-xl'>
                                Earning every years
                            </p>
                        </div>
                    </div>
                    <div className='w-full text-gray space-y-6 text-center fs-sm md:fs-xl '>
                        <p >
                            Integrity in every story we share.
                            At PressHop, we believe the power of news should belong to the people — not just the privileged few. PressHop has been built to ensure that every voice can be heard, every story has a chance to be told, and every moment worth sharing finds its place on the global stage. But we don’t stop at creating opportunities — we set a higher standard for how those stories are handled.
                        </p>
                        <p >
                            Ethics, journalistic integrity, and user security aren’t just part of what we do — they are the foundation. Every piece of content on PressHop <span className='text-pink cursor-pointer'>Read more...</span>
                        </p>
                    </div>
                    <div className='w-full mb-6'>
                        <Image src="/images/about-banner2.png" alt="" width={1200} height={584} className='w-full h-auto rounded-2xl' />
                    </div>
                    <div className='w-full text-center'>
                        <Button variant="default">
                            Meet the team
                        </Button>
                    </div>
                </div>
            </div>
            <div className='py-10 px-4 lg:px-6'>
                <div className="container m-auto">
                    <div className='flex  md:flex-row gap-12 flex-col-reverse'>
                        <div className='w-full md:w-1/2'>
                            <h2 className='line-height120  hed-lg md:hed-2sm lg:hed-3xl font-medium'>
                                Built on Trust. Powered by Truth
                            </h2>
                            <div className='text-gray    md:[&_p]:text-sm   [&_p]:fs-xl [&_p]:text-justify space-y-2'>
                                <p>
                                    Integrity in every story we share
                                </p>
                                <p>
                                    At PressHop, we believe the power of news should belong to the people — not just the privileged few.
                                </p>
                                <p>
                                    PressHop has been built to ensure that every voice can be heard, every story has a chance to be told, and every moment worth sharing finds its place on the global stage. But we don’t stop at creating opportunities — we set a higher standard for how those stories are handled.
                                </p>
                                <p>
                                    Ethics, journalistic integrity, and user security aren’t just part of what we do — they are the foundation. Every piece of content on PressHop <span className='text-pink cursor-pointer'>Read more...</span>
                                </p>
                            </div>
                            <Button variant="default" className='min-w-30 mt-3'>
                                FAQs
                            </Button>
                        </div>
                        <div className='w-1full md:w-1/2'>
                            <Image src="/images/about-banner3.png" alt="" width={600} height={584} className='w-full h-auto rounded-2xl' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ApoutUsPage