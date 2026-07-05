/* ═══════════════════════════════════════════════════════════
   SCANMAP CONFIG — fill this in ONCE, then never touch it again.
   Every future app update replaces index.html / field.html only.
   ═══════════════════════════════════════════════════════════ */
const SUPABASE_URL      = "https://yhtjnrrabsvdrdhdegqp.supabase.co";       // e.g. https://abcd1234.supabase.co
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodGpucnJhYnN2ZHJkaGRlZ3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxOTg0NDAsImV4cCI6MjA5ODc3NDQ0MH0.EANgyhCX_PO_D3q9jIA2MYuSRRkinhYU-Bp79-LskYA";  // long key starting with eyJ...
const MAPBOX_TOKEN      = "pk.eyJ1IjoibXlsZXNrY2IiLCJhIjoiY21uZHF4aDJ5MWtwdzJwcHR5czBleG9mcCJ9.TQJ7eFf2xC8gVVfyghZL0w";
const SCAN_FN_URL       = SUPABASE_URL + "/functions/v1/scan";
