import BuyButtons from "@/components/BuyButtons";
import Link from "next/link";
export default function VendorPack() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold">Higher‑Ed AI Vendor Pack</h1>
      <p>
        HECVAT‑Lite answers, VPAT/ACR template, EU AI Act timeline + checklist, NIST AI RMF mapping,
        and a one‑page procurement cover sheet.
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Editable templates</li>
        <li>WCAG 2.2 notes</li>
        <li>FERPA‑aware language</li>
      </ul>
      <div className="flex gap-3">
        <BuyButtons product="vendor-pack" />
        <BuyButtons product="vendor-pack-updates" />
        <Link className="btn" href="/pricing">
          See pricing
        </Link>
      </div>
      <p className="text-xs text-gray-500">Guidance only; not legal advice.</p>
    </div>
  );
}
