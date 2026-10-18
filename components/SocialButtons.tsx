import { site } from "@/config/site";
import { isSafeExternalUrl } from "@/lib/links";

const links = [
  { role: "x", label: "X", url: site.socials.x },
  { role: "telegram", label: "TELEGRAM", url: site.socials.telegram },
];

export default function SocialButtons() {
  return links.map(({ role, label, url }) => isSafeExternalUrl(url) ? (
    <a key={role} className="btn magnetic" href={url} target="_blank" rel="noopener noreferrer" data-link-role={role}>{label}</a>
  ) : (
    <span key={role} className="btn btn-unavailable" aria-disabled="true" title="Community link is not configured yet">{label}</span>
  ));
}
