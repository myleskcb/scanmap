# SCANS.AD ↔ Graphics Studio (BUYBACK.AD) integration

ScanMap runs 100% standalone. This file documents the optional partner intake
that lets Graphics Studio hand a finished ad straight into a campaign.

## Visibility: members of both platforms only
Neither product mentions the other to single-product users. Graphics Studio
hides its order buttons and SCANS.AD helper until the browser holds proof of a
SCANS.AD account (arrived via the dashboard link below, or pasted a tracking
link into a QR layer) AND the user is signed in there. ScanMap's dashboard
shows a "Design your flyers in Graphics Studio" link (`PARTNER_GFX_URL`,
carrying `?scansad=member`) only after this browser has received a Graphics
Studio handoff (`sm_gfx_member`). The handoff banner/auth note only ever appear
mid-handoff — never as advertising.

## What the user sees
1. In Graphics Studio they click **🖨 Order prints + posting** on the export
   screen. A tab opens on `login.html?partner=buybackad&name=…&dest=…&qrpos=…`.
2. The artwork PNG arrives tab-to-tab (postMessage) and is stored in this
   browser (IndexedDB) — it survives the sign-in reload.
3. A green banner offers **Start the campaign →**; the wizard prefills the
   campaign name (step 1) and scan destination (step 4).
4. After **Create campaign**, the artwork auto-loads into the flyer batch
   generator with the tracked-QR corner preselected from the design's own QR
   placement. Generate the ZIP as usual — every stop gets its unique code.

## Security model
- Artwork messages are accepted **only** from origins listed in
  `PARTNER_ORIGINS` (config.js) — exact scheme+host matches. Empty array = the
  **whole** intake is off, query-string prefill included.
- Payload must be a `data:image/png;base64,…` string under 64M chars (~48 MB);
  anything else is answered with `scansad:artwork-rejected` + reason.
- Accepted artwork is confirmed back with `scansad:artwork-received`; Graphics
  Studio keeps a local download as fallback until that ACK arrives, so a
  rejected or lost message never loses the file.
- Destination URLs (param or message) are sanitized to https-only and never a
  SCANS.AD tracking link (prevents scan-redirect loops).
- Partner query params are stripped from the URL immediately (replaceState) so
  reloads can't resurrect a completed or dismissed handoff, and each new
  handoff clears any stale stored artwork.
- The handoff never touches Supabase until the signed-in admin creates the
  campaign themselves. No API keys are shared between the two products.

## Wiring
- ScanMap `config.js`: `PARTNER_ORIGINS = ["https://buyback.ad", …]`
- Graphics Studio `config.js`: `window.SCANMAP_URL = "https://your-scanmap-domain"`

## Fallback path (no handshake)
If the artwork message never arrives (popup blocked, partner offline), the
wizard still prefills from the URL parameters and Graphics Studio downloads the
PNG locally — the user uploads it manually in the flyer batch generator.
