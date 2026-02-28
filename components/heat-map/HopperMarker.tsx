import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { Ref } from "react";

interface HopperIncident {
  position?: { lat: number; lng: number };
  statusColor?: string;
  image?: string;
  name?: string;
  [key: string]: any;
}

interface HopperMarkerProps {
  incident: HopperIncident;
  isSelected: boolean;
  onClick: (incident: HopperIncident) => void;
  onMarkerRef: Ref<any>;
}

export default function HopperMarker({ incident, isSelected, onClick, onMarkerRef }: HopperMarkerProps) {
  const scale = isSelected ? 1.3 : 1;
  const pinSize = 40 * scale;
  const avatarSize = 32 * scale;

  return (
    <AdvancedMarker
      ref={onMarkerRef}
      position={incident.position}
      onClick={() => onClick(incident)}
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          position: "relative",
          transform: `scale(${scale})`,
          transition: "transform 0.2s ease",
          transformOrigin: "center bottom",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* Pin body - teardrop shape */}
        <div
          style={{
            width: `${pinSize}px`,
            height: `${pinSize * 1.2}px`,
            background: incident.statusColor || "#10b981",
            borderRadius: `${pinSize / 2}px ${pinSize / 2}px ${pinSize / 2}px 0`,
            transform: "rotate(-45deg)",
            position: "relative",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            border: "2px solid #ffffff",
          }}
        >
          {/* Avatar container - centered in the pin */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              width: `${avatarSize}px`,
              height: `${avatarSize}px`,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #ffffff",
              background: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {incident.image ? (
              <img
                src={incident.image}
                alt={incident.name || "Hopper"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.style.background = "#e5e7eb";
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: `${avatarSize * 0.6}px`,
                  background: "#e5e7eb",
                }}
              >
                👤
              </div>
            )}
          </div>
        </div>
        {/* Pin point shadow */}
        <div
          style={{
            position: "absolute",
            bottom: "-2px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "4px",
            height: "4px",
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "50%",
          }}
        />
      </div>
    </AdvancedMarker>
  );
}
