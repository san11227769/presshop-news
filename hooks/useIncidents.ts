"use client"
import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_SERVER || process.env.REACT_APP_SOCKET_SERVER || "http://localhost:4000";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.REACT_APP_BASE_URL || "http://localhost:5019/";

interface Incident {
  _id: string;
  [key: string]: any;
}

interface UseIncidentsProps {
  userId: string;
  joinAs: "website" | "admin" | "hopper" | "user";
}

export function useIncidents({ userId, joinAs }: UseIncidentsProps) {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const socketRef = useRef<Socket | null>(null);

  const [activeIncident, setActiveIncident] = useState<Incident | null>(null);
  const [activeType, setActiveType] = useState<string | null>(null);
  const markerRefs = useRef<{ [key: string]: any }>({});

  const setMarkerRef = (incidentId: string) => (marker: any) => {
    if (marker) {
      markerRefs.current[incidentId] = marker;
    }
  };

  useEffect(() => {
    // fetch initial incidents
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}mediahouse/getAlertIncidents`)
      .then(r => r.json())
      .then(data => setIncidents(data || []))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const s = io(SOCKET_URL, { transports: ["websocket"] });
    socketRef.current = s;

    s.on("connect", () => {
      console.log("socket connected", s.id);
      if (joinAs === "website") s.emit("joinWebsite");
      if (joinAs === "admin") s.emit("joinAdmin", userId);
      if (joinAs === "hopper") s.emit("joinHopper", userId);
      if (joinAs === "user") s.emit("joinUser", userId);
    });

    s.on("incident:new", (incident) => {
      console.log("incident:new", incident);
      setIncidents(prev => {
        // avoid duplicates
        if (prev.find(i => i._id === incident._id)) return prev;
        return [incident, ...prev];
      });
    });

    s.on("incident:updated", (incident) => {
      setIncidents(prev => prev.map(i => (i._id === incident._id ? incident : i)));
    });

    // handle created confirm
    s.on("incident:created", (incident) => {
      setIncidents(prev => [incident, ...prev]);
    });

    return () => {
      s.disconnect();
    };
  }, [userId, joinAs]);

  return {
    incidents,
    socket: socketRef.current,
    activeIncident,
    setActiveIncident,
    activeType,
    setActiveType,
    markerRefs,
    setMarkerRef,
  };
}