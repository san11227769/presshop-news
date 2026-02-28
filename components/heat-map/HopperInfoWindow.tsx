interface HopperIncident {
  image?: string;
  name?: string;
  rating?: number;
  specialization?: string;
  distance?: string;
  address?: string;
}

interface HopperInfoWindowProps {
  incident: HopperIncident;
}

export default function HopperInfoWindow({ incident }: HopperInfoWindowProps) {
  return (
    <div style={{ minWidth: "200px", padding: "4px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        {incident.image && (
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #e5e7eb",
              flexShrink: 0,
            }}
          >
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
                target.parentElement!.style.background = "#f3f4f6";
              }}
            />
          </div>
        )}
        <div style={{ flex: 1 }}>
          {incident.name && (
            <div
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "4px",
              }}
            >
              {incident.name}
            </div>
          )}
          {incident.rating && (
            <div style={{ color: "#64748b", fontSize: "14px" }}>
              ⭐ {incident.rating}
            </div>
          )}
        </div>
      </div>
      {incident.specialization && (
        <div
          style={{
            color: "#64748b",
            fontSize: "14px",
            marginBottom: "8px",
          }}
        >
          {incident.specialization}
        </div>
      )}
      {incident.distance && (
        <div style={{ color: "#64748b", fontSize: "14px", marginBottom: "6px" }}>
          {incident.distance} away
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

