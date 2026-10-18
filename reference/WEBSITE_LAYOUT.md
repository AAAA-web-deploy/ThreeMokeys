# Source website content + implementation map

Observed URL: https://www.threewisemonkeys.lol/
Observed document title: `Monkeys — 3 Monkeys on BSC 4 FUN.`
Observed description: `See no FUD. Hear no FUD. Speak no alpha.`
Observed theme color from metadata: `#F3BA2F` (the exact rest of the palette and font stack are not verified).

## Ordered page sections

1. **Header**: MONKEYS wordmark, emoji-based navigation 🙈 🙉 🙊, BSC badge (adapt to ETH).
2. **Hero**: `🙈 🙉 🙊 ENOUGH SAID.` + headline `3 MONKEYS / ON BSC / 4 FUN.` (adapt ON ETH) + FUD/alpha slogan + tagline + CTA; image `/assets/hero-trio-transparent.png`.
3. **Monkey #1**: `SEE NO / FUD.`; copy `ape first. look later.` / `DIDN'T SEE THE DIP.` / `NOPE.`; image `/assets/see-no-fud.jpg`.
4. **Monkey #2**: `HEAR NO / FUD.`; copy `too much noise.` / `CAN'T HEAR THE PAPER HANDS.` / `WHAT?`; image `/assets/hear-no-fud.png`.
5. **Monkey #3**: `SPEAK NO / ALPHA.`; copy `shhh.` / `I KNOW NOTHING.` / `SHHHHH.`; image `/assets/speak-no-alpha.png`.
6. **Three reactions**: `3 MONKEYS. / 3 REACTIONS.`; 3 image cards and `NOPE.` / `CAN'T HEAR YOU.` / `CAN'T SAY.`.
7. **Stickers**: `MONKEY / BUSINESS.`; image `/assets/sticker-sheet-transparent.png`.
8. **Token information**: `MONKEYS / LIVE ON BSC.` (adapt ETH), tagline; rows TOKEN, CHAIN, SUPPLY, WEBSITE, CONTRACT ADDRESS; `COPY CA 🙊`.
9. **Monkey picker**: `PICK YOUR / MONKEY.`; 🙈 🙉 🙊 buttons; selected image and caption (`YOU SAW NOTHING.` etc.).
10. **CTA**: `APE IN.` / `no lore. no lectures. just monkeys.` / copy CA / X / Telegram.
11. **Footer**: peeking monkey `/assets/peek-edge.png`, chain headline, emojis, copyright and socials.

## Required UI behavior

- Header anchors to top, reactions, token.
- `COPY CA` copies *only* the new Ethereum token CA after provided and indicates success.
- The picker changes selected monkey image and caption without page reload; default see-no-FUD.
- All images keep their proportions and transparent edges, with no black checker backgrounds.
- Keep mobile and desktop versions visually consistent with source; exact CSS and breakpoints need reconstruction separately.
- Do not promise a token is trading or show liquidity/chart links until it is deployed and paired.

## Asset notes

The source website uses JPG for Monkey #1 and PNG for remaining five image URLs. Your archive used WebP for all six. The pack supplies both optimized WebP and converted source-filename-compatible exports.
