-- Update Virachem Products
-- Run this in your Supabase SQL Editor to replace sample products with real research compounds

-- First, delete old products (this will also delete any related quote requests due to CASCADE)
DELETE FROM products WHERE cas IN ('50-78-2', '58-08-2');

-- Insert new research compounds
INSERT INTO products (name, cas, smiles, mw, purity_options, image_url) VALUES
  (
    'Retatrutide', 
    '2381089-83-2', 
    'CC(C)C[C@H](NC(=O)[C@H](CC(C)C)NC(=O)[C@H](CCCNC(N)=N)NC(=O)[C@H](CCCCN)NC(=O)[C@@H]1CCCN1C(=O)[C@H](CCCCN)NC(=O)[C@H](CO)NC(=O)[C@H](Cc1ccccc1)NC(=O)[C@@H]1CCCN1C(=O)[C@H](CCCCN)NC(=O)[C@H](C)NC(=O)[C@H](C)N)C(=O)N[C@@H](CC(C)C)C(=O)N[C@@H](Cc1c[nH]c2ccccc12)C(=O)N[C@@H](CC(C)C)C(=O)N[C@@H](CCCNC(N)=N)C(=O)NCC(=O)N[C@@H](Cc1ccccc1)C(=O)N[C@@H](CC(C)C)C(=O)N[C@@H](CO)C(=O)N[C@@H](Cc1ccccc1)C(=O)N[C@@H](CCCCN)C(=O)N[C@@H](C)C(=O)N[C@@H](CCCCN)C(=O)N[C@@H](Cc1c[nH]c2ccccc12)C(=O)N[C@@H](Cc1c[nH]c2ccccc12)C(=O)N[C@@H](CCC(=O)O)C(=O)N[C@@H](C)C(=O)N[C@@H](CCCCN)C(N)=O', 
    '4858.6 g/mol', 
    ARRAY['≥95%', '≥98%', '≥99%'], 
    '/structures/VC-001.svg'
  ),
  (
    'GHK-Cu', 
    '49557-75-7', 
    'N[C@@H](CC(=O)N[C@@H](Cc1c[nH]cn1)C(=O)N[C@@H](CCCCN)C(=O)O)C(=O)O', 
    '340.38 g/mol', 
    ARRAY['≥95%', '≥98%', '≥99%'], 
    '/structures/VC-002.svg'
  );

-- Verify the update
SELECT 
  name, 
  cas, 
  mw, 
  purity_options,
  created_at 
FROM products 
ORDER BY created_at DESC;
