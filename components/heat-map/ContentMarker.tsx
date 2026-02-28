import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Ref } from "react";

interface Incident {
  id?: string;
  position?: { lat: number; lng: number };
  image?: string;
  title?: string;
  [key: string]: any;
}

interface ContentMarkerProps {
  incident: Incident;
  isSelected: boolean;
  onClick: (incident: Incident) => void;
  onMarkerRef: Ref<any>;
}

export default function ContentMarker({ incident, isSelected, onClick, onMarkerRef }: ContentMarkerProps) {
  const scale = isSelected ? 1.15 : 1;
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
          borderRadius: "12px",
          border: "3px solid #ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          transition: "transform 0.2s ease",
          transform: `scale(${scale})`,
          background: "#ffffff",
        }}
      >
        {incident.image ? (
          <img
            src={incident.image}
            alt={incident.title || "Content"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.style.background = "#f3f4f6";
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b7280",
              fontSize: "12px",
            }}
          >
            No Image
          </div>
        )}
      </div>
    </AdvancedMarker>
  );
}

