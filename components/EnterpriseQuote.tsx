"use client";
import { useState } from "react";
import { logEvent } from "@/lib/analytics";

export default function EnterpriseQuote() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async () => {
    setSubmitting(true);
    logEvent("enterprise_quote_submit", { email, company });
    try {
      const res = await fetch("/api/enterprise-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, notes }),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      logEvent("enterprise_quote_success", { email, company });
    } catch (e: any) {
      logEvent("enterprise_quote_error", { email, company, message: e.message });
      alert("Error – please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return <div className="p-4 rounded border text-sm">Thanks – we&apos;ll reach out shortly.</div>;
  }

  return (
    <div className="space-y-3 p-4 border rounded">
      <h3 className="font-medium">Need bespoke terms / PO?</h3>
      <p className="text-xs text-neutral-500">
        Request an Enterprise quote & net terms assistance.
      </p>
      <input
        className="input input-bordered w-full"
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <input
        className="input input-bordered w-full"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        type="text"
      />
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={3}
      />
      <button className="btn btn-primary w-full" onClick={submit} disabled={submitting || !email}>
        {submitting ? "Submitting…" : "Request Quote"}
      </button>
    </div>
  );
}
