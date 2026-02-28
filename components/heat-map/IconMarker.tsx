import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Ref } from "react";
import { INCIDENT_TYPES } from "@/config/incidentTypes";

interface IconIncident {
  type?: string;
  position?: { lat: number; lng: number };
  [key: string]: any;
}

interface IconMarkerProps {
  incident: IconIncident;
  isSelected: boolean;
  onClick: (incident: IconIncident) => void;
  onMarkerRef: Ref<any>;
}

export default function IconMarker({ incident, isSelected, onClick, onMarkerRef }: IconMarkerProps) {
  const typeMeta = (incident.type && incident.type in INCIDENT_TYPES ? INCIDENT_TYPES[incident.type as keyof typeof INCIDENT_TYPES] : INCIDENT_TYPES.accident);
  const scale = isSelected ? 1.4 : 1;
  const size = 40 * scale;

  return (
    <AdvancedMarker
      ref={onMarkerRef}
      position={incident.position}
      onClick={() => onClick(incident)}
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          background: typeMeta.background,
          border: "3px solid #ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          transition: "transform 0.2s ease",
          transform: `scale(${scale})`,
        }}
      >
        <img
          src={typeMeta.gif}
          alt={typeMeta.label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </AdvancedMarker>
  );
}

