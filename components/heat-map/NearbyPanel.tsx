interface NearbyPanelProps {
  hoppersCount?: number;
  distance?: string;
  onHireClick?: () => void;
}

export default function NearbyPanel({
  hoppersCount = 150,
  distance = "2 miles",
  onHireClick
}: NearbyPanelProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: 24,
        bottom: 24,
        background: "#ffffff",
        padding: "16px 20px",
        borderRadius: "20px",
        boxShadow: "0 20px 30px rgba(15, 23, 42, 0.16)",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        zIndex: 3,
        pointerEvents: "auto",
      }}
    >
      <div>
        <div style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a" }}>
          {hoppersCount} Hoppers near you
        </div>
        <div style={{ color: "#64748b" }}>
          Field teams available within {distance}
        </div>
      </div>
      <button
        type="button"
        onClick={onHireClick}
        style={{
          border: "none",
          borderRadius: "999px",
          padding: "12px 24px",
          background: "#f74b50",
          color: "#ffffff",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Hire Now
      </button>
    </div>
  );
}

