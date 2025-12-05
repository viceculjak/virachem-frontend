-- ViraChem Product Catalog - New Products
-- Generated automatically from product research
-- Execute this in your Supabase SQL Editor

-- Insert new products
INSERT INTO products (name, cas, smiles, mw, purity_options, image_url) VALUES
  ('Semaglutide', '910463-68-2', NULL, '4114 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-003.svg'),
  ('Tirzepatide', '2023788-19-2', NULL, '4813.5 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-004.svg'),
  ('BPC-157', '137525-51-0', NULL, '1419.5 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-005.svg'),
  ('TB-500', '885340-08-9', NULL, '889.0 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-006.svg'),
  ('BPC-157 + TB-500 Mix', 'N/A Mixture', NULL, 'N/A Mixture', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-007.svg'),
  ('Epithalon', '64082-79-7', NULL, '390.35 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-008.svg'),
  ('PT-141', '189691-06-3', NULL, '1025.2 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-009.svg'),
  ('HGH Fragment 176-191', NULL, NULL, '1859.1 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-010.svg'),
  ('Melanotan 2', '121062-08-6', NULL, '1024.2 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-011.svg'),
  ('CJC-1295 DAC', '863288-34-0', NULL, '3649.1 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-012.svg'),
  ('GHRP-2', '158861-67-7', NULL, '818.0 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-013.svg'),
  ('GHRP-6', NULL, NULL, '873.0 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-014.svg'),
  ('Selank', '129954-34-3', NULL, '751.9 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-015.svg'),
  ('Semax', '80714-61-0', NULL, '813.9 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-016.svg'),
  ('MOTS-C', '1627580-64-6', NULL, '2174.6 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-017.svg'),
  ('GW-501516', '317318-70-0', NULL, '453.5 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-018.svg'),
  ('Ostarine', '841205-47-8', NULL, '389.3 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-019.svg'),
  ('Ligandrol', '1165910-22-4', NULL, '338.25 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-020.svg'),
  ('Ibutamoren', '159634-47-6', NULL, '528.7 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-021.svg'),
  ('Stenabolic', '1379686-30-2', NULL, '437.9 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-022.svg'),
  ('Yohimbine HCL', '65-19-0', NULL, '390.9 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-023.svg'),
  ('Oral BPC-157', '137525-51-0', NULL, '1419.5 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-024.svg'),
  ('Oral Epithalon', '64082-79-7', NULL, '390.35 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-025.svg'),
  ('NAD+', '53-84-9', NULL, '663.4 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-026.svg'),
  ('Lipo NAD+', '53-84-9', NULL, '663.4 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-027.svg'),
  ('NAD+ Capsules', '53-84-9', NULL, '663.4 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-028.svg'),
  ('Bluemethyl', '13422-55-4', NULL, '1344.4 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-029.svg'),
  ('SLU-PP-332', NULL, NULL, '290.3 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-030.svg'),
  ('TUDCA', '14605-22-2', NULL, '499.7 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-031.svg'),
  ('Bacteriostatic Water', '7732-18-5', 'O', '18.015 g/mol', ARRAY['≥95%', '≥98%', '≥99%'], '/structures/VC-032.svg');

-- Success message
SELECT '30 new products added successfully!' as message;