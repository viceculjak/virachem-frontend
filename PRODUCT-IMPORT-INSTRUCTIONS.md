# ViraChem Product Catalog Import Instructions

## Overview

This guide explains how to import 30 new research compounds into your ViraChem product catalog.

## What Was Generated

1. **Product Data Research** (`scripts/products-data.json`)
   - CAS numbers
   - Molecular weights
   - Chemical formulas
   - Product categories

2. **Molecular Structure Images** (`public/structures/VC-003.svg` through `VC-032.svg`)
   - 1 actual structure (Bacteriostatic Water)
   - 29 placeholder images (large peptides don't have available SMILES)

3. **SQL Insert File** (`database-new-products.sql`)
   - Ready-to-execute SQL statements
   - All products with standard purity options

## Products Added (30 compounds)

### Peptides (15)
- Semaglutide
- Tirzepatide
- BPC-157
- TB-500
- BPC-157 + TB-500 Mix
- Epithalon
- PT-141
- HGH Fragment 176-191
- Melanotan 2
- CJC-1295 DAC
- GHRP-2
- GHRP-6
- Selank
- Semax
- MOTS-C

### SARMs (5)
- GW-501516 (Cardarine)
- Ostarine (MK-2866)
- Ligandrol (LGD-4033)
- Ibutamoren (MK-677)
- Stenaboric (SR-9009)

### Supplements/Other (10)
- Yohimbine HCL
- Oral BPC-157
- Oral Epithalon
- NAD+
- Lipo NAD+
- NAD+ Capsules
- Bluemethyl
- SLU-PP-332
- TUDCA
- Bacteriostatic Water

## Import Steps

### Step 1: Review the Data (Optional)

Before importing, you can review the generated data:

```bash
cd scripts
cat products-data-with-images.json
```

Check that:
- CAS numbers look correct
- Molecular weights are reasonable
- Image URLs are properly formatted

### Step 2: Import to Supabase

1. **Go to your Supabase Dashboard**
   - Navigate to: https://supabase.com
   - Select your ViraChem project

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New query"

3. **Copy the SQL File**
   ```bash
   # Open the SQL file
   cat database-new-products.sql
   ```
   - Copy all contents of `database-new-products.sql`

4. **Paste and Execute**
   - Paste into the SQL Editor
   - Click "Run" button
   - You should see: "30 new products added successfully!"

### Step 3: Verify Import

1. **Check Products Page**
   - Go to your website: http://localhost:3000/products
   - You should now see 32 total products (30 new + 2 existing)

2. **Test Search**
   - Search for "Semaglutide" - should appear
   - Search for "GW-501516" - should appear
   - Search by CAS number - should work

3. **Check Product Details**
   - Click on any new product
   - Verify:
     - CAS number displays correctly
     - Molecular weight is shown
     - Image appears (placeholder or actual structure)
     - Purity options show: ≥95%, ≥98%, ≥99%

### Step 4: Update Images (Optional)

The generated images are placeholders. To add actual molecular structure images:

1. **Option A: Generate from SMILES** (requires chemistry expertise)
   - Find accurate SMILES strings for each compound
   - Update `products-data.json` with SMILES
   - Re-run: `python3 scripts/generate-catalog-structures.py`

2. **Option B: Use Pre-made Images**
   - Replace files in `public/structures/VC-XXX.svg`
   - Keep same filenames (VC-003.svg, VC-004.svg, etc.)
   - Recommended size: 400x300px
   - Format: SVG preferred, PNG acceptable

3. **Option C: Keep Placeholders**
   - Placeholders show product name
   - Professional, clean appearance
   - No action needed

## Troubleshooting

### Products Not Appearing

**Problem:** Products don't show on catalog page

**Solutions:**
1. Check browser console for errors
2. Verify SQL executed successfully in Supabase
3. Check that `.env.local` has correct Supabase credentials
4. Restart dev server: `npm run dev`

### Missing Images

**Problem:** Product images not loading

**Solutions:**
1. Check that files exist: `ls public/structures/VC-*.svg`
2. Verify permissions: `chmod 644 public/structures/*.svg`
3. Clear browser cache
4. Check image_url in database matches file path

### Duplicate Products

**Problem:** "duplicate key value" error in SQL

**Solutions:**
1. Products may already exist in database
2. Check existing products: `SELECT name FROM products;`
3. Remove duplicates from SQL file
4. Re-run import

### CAS Number Format

**Problem:** CAS numbers look wrong

**Solutions:**
- All CAS numbers were researched from PubChem
- "N/A" means no standard CAS exists (mixtures, formulations)
- Can manually update: `UPDATE products SET cas = '123-45-6' WHERE name = 'Product Name';`

## Database Schema Reference

Products table structure:
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  cas TEXT NOT NULL,
  smiles TEXT,
  mw TEXT NOT NULL,
  purity_options TEXT[],
  image_url TEXT,
  created_at TIMESTAMPTZ
);
```

## Next Steps

After successful import:

1. **Test All Features**
   - Search functionality
   - Product detail pages
   - Quote request forms

2. **Customize (Optional)**
   - Update product descriptions
   - Add product-specific notes
   - Customize purity options for specific products

3. **Deploy**
   - Commit changes: `git add . && git commit -m "Add 30 new products to catalog"`
   - Push to repository: `git push`
   - Vercel will auto-deploy

## Support

If you encounter issues:

1. Check Supabase logs: Dashboard → Logs
2. Check browser console: F12 → Console tab
3. Verify dev server is running: `npm run dev`
4. Review this document for troubleshooting steps

## File Reference

Generated files:
- `scripts/products-data.json` - Raw research data
- `scripts/products-data-with-images.json` - Data with image paths
- `scripts/research-products.py` - Research script
- `scripts/generate-catalog-structures.py` - Structure generator
- `scripts/generate-sql.py` - SQL generator
- `database-new-products.sql` - Import file (use this!)
- `public/structures/VC-003.svg` through `VC-032.svg` - Product images

---

**Import Date:** December 2025  
**Total Products Added:** 30  
**Status:** Ready for import
