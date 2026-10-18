import { monkeys, site } from "@/config/site";
import { asset } from "@/lib/asset";
import { getTokenLinks, isSafeExternalUrl } from "@/lib/links";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyContractButton from "@/components/CopyContractButton";
import MonkeyPicker from "@/components/MonkeyPicker";
import SocialButtons from "@/components/SocialButtons";
import SiteMotion from "@/components/SiteMotion";

const tones = ["cream", "yellow", "warm"] as const;

export default function HomePage() {
  const token = getTokenLinks();
  const websiteHost = hostOf(site.websiteUrl);
  return (
    <>
      <SiteMotion />
      <Header />
      <main>
        <section className="hero" id="top" data-section="hero" aria-labelledby="hero-heading">
          <div className="hero-depth" aria-hidden="true">
            <div className="hero-ring r2" />
            <div className="hero-ring r1" />
          </div>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="kicker">{site.copy.heroEyebrow}</div>
              <h1 className="display" id="hero-heading">
                {site.copy.heroLines[0]}<br />{site.copy.heroLines[1]}<br />{site.copy.heroLines[2]}
              </h1>
              <p className="hero-sub">{site.copy.slogan}</p>
              <p className="hero-micro">{site.copy.heroMicro}</p>
              <div className="hero-actions">
                <a className="btn dark magnetic" href="#token">MONKEYS ON ETH</a>
                {isSafeExternalUrl(site.websiteUrl) ? (
                  <a className="btn magnetic" href={site.websiteUrl} target="_blank" rel="noopener noreferrer" data-link-role="website">WEBSITE</a>
                ) : (
                  <a className="btn magnetic" href="#top">WEBSITE</a>
                )}
              </div>
            </div>
            <div className="hero-art">
              <img src={asset(site.images.hero)} alt="Three monkeys covering eyes, ears, and mouth" width={1600} height={1200} />
            </div>
          </div>
        </section>

        <section className="reaction-stage" id="reactions" aria-label="Three monkey reactions">
          {monkeys.map((monkey, index) => (
            <article key={monkey.id} className={`reaction-slide ${tones[index]}`} id={monkey.id} data-section={monkey.id}>
              <div className="wrap split">
                {index === 1 ? (
                  <>
                    <div className="reaction-copy">
                      <ReactionCopy monkey={monkey} />
                    </div>
                    <div className="reaction-image-col">
                      <img className="reaction-image" src={asset(monkey.image)} alt={`${monkey.title.join(" ")} monkey`} width={1000} height={1000} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="reaction-image-col">
                      <img className="reaction-image" src={asset(monkey.image)} alt={`${monkey.title.join(" ")} monkey`} width={1000} height={1000} />
                    </div>
                    <div className="reaction-copy">
                      <ReactionCopy monkey={monkey} />
                    </div>
                  </>
                )}
              </div>
              <div className="giant-bg" aria-hidden="true">{monkey.reaction}</div>
            </article>
          ))}
        </section>

        <section className="trio" data-section="reactions" aria-labelledby="trio-heading">
          <div className="wrap">
            <h2 className="display" id="trio-heading">3 MONKEYS.<br />3 REACTIONS.</h2>
            <div className="trio-grid">
              {monkeys.map((monkey) => (
                <a className="trio-card pop-card" href={`#${monkey.id}`} key={monkey.id}>
                  <img src={asset(monkey.image)} alt={monkey.title.join(" ")} width={800} height={800} />
                  <div className="trio-label">{monkey.cardCaption}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="meme-wall" data-section="business" aria-labelledby="stickers-heading">
          <div className="wrap">
            <h2 className="display" id="stickers-heading">MONKEY<br />BUSINESS.</h2>
            <div className="sticker-stage">
              <img src={asset(site.images.stickers)} alt="Three-monkey sticker sheet" width={1122} height={1402} />
            </div>
          </div>
        </section>

        <section className="token" id="token" data-section="token" aria-labelledby="token-heading">
          <div className="wrap">
            <div className="token-box">
              <h2 className="display" id="token-heading">MONKEYS<br />LIVE ON ETH.</h2>
              <div className="token-sub">{site.copy.tokenSubtitle}</div>
              <div className="facts">
                <div className="fact"><span>TOKEN</span><strong>{site.ticker}</strong></div>
                <div className="fact"><span>CHAIN</span><strong>{site.chain}</strong></div>
                <div className="fact"><span>SUPPLY</span><strong>{site.supply}</strong></div>
                <div className="fact"><span>WEBSITE</span><strong>{websiteHost}</strong></div>
                <div className="fact ca-row">
                  <div>
                    <span>CONTRACT ADDRESS</span>
                    <strong id="ca">{token.ready ? site.contractAddress : "COMING SOON — ETHEREUM"}</strong>
                  </div>
                  <CopyContractButton className="copy" />
                </div>
              </div>
              {(token.uniswap || token.etherscan || token.dexscreener) && (
                <div className="token-links">
                  {token.uniswap && <a href={token.uniswap} target="_blank" rel="noopener noreferrer" data-link-role="uniswap">UNISWAP</a>}
                  {token.etherscan && <a href={token.etherscan} target="_blank" rel="noopener noreferrer" data-link-role="etherscan">ETHERSCAN</a>}
                  {token.dexscreener && <a href={token.dexscreener} target="_blank" rel="noopener noreferrer" data-link-role="dexscreener">DEXSCREENER</a>}
                </div>
              )}
            </div>
          </div>
        </section>

        <MonkeyPicker />

        <section className="ape" id="community" data-section="ape" aria-labelledby="ape-heading">
          <div className="wrap">
            <h2 className="display" id="ape-heading">APE IN.</h2>
            <p>{site.copy.apeSubtitle}</p>
            <div className="hero-actions">
              <CopyContractButton className="btn dark magnetic" label="COPY THE CA" copiedLabel="COPIED" hideWhenMissing />
              <SocialButtons />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ReactionCopy({ monkey }: { monkey: (typeof monkeys)[number] }) {
  return (
    <>
      <span className="kicker">{monkey.emoji} {monkey.eyebrow}</span>
      <h2 className="display">{monkey.title[0]}<br />{monkey.title[1]}</h2>
      <p>{monkey.intro}</p>
      <div className="reaction-tag">{monkey.punchline}</div>
    </>
  );
}

function hostOf(url: string) {
  try { return new URL(url).host.replace(/^www\./, ""); } catch { return "TO BE ANNOUNCED"; }
}
