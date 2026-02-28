"use client"

import React, { useEffect, useRef, useState } from "react"
import styles from "./ImageSlider.module.css"

type Props = {
    images: string[]
    initialIndex?: number
    className?: string
}

export default function ImageSlider({ images, initialIndex = 0, className = "" }: Props) {
    const [current, setCurrent] = useState<number>(initialIndex)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        setCurrent(Math.max(0, Math.min(initialIndex, images.length - 1)))
    }, [initialIndex, images.length])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") setCurrent((c) => Math.max(0, c - 1))
            if (e.key === "ArrowRight") setCurrent((c) => Math.min(images.length - 1, c + 1))
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [images.length])

    if (!images || images.length === 0) return null

    return (
        <div className={`${styles.container} ${className}`} ref={containerRef}>
            <div className={styles.mainImage}>
                <img src={images[current]} alt={`slide ${current + 1}`} className={styles.mainImg} />
            </div>

            <div className={styles.thumbsWrap}>
                <div className={styles.thumbs}>
                    {images.map((src, i) => (
                        <button
                            key={i}
                            className={`${styles.thumbBtn} ${i === current ? styles.selected : ""}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Select slide ${i + 1}`}
                        >
                            <img src={src} alt={`thumb ${i + 1}`} className={styles.thumbImg} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
