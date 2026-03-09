import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/sections/IndustryPage";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Utilities | SAP IS-U & S/4HANA Finance for Energy Companies",
  description:
    "Noshtek delivers SAP IS-U, S/4HANA Utilities, and smart metering integration for regulated and deregulated energy and water companies.",
};

export default function UtilitiesPage() {
  return (
    <IndustryPageTemplate
      industry={industries.utilities}
      industryKey="utilities"
      icon="⚡"
      color="#F59E0B"
    />
  );
}
