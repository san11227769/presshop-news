import { APIProvider, Map, InfoWindow } from "@vis.gl/react-google-maps";
import { useIncidents } from "@/hooks/useIncidents";
import IncidentMarker from "@/components/heat-map/IncidentMarker";
import Controls from "@/components/heat-map/Controls";
import NearbyPanel from "@/components/heat-map/NearbyPanel";
import IncidentInfoWindow from "@/components/heat-map/IncidentInfoWindow";
import { DEFAULT_INCIDENTS } from "@/config/defaultIncidents";
import { DEFAULT_CENTER, DEFAULT_ZOOM, DEFAULT_MAP_ID } from "@/config/incidentTypes";
import { CSSProperties } from "react";

const FALLBACK_MESSAGE =
    "Missing Google Maps API key. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file and restart the dev server.";

interface HeatMapProps {
    apiKey: string;
    center?: typeof DEFAULT_CENTER;
    zoom?: number;
    mapId?: string;
    hoppersCount?: number;
    distance?: string;
    onHireClick?: () => void;
    style?: CSSProperties;
    mapStyle?: CSSProperties;
}

interface Incident {
    _id: string;
    type?: string;
    position?: {
        lat: number;
        lng: number;
    };
    created_at?: string;
    address?: string;
    data?: {
        _id?: string;
        heading?: string;
        description?: string;
        ask_price?: string;
        media?: Array<{
            media_type: string;
            media: string;
        }>;
    };
}

export default function HeatMap({
    apiKey,
    center = DEFAULT_CENTER,
    zoom = DEFAULT_ZOOM,
    mapId = DEFAULT_MAP_ID,
    hoppersCount = 150,
    distance = "2 miles",
    onHireClick,
    style = { position: "relative", height: "100%", width: "100%" },
    mapStyle = { width: "100%", height: "100%", borderRadius: "24px" },
}: HeatMapProps) {

    const {
        incidents: filteredIncidents,
        activeIncident,
        setActiveIncident,
        activeType,
        setActiveType,
        markerRefs,
        setMarkerRef,
    } = useIncidents({ userId: "1", joinAs: "website" });

    // const incidentsData = filteredIncidents.map(createMarkerData);
    const incidentsArray = Array.isArray(filteredIncidents)
        ? filteredIncidents
        : [];

    const incidentsData = incidentsArray.map(createMarkerData);

    function createMarkerData(incident: Incident) {
        const media_type = incident.data?.media?.[0]?.media_type;
        const contentMedia = process.env.NEXT_PUBLIC_CONTENT_MEDIA || process.env.REACT_APP_CONTENT_MEDIA || '';
        const thumbnail = process.env.NEXT_PUBLIC_THUMBNAIL || process.env.REACT_APP_THUMBNAIL || '';
        const image = media_type === "image" ? contentMedia + (incident.data?.media?.[0]?.media || '') : media_type === "video" ? thumbnail + (incident.data?.media?.[0]?.media || '') : '';

        return {
            id: incident._id,
            markerType: incident.type || '',
            type: incident.type || '',
            position: { lat: incident.position?.lat || 0, lng: incident.position?.lng || 0 },
            time: incident.created_at ? new Date(incident.created_at).toLocaleTimeString() : '',
            address: incident.address || "",
            image: image,
            title: incident.data?.heading || "",
            description: incident.data?.description || "",
            contentId: incident.data?._id || "",
            ask_price: incident.data?.ask_price || "",
        };
    }

    return (
        <div style={style}>
            {!apiKey || apiKey === "" ? (
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        textAlign: "center",
                        color: "#334155",
                        background: "linear-gradient(145deg, #f8fafc, #e2e8f0)",
                    }}
                >
                    {FALLBACK_MESSAGE}
                </div>
            ) : (
                <APIProvider apiKey={apiKey}>
                    <Map
                        defaultCenter={center}
                        defaultZoom={zoom}
                        disableDefaultUI
                        gestureHandling="greedy"
                        style={mapStyle}
                        mapId={mapId}
                    >
                        {incidentsData.map((incident) => (
                            <IncidentMarker
                                key={incident.id}
                                incident={incident}
                                isSelected={activeIncident?.id === incident.id}
                                onClick={(inc) => setActiveIncident(inc as any)}
                                onMarkerRef={setMarkerRef(incident.id)}
                            />
                        ))}

                        {activeIncident && markerRefs.current[activeIncident.id] && (
                            <InfoWindow
                                anchor={markerRefs.current[activeIncident.id]}
                                onCloseClick={() => setActiveIncident(null)}
                            >
                                <IncidentInfoWindow incident={activeIncident} />
                            </InfoWindow>
                        )}
                    </Map>

                    <Controls activeType={activeType} onTypeChange={setActiveType} />
                    {/* <NearbyPanel
                        hoppersCount={hoppersCount}
                        distance={distance}
                        onHireClick={onHireClick}
                    /> */}
                </APIProvider>
            )}
        </div>
    );
}