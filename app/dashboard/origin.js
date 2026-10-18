const HOSTED_API = (process.env.NEXT_PUBLIC_ANALYTICS_ORIGIN || "").replace(/\/$/, "");

export function apiOrigin() {
  if (typeof location === "undefined") return "";
  const host = location.hostname.toLowerCase();
  if (host === "localhost" || host === "127.0.0.1") return "";
  if (!HOSTED_API) return "";
  try {
    if (new URL(HOSTED_API).hostname.toLowerCase() === host) return "";
  } catch {
    return "";
  }
  return HOSTED_API;
}

export function apiUrl(path) {
  return `${apiOrigin()}${path}`;
}
