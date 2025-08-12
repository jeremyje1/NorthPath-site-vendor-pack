import Link from "next/link";
export default function Page() {
  return (
    <div className="space-y-8 max-w-3xl">
      <span className="badge">For EdTech AI teams</span>
      <h1 className="text-3xl font-semibold mt-4">
        Sell to campuses faster with compliance, integrations, and evals.
      </h1>
      <p className="text-gray-700 mt-4">
        Three tools: Vendor Pack, Canvas/Banner/SharePoint connectors, and an EvalOps kit.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/vendor-pack" className="btn btn-primary">
          Vendor Pack
        </Link>
        <Link href="/connectors" className="btn">
          Connectors
        </Link>
        <Link href="/evalops" className="btn">
          EvalOps
        </Link>
      </div>
    </div>
  );
}
