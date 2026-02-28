"use client";
import HeatMap from "@/components/heat-map-wrap/HeatMap";

export default function MapLayout() {
    // Use NEXT_PUBLIC_ prefix for client-side access in Next.js
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

    const handleHireClick = () => {
        console.log("Hire Now clicked");
    };

    return (
        <>
            <div className="flex-1 rounded-xl overflow-hidden mb-2">
                <HeatMap
                    apiKey={apiKey}
                    onHireClick={handleHireClick}
                />
            </div>
            {/* <div className="rounded-xl overflow-hidden">
                <iframe
                    className="h-96 w-full rounded-xl"
                    src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
            </div> */}
        </>
    );
}

