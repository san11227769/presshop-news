import { INCIDENT_TYPES } from "@/config/incidentTypes";

interface IconIncident {
  type?: string;
  time?: string;
  address?: string;
  [key: string]: any;
}

interface IconInfoWindowProps {
  incident: IconIncident;
}

export default function IconInfoWindow({ incident }: IconInfoWindowProps) {
  const typeMeta = (incident.type && incident.type in INCIDENT_TYPES ? INCIDENT_TYPES[incident.type as keyof typeof INCIDENT_TYPES] : INCIDENT_TYPES.accident);

  return (
    <div style={{ minWidth: "180px", padding: "4px" }}>
      <div
        style={{
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "8px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            background: `${typeMeta.background}22`,
            overflow: "hidden",
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
        </span>
        {typeMeta.label}
      </div>
      {incident.time && (
        <div style={{ color: "#64748b", fontSize: "14px", marginBottom: "6px" }}>
          {incident.time}
        </div>
      )}
      {incident.address && (
        <div style={{ color: "#0f172a", fontSize: "14px", fontWeight: 600 }}>
          {incident.address}
        </div>
      )}
    </div>
  );
}

