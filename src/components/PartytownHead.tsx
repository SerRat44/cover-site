"use client";

import { Partytown } from "@builder.io/partytown/react";

export default function PartytownHead() {
  return (
    <Partytown
      debug={false}
      lib="/~partytown/"
      forward={["dataLayer.push", "gtag", "va", "si"]}
    />
  );
}
