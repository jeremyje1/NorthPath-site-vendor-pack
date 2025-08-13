// Lightweight client/server event logging placeholder. Replace with PostHog, Segment, etc.
export type AnalyticsEvent = {
  name: string;
  props?: Record<string, any>;
  ts?: number;
};

export function logEvent(name: string, props?: Record<string, any>) {
  const evt: AnalyticsEvent = { name, props, ts: Date.now() };
  if (typeof window !== "undefined") {
    navigator.sendBeacon?.(
      "/api/events",
      new Blob([JSON.stringify(evt)], { type: "application/json" }),
    );
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.debug("analytics", evt);
    }
  } else {
    // eslint-disable-next-line no-console
    console.info("srv-analytics", evt);
  }
}
