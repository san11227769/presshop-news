import Dropdown from "./Dropdown";
import Separator from "./Separator";

interface ControlsProps {
  activeType: string | null;
  onTypeChange: (type: string | null) => void;
}

export default function Controls({ activeType, onTypeChange }: ControlsProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 18,
        left: 18,
        right: 18,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        zIndex: 3,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "#ffffff",
          borderRadius: "999px",
          padding: "10px 16px",
          boxShadow: "0 20px 30px rgba(15, 23, 42, 0.12)",
          pointerEvents: "auto",
        }}
      >
        <Dropdown label="Alert" value={activeType} onChange={onTypeChange} disabled={false} />
        <Separator />
        <Dropdown label="2 miles" disabled value={null} onChange={() => { }} />
        <Separator />
        <Dropdown label="Category" disabled value={null} onChange={() => { }} />
      </div>

      <div
        style={{
          flex: 1,
          maxWidth: "320px",
          background: "#ffffff",
          borderRadius: "999px",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          boxShadow: "0 20px 30px rgba(15, 23, 42, 0.12)",
          pointerEvents: "auto",
        }}
      >
        <span role="img" aria-label="search">
          🔍
        </span>
        <input
          placeholder="Search this area"
          disabled
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontSize: "14px",
            color: "#475569",
            background: "transparent",
          }}
        />
      </div>

      {/* <button
        type="button"
        style={{
          pointerEvents: "auto",
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          borderRadius: "12px",
          padding: "12px 20px",
          background: "#111827",
          color: "#ffffff",
          border: "none",
          fontWeight: 600,
          boxShadow: "0 20px 40px rgba(15, 23, 42, 0.3)",
          cursor: "pointer",
        }}
      >
        <span>Direction</span>
        <span role="img" aria-label="share">
          ↗️
        </span>
      </button> */}
    </div>
  );
}

