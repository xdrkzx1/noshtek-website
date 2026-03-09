import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/sections/IndustryPage";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Telecom | SAP BRIM & Revenue Management for Carriers",
  description:
    "Noshtek implements SAP BRIM, FI-CA, and Convergent Charging for Tier-1 telecoms, digital carriers, and MVNO operators — reducing revenue leakage and accelerating product launches.",
};

export default function TelecomPage() {
  return (
    <IndustryPageTemplate
      industry={industries.telecom}
      industryKey="telecom"
      icon="📡"
      color="#3B82F6"
    />
  );
}
