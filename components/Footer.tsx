import { site } from "@/config/site";
import { asset } from "@/lib/asset";
import { isSafeExternalUrl } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="footer" data-section="footer">
      <img className="footer-peek" src={asset(site.images.peek)} alt="Monkey peeking from the edge" width={700} height={700} />
      <div className="wrap footer-meta">
        <div>
          <h3 className="display">{site.copy.footerLine}</h3>
          <div className="tag">{site.copy.footerTagline}</div>
          <div className="footer-small">© 2026 Monkeys</div>
        </div>
        <div className="footer-small footer-links">
          {isSafeExternalUrl(site.socials.x) && <a href={site.socials.x} target="_blank" rel="noopener noreferrer" data-link-role="x">X</a>}
          {isSafeExternalUrl(site.socials.telegram) && <a href={site.socials.telegram} target="_blank" rel="noopener noreferrer" data-link-role="telegram">Telegram</a>}
          {site.websiteUrl ? <span>{safeHost(site.websiteUrl)}</span> : null}
        </div>
      </div>
    </footer>
  );
}

function safeHost(url: string) {
  try { return new URL(url).host; } catch { return url; }
}
