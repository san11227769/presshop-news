import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewsCategoryListCard({ data }: any) {
    return (
        <Link
            href={{ pathname: '/news/category', query: { category: data.category } }}
            className="w-full text-center"
        >
            <Image src={data.image} alt="Category"
                width={100} height={100} className="w-10 h-10 sm:w-14 sm:h-14 md:w-17.5 md:h-17.5 lg:w-21 lg:h-21 border-2 border-[var(--cus-bg-color-pink)] object-cover rounded-full mx-auto mb-2" />
            <h2 className="fs-md lg:fs-xl font-medium mb-2 text-white">{data.category}</h2>
        </Link>
    )
}

export default NewsCategoryListCard