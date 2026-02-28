import IconMarker from "./IconMarker";
import ContentMarker from "./ContentMarker";
import HopperMarker from "./HopperMarker";

import { Ref } from "react";

/**
 * Router component that renders the appropriate marker based on markerType
 * Supports: "icon", "content", "hopper"
 */
interface MarkerIncident {
  markerType?: string;
  [key: string]: any;
}

interface IncidentMarkerProps {
  incident: MarkerIncident;
  isSelected: boolean;
  onClick: (incident: MarkerIncident) => void;
  onMarkerRef: Ref<any>;
}

export default function IncidentMarker({ incident, isSelected, onClick, onMarkerRef }: IncidentMarkerProps) {
  const markerType = incident.markerType || "icon"; // Default to "icon" for backward compatibility

  switch (markerType) {
    case "content":
      return (
        <ContentMarker
          incident={incident}
          isSelected={isSelected}
          onClick={onClick}
          onMarkerRef={onMarkerRef}
        />
      );
    case "hopper":
      return (
        <HopperMarker
          incident={incident}
          isSelected={isSelected}
          onClick={onClick}
          onMarkerRef={onMarkerRef}
        />
      );
    case "icon":
    default:
      return (
        <IconMarker
          incident={incident}
          isSelected={isSelected}
          onClick={onClick}
          onMarkerRef={onMarkerRef}
        />
      );
  }
}
