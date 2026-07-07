/* ═══════════════════════════════════════════════════════════
   SCANMAP CONFIG — fill this in ONCE, then never touch it again.
   Every future app update replaces index.html / field.html only.
   ═══════════════════════════════════════════════════════════ */
const SUPABASE_URL      = "https://yhtjnrrabsvdrdhdegqp.supabase.co";       // e.g. https://abcd1234.supabase.co
/* Partner products allowed to hand artwork into the campaign wizard via
   postMessage (Graphics Studio / BUYBACK.AD). Exact origins only — scheme +
   host, no trailing slash. Leave the array EMPTY [] to switch the partner
   intake off completely; ScanMap runs 100% standalone either way. */
const PARTNER_ORIGINS   = [
  "https://studio.scans.ad",                       // Graphics Studio on scans.ad subdomain (primary)
  "https://buybackad-graphics-studio.netlify.app", // Netlify fallback (works during DNS propagation)
  "https://buyback.ad",                            // reserved for a future dedicated domain
  "https://www.buyback.ad",
];
/* Where the (hidden) dashboard link to Graphics Studio points. Shown ONLY to
   signed-in admins whose browser has already received a Graphics Studio
   handoff — single-product users never see the other product mentioned. */
const PARTNER_GFX_URL   = "https://studio.scans.ad";  // Graphics Studio home (activates when the studio CNAME resolves)
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodGpucnJhYnN2ZHJkaGRlZ3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxOTg0NDAsImV4cCI6MjA5ODc3NDQ0MH0.EANgyhCX_PO_D3q9jIA2MYuSRRkinhYU-Bp79-LskYA";  // long key starting with eyJ...
const MAPBOX_TOKEN      = "pk.eyJ1IjoibXlsZXNrY2IiLCJhIjoiY21uZHF4aDJ5MWtwdzJwcHR5czBleG9mcCJ9.TQJ7eFf2xC8gVVfyghZL0w";
const SCAN_FN_URL       = SUPABASE_URL + "/functions/v1/scan";
