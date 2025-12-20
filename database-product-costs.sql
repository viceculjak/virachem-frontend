-- Insert Product Costs for All Products
-- Execute this SQL in Supabase SQL Editor after running database-pricing-migration.sql

-- Update all product costs (in EUR)
UPDATE products SET cost_per_vial = 1.30 WHERE name = 'Bacteriostatic Water 10 mL';
UPDATE products SET cost_per_vial = 0.80 WHERE name = 'Bacteriostatic Water 2 mL';
UPDATE products SET cost_per_vial = 25.00 WHERE name = 'Bluemethyl 10 mg 100 caps';
UPDATE products SET cost_per_vial = 16.00 WHERE name = 'BPC-157 + TB-500 mix 5 mg';
UPDATE products SET cost_per_vial = 7.50 WHERE name = 'BPC-157 10 mg';
UPDATE products SET cost_per_vial = 20.00 WHERE name = 'CJC-1295 DAC 10 mg';
UPDATE products SET cost_per_vial = 9.50 WHERE name = 'Epithalon 10 mg';
UPDATE products SET cost_per_vial = 6.00 WHERE name = 'GHK-cu 20mg';
UPDATE products SET cost_per_vial = 4.00 WHERE name = 'GHRP-2 10 mg';
UPDATE products SET cost_per_vial = 4.00 WHERE name = 'GHRP-6 10 mg';
UPDATE products SET cost_per_vial = 11.47 WHERE name = 'GW-501516 (Cardarine) 10 mg 60 caps';
UPDATE products SET cost_per_vial = 13.50 WHERE name = 'HGH Fragment 176-191 5 mg';
UPDATE products SET cost_per_vial = 16.53 WHERE name = 'Ibutamoren (MK-677) 10 mg 90 caps';
UPDATE products SET cost_per_vial = 12.53 WHERE name = 'Ligandrol (LGD-4033) 10 mg 60 caps';
UPDATE products SET cost_per_vial = 30.00 WHERE name = 'Lipo NAD+ 500 mg 10 mL bottle';
UPDATE products SET cost_per_vial = 9.50 WHERE name = 'Melanotan 2 10 mg';
UPDATE products SET cost_per_vial = 11.00 WHERE name = 'Mots-c 10mg';
UPDATE products SET cost_per_vial = 25.00 WHERE name = 'NAD+ 300 mg 60 caps';
UPDATE products SET cost_per_vial = 19.00 WHERE name = 'NAD+ 500mg lyophilized vial';
UPDATE products SET cost_per_vial = 14.67 WHERE name = 'Oral BPC-157 ARG 250 mcg 60 caps';
UPDATE products SET cost_per_vial = 19.20 WHERE name = 'Oral Epithalon (capsules) 1 mg 40 caps';
UPDATE products SET cost_per_vial = 11.20 WHERE name = 'Ostarine (MK-2866) 10 mg 60 caps';
UPDATE products SET cost_per_vial = 9.50 WHERE name = 'PT-141 10 mg';
UPDATE products SET cost_per_vial = 8.50 WHERE name = 'Retatrutide 5 mg';
UPDATE products SET cost_per_vial = 12.00 WHERE name = 'Retatrutide kit';
UPDATE products SET cost_per_vial = 10.00 WHERE name = 'Selank 10 mg';
UPDATE products SET cost_per_vial = 6.00 WHERE name = 'Semaglutide 2 mg';
UPDATE products SET cost_per_vial = 9.00 WHERE name = 'Semaglutide 4 mg';
UPDATE products SET cost_per_vial = 12.00 WHERE name = 'Semaglutide kit';
UPDATE products SET cost_per_vial = 20.00 WHERE name = 'Semax 50 mg';
UPDATE products SET cost_per_vial = 25.00 WHERE name = 'SLU-PP-332 100 mcg 100 caps';
UPDATE products SET cost_per_vial = 18.40 WHERE name = 'Stenabolic (SR-9009) 10 mg 60 caps';
UPDATE products SET cost_per_vial = 9.00 WHERE name = 'TB-500 5 mg';
UPDATE products SET cost_per_vial = 7.50 WHERE name = 'Tirzepatide 5 mg';
UPDATE products SET cost_per_vial = 12.00 WHERE name = 'Tirzepatide kit';
UPDATE products SET cost_per_vial = 25.00 WHERE name = 'TUDCA 250 mg 100 caps';
UPDATE products SET cost_per_vial = 10.67 WHERE name = 'Yohimbine HCL 5 mg 100 caps';

-- Verify the updates
SELECT name, cost_per_vial 
FROM products 
ORDER BY name;

-- Success message
SELECT 'Product costs updated successfully!' as message,
       COUNT(*) as products_updated
FROM products
WHERE cost_per_vial IS NOT NULL;
