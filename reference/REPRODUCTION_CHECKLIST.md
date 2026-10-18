# Reproduction QA checklist

Live reference inspected: `https://www.threewisemonkeys.lol/` (October 18, 2026). Reproduction is a reimplementation, not original source-code export.

## Visual order / expected behavior

- [ ] Sticky gold header: left MONKEYS wordmark/emoji, right three-monkey nav + ETH badge.
- [ ] Hero gold/yellow two-column with radial dot noise: "3 MONKEYS / ON ETH / 4 FUN." and transparent trio image.
- [ ] 3 reaction panels in source order: See no FUD / Hear no FUD / Speak no Alpha.
- [ ] Correct square close-ups and source punchlines for each monkey.
- [ ] Reaction recap with three cards and one short response each.
- [ ] Transparent source sticker sheet under MONKEY BUSINESS.
- [ ] Chain panel displays Ethereum, token, supply, and only new Ethereum CA.
- [ ] Copy contract changes text to COPIED and really writes CA, or disabled until one exists.
- [ ] PICK YOUR MONKEY swaps image/caption for all three emoji choices, including keyboard selection.
- [ ] APE IN and social link fields don't reuse original BSC social accounts without authorization.
- [ ] Dark footer shows source peeking monkey at the right edge.
- [ ] At 1440px, 1024px, 768px, 390px and 320px, no clipped headings or horizontal scroll.
- [ ] Visually test low-motion settings (`prefers-reduced-motion: reduce`).
- [ ] Screenshots should be compared with live reference before claiming pixel-perfect likeness.

## Known unverified parity details

- Original private CSS, exact font file, scroll animation timings, and all breakpoint sizes were not available. The source site appeared to use nav/brand/navlinks/chip, hero-grid, reaction-slide, trio-grid, meme-wall, token, pick-stage and footer-peek layout classes.
- Source artwork in this project was converted to PNG/JPG under the live filename scheme from user WebP files; it may not be byte-identical to originals.
- A subtle entrance animation, shadow effects, background noise and the exact margins are reconstructed. Adjust for visual comparison.
- Website's original `WEBSITE` button linked back to the site; here it navigates to the monkey sections to avoid a redundant or unwanted external redirect.
