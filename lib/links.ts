import { site } from "@/config/site";

// Validate the public Ethereum token address format before showing contract actions.
export function isValidEthereumTokenAddress(addr: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(addr);
}
export function getTokenLinks() {
  const ca = site.contractAddress.trim();
  const ready = isValidEthereumTokenAddress(ca);
  return {
    ready,
    etherscan: ready ? `https://etherscan.io/token/${ca}` : null,
    uniswap: ready ? `https://app.uniswap.org/swap?chain=ethereum&outputCurrency=${ca}` : null,
    dexscreener: ready && /^https:\/\/dexscreener\.com\/ethereum\//.test(site.trading.dexscreenerPairUrl)
      ? site.trading.dexscreenerPairUrl : null,
  };
}
export function isSafeExternalUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "https:" && !u.username && !u.password;
  } catch { return false; }
}
