import { site } from "@/config/site";
import { asset } from "@/lib/asset";

export default function Header() {
  const logo = site.branding.useCustomHeaderLogo ? site.branding.headerLogoPath : site.images.see;
  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label={`${site.brand} — back to top`}>
        <img src={asset(logo)} alt="" width={42} height={42} />
        <span>{site.brand}</span>
      </a>
      <div className="navlinks">
        <a className="chip emoji-nav" href="#reactions" aria-label="See no FUD">🙈</a>
        <a className="chip emoji-nav" href="#reactions" aria-label="Hear no FUD">🙉</a>
        <a className="chip emoji-nav" href="#reactions" aria-label="Speak no alpha">🙊</a>
        <a className="chip dark" href="#token">{site.chainShort}</a>
      </div>
    </nav>
  );
}
