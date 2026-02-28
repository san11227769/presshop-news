import { INCIDENT_TYPES } from "@/config/incidentTypes";

interface DropdownProps {
  label: string;
  value: string | null;
  onChange?: (value: string | null) => void;
  disabled?: boolean;
}

export default function Dropdown({ label, value, onChange, disabled = false }: DropdownProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChange?.(value)}
      style={{
        appearance: "none",
        background: "transparent",
        border: "none",
        fontSize: "14px",
        fontWeight: 600,
        color: "#0f172a",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        cursor: disabled ? "default" : "pointer",
      }}
    >
      <span>{value && value in INCIDENT_TYPES ? INCIDENT_TYPES[value as keyof typeof INCIDENT_TYPES].label : label}</span>
      <span aria-hidden>▾</span>
    </button>
  );
}

