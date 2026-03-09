import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/sections/IndustryPage";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insurance | SAP FPSL, IFRS 17 & TRM for Insurers",
  description:
    "Noshtek's insurance practice delivers SAP FPSL IFRS 17 implementations, actuarial data integration, and treasury risk management for global insurers and reinsurers.",
};

export default function InsurancePage() {
  return (
    <IndustryPageTemplate
      industry={industries.insurance}
      industryKey="insurance"
      icon="🛡️"
      color="#8B5CF6"
    />
  );
}
