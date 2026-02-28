interface Incident {
  image?: string;
  title?: string;
  heading?: string;
  description?: string;
  time?: string;
  address?: string;
}

interface ContentInfoWindowProps {
  incident: Incident;
}

export default function ContentInfoWindow({ incident }: ContentInfoWindowProps) {
  console.log(incident);
  return (
    <div style={{ minWidth: "200px", padding: "4px" }}>
      {incident.image && (
        <div
          style={{
            width: "100%",
            height: "120px",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "12px",
            background: "#f3f4f6",
          }}
        >
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
            }}
          />
        </div>
      )}
      {incident.heading && (
        <div
          style={{
            fontSize: "16px",
            fontWeight: 700,
            marginBottom: "8px",
            color: "#0f172a",
          }}
        >
          {incident.heading}
        </div>
      )}
      {incident.description && (
        <div
          style={{
            color: "#64748b",
            fontSize: "14px",
            marginBottom: "8px",
            lineHeight: "1.5",
          }}
        >
          {incident.description}
        </div>
      )}
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

