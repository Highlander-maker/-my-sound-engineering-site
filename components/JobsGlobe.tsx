"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import type { Job } from "@/lib/types";
import type { LocationCluster } from "@/lib/cluster";

// react-globe.gl touches window/WebGL at import time — load client-only.
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// Country polygons, bundled at build time (no runtime CDN fetch).
const countries = feature(
  worldData as unknown as Parameters<typeof feature>[0],
  // @ts-expect-error topojson object key is known for this atlas
  worldData.objects.countries
) as unknown as { features: object[] };

type PointDatum = LocationCluster & { size: number };

export default function JobsGlobe({
  clusters,
  activeKey,
  onSelect,
}: {
  clusters: LocationCluster[];
  activeKey: string | null;
  onSelect: (key: string | null) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setSize({ w: el.clientWidth, h: el.clientHeight });
    });
    ro.observe(el);
    setSize({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: "#0E1013",
        emissive: "#05070A",
        emissiveIntensity: 0.6,
        shininess: 2,
      }),
    []
  );

  const points: PointDatum[] = useMemo(
    () =>
      clusters.map((c) => ({
        ...c,
        // Short, subtle pins that barely grow with show count — keeps the
        // globe tidy as the portfolio fills up.
        size: Math.min(0.015 + c.jobs.length * 0.004, 0.055),
      })),
    [clusters]
  );

  // Init controls + starting camera once the globe is ready.
  useEffect(() => {
    const g = globeRef.current;
    if (!g || !size.w) return;
    const controls = g.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.45;
    controls.enableZoom = true;
    controls.minDistance = 180;
    controls.maxDistance = 520;
    g.pointOfView({ lat: 40, lng: 5, altitude: 2.3 }, 0);
  }, [size.w]);

  // Fly to the active cluster.
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    const controls = g.controls();
    if (!activeKey) {
      controls.autoRotate = true;
      return;
    }
    const c = clusters.find((cl) => cl.key === activeKey);
    if (c) {
      controls.autoRotate = false;
      g.pointOfView({ lat: c.lat, lng: c.lng, altitude: 1.6 }, 900);
    }
  }, [activeKey, clusters]);

  return (
    <div ref={wrapRef} className="relative h-full w-full">
      {size.w > 0 && (
        <Globe
          ref={globeRef}
          width={size.w}
          height={size.h}
          backgroundColor="rgba(0,0,0,0)"
          animateIn={false}
          globeMaterial={globeMaterial}
          atmosphereColor="#E9B44C"
          atmosphereAltitude={0.16}
          showGraticules={false}
          polygonsData={countries.features}
          polygonCapColor={() => "rgba(233,180,76,0.10)"}
          polygonSideColor={() => "rgba(0,0,0,0)"}
          polygonStrokeColor={() => "rgba(237,235,230,0.22)"}
          polygonAltitude={0.006}
          pointsData={points}
          pointLat={(d: object) => (d as PointDatum).lat}
          pointLng={(d: object) => (d as PointDatum).lng}
          pointAltitude={(d: object) => (d as PointDatum).size}
          pointRadius={(d: object) => {
            const p = d as PointDatum;
            return p.key === activeKey || p.key === hover ? 0.32 : 0.2;
          }}
          pointColor={(d: object) =>
            (d as PointDatum).key === activeKey ? "#FFFFFF" : "#E9B44C"
          }
          pointLabel={(d: object) => {
            const p = d as PointDatum;
            return `<div style="font-family:system-ui;background:#0B0B0D;border:1px solid rgba(237,235,230,.18);color:#EDEBE6;padding:6px 10px;border-radius:8px;font-size:12px;white-space:nowrap"><b>${p.label}</b> · ${p.jobs.length} show${p.jobs.length > 1 ? "s" : ""}</div>`;
          }}
          onPointClick={(d: object) => {
            const p = d as PointDatum;
            onSelect(p.key === activeKey ? null : p.key);
          }}
          onPointHover={(d: object | null) =>
            setHover(d ? (d as PointDatum).key : null)
          }
          ringsData={points}
          ringLat={(d: object) => (d as PointDatum).lat}
          ringLng={(d: object) => (d as PointDatum).lng}
          ringColor={() => (t: number) => `rgba(233,180,76,${1 - t})`}
          ringMaxRadius={1.4}
          ringPropagationSpeed={1}
          ringRepeatPeriod={2600}
        />
      )}
    </div>
  );
}
