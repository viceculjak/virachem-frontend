-- ViraChem: Update pricing_tiers_config with new margins (40% starting, scale down)
-- Run this in Supabase SQL Editor or psql
-- Tiers 1–5 only (we hide tier 6 / 501+ on site; >500 → Model 2)

-- New margins (price = cost / ((100 - margin_percentage) / 100)):
-- Tier 1 (1–5):   40% → margin 0.60
-- Tier 2 (6–20):  35% → margin 0.65
-- Tier 3 (21–50): 30% → margin 0.70
-- Tier 4 (51–200): 26% → margin 0.74
-- Tier 5 (201–500): 23% → margin 0.77

BEGIN;

UPDATE "public"."pricing_tiers_config"
SET
  "margin_percentage" = 40.00,
  "mrp_margin_percentage" = 65.00,
  "updated_at" = NOW()
WHERE "id" = 'e48c5e81-0d0c-4cf8-8ec9-da296a50a496'
  AND "tier_number" = 1;

UPDATE "public"."pricing_tiers_config"
SET
  "margin_percentage" = 35.00,
  "mrp_margin_percentage" = 60.00,
  "updated_at" = NOW()
WHERE "id" = 'e9dfa9a9-d293-4be7-bd6a-870b455002c2'
  AND "tier_number" = 2;

UPDATE "public"."pricing_tiers_config"
SET
  "margin_percentage" = 30.00,
  "mrp_margin_percentage" = 55.00,
  "updated_at" = NOW()
WHERE "id" = '45623d19-ffb2-4600-8fcb-28dff95d38cb'
  AND "tier_number" = 3;

UPDATE "public"."pricing_tiers_config"
SET
  "margin_percentage" = 26.00,
  "mrp_margin_percentage" = 51.00,
  "updated_at" = NOW()
WHERE "id" = '8fd57c07-e04d-4c93-a10c-e3eefc101ffa'
  AND "tier_number" = 4;

UPDATE "public"."pricing_tiers_config"
SET
  "margin_percentage" = 23.00,
  "mrp_margin_percentage" = 48.00,
  "updated_at" = NOW()
WHERE "id" = 'ac383e7c-8fa9-412f-9fc5-0db30df3c485'
  AND "tier_number" = 5;

COMMIT;

-- Verify (optional; run after COMMIT):
-- SELECT tier_number, tier_name, min_quantity, max_quantity, margin_percentage, mrp_margin_percentage, updated_at
-- FROM "public"."pricing_tiers_config"
-- WHERE tier_number BETWEEN 1 AND 5
-- ORDER BY tier_number;
