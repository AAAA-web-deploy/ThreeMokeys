# Three Wise Monkeys — Ethereum (Next.js source)

A ready-to-edit **Next.js App Router + TypeScript** reconstruction of the public `threewisemonkeys.lol` landing page, using the six original mascots supplied by the user who says they hold reuse rights. The visual layout is recreated from a live-site inspection. **This is not a dump of the original site's private source code**; small differences in CSS, font metrics, and motion are possible.

## Quick start (Cursor / Windows / macOS)

1. Unzip the entire project folder.
2. Open the **root folder that contains `package.json`** in Cursor.
3. Install Node.js 20.9+ (22 LTS recommended).
4. In Cursor terminal:

   ```bash
   npm install
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).
6. When ready: `npm run typecheck`, `npm run check-assets`, `npm run build`.

No backend, API keys, or wallet connection is required.

## Critical: edit these fields first

Open `config/site.ts`:

- `contractAddress`: **your deployed Ethereum mainnet ERC-20 CA**, 0x + 40 hex characters. Starts empty intentionally.
- `branding.useCustomHeaderLogo`: set to `true` when using your own header logo; point `branding.headerLogoPath` at your replacement file. The default header uses the original MONKEYS-style text/emoji instead of showing a fake logo.
- `websiteUrl`, `socials.x`, `socials.telegram`: replace blank links with your real links.
- `supply`, `tokenName`, `ticker`: change only if different from the proposed values.
- `trading.dexscreenerPairUrl`: populate only when the live **Ethereum** pair actually exists.

**When CA is empty, copy-CA buttons are disabled and show `CA COMING SOON`.** The Uniswap and Etherscan links appear only with a valid Ethereum-format CA; they are never connected to the source BSC token.

## Structure

```text
app/
  layout.tsx             # metadata and base document
  page.tsx               # hero, sections, reactions, token info, CTA
  globals.css            # all colors, visual layout, responsive behavior
components/
  Header.tsx             # sticky nav
  Footer.tsx             # dark footer with edge-peek monkey
  MonkeyPicker.tsx       # functional three-emoji selector
  CopyContractButton.tsx # guarded clipboard with confirmation
  SocialButtons.tsx      # uses only supplied community URLs
  ScrollReveals.tsx      # subtle accessible entrance animations
config/site.ts           # editable token fields, images, copy
lib/links.ts             # validates CA + safe link construction
public/assets/          # six original image roles + optimized WebP backups
public/branding/        # favicon, ETH icon, logo placeholder, optional OG
scripts/                # asset/config checks
reference/              # original source notes, image map and asset audit
CURSOR_IMPLEMENTATION.md # precise instructions for Cursor
```

## Fidelity and limitations

The site follows the original section order: sticky header → golden two-column hero → three monkey stages → three reaction cards → sticker sheet → token information → interactive monkey picker → APE IN → dark peeking footer. It reproduces the original short copy with BSC references changed to ETH and includes all six user-supplied artwork slots with their live-web filenames.

The font, exact CSS breakpoints and animation timings were reconstructed rather than extracted as official source files. So **100% pixel-perfect equivalence on every viewport is not independently verified**. See `reference/REPRODUCTION_CHECKLIST.md` for visual QA steps.

## Deployment

The site is a static export. GitHub Actions publishes `main` to GitHub Pages at `https://aaaa-web-deploy.github.io/ThreeMokeys/`.

```bash
npm run build
```

Local preview of that export, plus the visitor dashboard API:

```bash
npm run tracker
```

Open `http://127.0.0.1:4173/` for the site and `http://127.0.0.1:4173/dashboard/` for visitors. The dashboard password defaults to `aaaa` (`DASHBOARD_PASSWORD` overrides it). GitHub Pages serves the pages only. Point `NEXT_PUBLIC_ANALYTICS_ORIGIN` at a running tracker host before expecting live visitor data on the public Pages site. Do not deploy trading links until the Ethereum contract is set in `config/site.ts`.

## Source and rights

Visual reference: https://www.threewisemonkeys.lol/ . The user stated they own or have permission to reuse its mascot material. The project is an independent Ethereum implementation unless an official affiliation is documented.
