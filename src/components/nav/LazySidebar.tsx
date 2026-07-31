"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const RealSidebar = dynamic(
  () => import("./Sidebar").then((mod) => mod.Sidebar),
  {
    ssr: false,
    loading: () => null,
  },
);

export function LazySidebar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  if (!mounted) return null;

  return <RealSidebar />;
}
