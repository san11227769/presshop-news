import IconInfoWindow from "./IconInfoWindow";
import ContentInfoWindow from "./ContentInfoWindow";
import HopperInfoWindow from "./HopperInfoWindow";

/**
 * Router component that renders the appropriate info window based on markerType
 * Supports: "icon", "content", "hopper"
 */
interface IncidentData {
  markerType?: string;
  [key: string]: any;
}

interface IncidentInfoWindowProps {
  incident: IncidentData;
}

export default function IncidentInfoWindow({ incident }: IncidentInfoWindowProps) {
  const markerType = incident.markerType || "icon"; // Default to "icon" for backward compatibility

  switch (markerType) {
    case "content":
      return <ContentInfoWindow incident={incident as any} />;
    case "hopper":
      return <HopperInfoWindow incident={incident as any} />;
    case "icon":
    default:
      return <IconInfoWindow incident={incident as any} />;
  }
}
