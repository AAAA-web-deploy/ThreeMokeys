/**
 * PUBLIC SITE CONFIGURATION — edit this file to change ETH token details
 * without touching component markup or CSS.
 *
 * IMPORTANT: Never paste the BSC source token CA as the Ethereum CA.
 * Do not enable a trading link before the Ethereum token/pool exists.
 */
export const site = {
  brand: "MONKEYS",
  tokenName: "Three Wise Monkeys",
  ticker: "MONKEYS",
  chain: "Ethereum",
  chainShort: "ETH",
  chainId: 1,
  supply: "1,000,000,000",
  contractAddress: "", // NEW Ethereum mainnet ERC-20 contract after deployment, 0x + 40 hex chars
  websiteUrl: "https://aaaa-web-deploy.github.io/ThreeMokeys/",
  socials: {
    x: "", // e.g. https://x.com/YOUR_ACCOUNT
    telegram: "", // e.g. https://t.me/YOUR_CHANNEL
  },
  trading: {
    // These are optional links for when your Ethereum market actually exists.
    // Uniswap + Etherscan are safely generated from a valid new CA by default.
    dexscreenerPairUrl: "", // leave empty until pair is created
  },
  branding: {
    useCustomHeaderLogo: false,
    headerLogoPath: "/branding/logo-REPLACE-ME.png",
    favicon: "/branding/favicon.ico",
    ogImage: "/branding/og-ethereum-preview.jpg",
  },
  images: {
    hero: "/assets/hero-trio-transparent.png",
    see: "/assets/see-no-fud.jpg",
    hear: "/assets/hear-no-fud.png",
    speak: "/assets/speak-no-alpha.png",
    stickers: "/assets/sticker-sheet-transparent.png",
    peek: "/assets/peek-edge.png",
  },
  copy: {
    heroEyebrow: "🙈 🙉 🙊 ENOUGH SAID.",
    heroLines: ["3 MONKEYS", "ON ETH", "4 FUN."],
    slogan: "SEE NO FUD. HEAR NO FUD. SPEAK NO ALPHA.",
    heroMicro: "just monkey business.",
    tokenSubtitle: "same monkeys. now on-chain.",
    apeSubtitle: "no lore. no lectures. just monkeys.",
    footerLine: "3 MONKEYS ON ETH 4 FUN.",
    footerTagline: "🙈 🙉 🙊 LESS EXPLAINING. MORE MONKEYING.",
  },
} as const;

export type MonkeyId = "see" | "hear" | "speak";
export type Monkey = {
  id: MonkeyId;
  eyebrow: string;
  title: [string, string];
  intro: string;
  punchline: string;
  reaction: string;
  cardCaption: string;
  pickerCaption: string;
  emoji: string;
  image: string;
};
export const monkeys: readonly Monkey[] = [
  {
    id: "see", eyebrow: "MONKEY #1", title: ["SEE NO", "FUD."],
    intro: "ape first. look later.", punchline: "DIDN'T SEE THE DIP.",
    reaction: "NOPE.", cardCaption: "NOPE.", pickerCaption: "YOU SAW NOTHING.",
    emoji: "🙈", image: site.images.see,
  },
  {
    id: "hear", eyebrow: "MONKEY #2", title: ["HEAR NO", "FUD."],
    intro: "too much noise.", punchline: "CAN'T HEAR THE PAPER HANDS.",
    reaction: "WHAT?", cardCaption: "CAN'T HEAR YOU.", pickerCaption: "IGNORE THE NOISE.",
    emoji: "🙉", image: site.images.hear,
  },
  {
    id: "speak", eyebrow: "MONKEY #3", title: ["SPEAK NO", "ALPHA."],
    intro: "shhh.", punchline: "I KNOW NOTHING.",
    reaction: "SHHHHH.", cardCaption: "CAN'T SAY.", pickerCaption: "KEEP THE ALPHA.",
    emoji: "🙊", image: site.images.speak,
  },
] as const;
