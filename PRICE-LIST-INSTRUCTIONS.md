# Model 1 Price List Instructions

## File Created

`price-list-model1.html` - A printable/PDF-exportable price list for Model 1: Finished RUO Formats

**Note:** This file is excluded from git (added to `.gitignore`) and will NOT be pushed to GitHub.

---

## ⚠️ Important: Website vs Price List Pricing Tiers

### **Website (`/products/[id]`):**
- Shows only **5 pricing tiers** (1-500 units)
- Tier 5 max: **201-500 units**
- Quantities **> 500 units** automatically redirect to **Model 2: Custom Manufacturing**
- Message shown: _"📦 Need quantities over 500 vials? For bulk orders, please use Model 2"_

### **Price List (this document):**
- Shows all **6 pricing tiers** (1-999 units)
- Tier 6: **501-999 units** at 38% margin (60% off)
- Internal document for sales team reference only
- Provides complete pricing transparency

**Rationale:** We emphasize Model 2 (Custom Manufacturing) as our core offering for bulk orders, while keeping full pricing available internally for sales flexibility.

---

## How to Use

### 1️⃣ **View in Browser**
```bash
# Open the file in your default browser
open price-list-model1.html  # macOS
xdg-open price-list-model1.html  # Linux
start price-list-model1.html  # Windows
```

### 2️⃣ **Export to PDF**

**Option A: Browser Print (Easiest)**
1. Open `price-list-model1.html` in Chrome/Firefox
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Destination: "Save as PDF"
4. Settings:
   - Paper size: A4
   - Margins: Default
   - Background graphics: ON (to preserve colors)
5. Click "Save"

**Option B: Command Line (wkhtmltopdf)**
```bash
# Install wkhtmltopdf
sudo apt-get install wkhtmltopdf  # Linux
brew install wkhtmltopdf  # macOS

# Generate PDF
wkhtmltopdf price-list-model1.html virachem-model1-pricelist-2026.pdf
```

---

## How to Update Prices

The HTML file currently contains **sample pricing** based on the standard tier structure. To update with actual prices:

### Pricing Formula (from your database `pricing_tiers_config`):

```
Price per unit = cost_per_vial / margin

Margins by tier:
- Tier 1 (1-5 units):     margin = 0.25 (75%)  →  Price = cost / 0.25 = cost × 4.00
- Tier 2 (6-20 units):    margin = 0.35 (65%)  →  Price = cost / 0.35 = cost × 2.86
- Tier 3 (21-50 units):   margin = 0.45 (55%)  →  Price = cost / 0.45 = cost × 2.22
- Tier 4 (51-200 units):  margin = 0.53 (47%)  →  Price = cost / 0.53 = cost × 1.89
- Tier 5 (201-500 units): margin = 0.58 (42%)  →  Price = cost / 0.58 = cost × 1.72
- Tier 6 (501-999 units): margin = 0.62 (38%)  →  Price = cost / 0.62 = cost × 1.61
```

**Note:** Tier 6 is shown in price list but hidden on website (redirects to Model 2)

### Example Calculation:

For **Retatrutide 5mg** with `cost_per_vial = €8.50`:
- Tier 1: €8.50 / 0.25 = **€34.00/unit** (baseline)
- Tier 2: €8.50 / 0.35 = **€24.29/unit** (29% off)
- Tier 3: €8.50 / 0.45 = **€18.89/unit** (44% off)
- Tier 4: €8.50 / 0.53 = **€16.04/unit** (53% off)
- Tier 5: €8.50 / 0.58 = **€14.66/unit** (57% off) ← **Website stops here**
- Tier 6: €8.50 / 0.62 = **€13.71/unit** (60% off) ← **Price list only**

### Update Products:

1. Get actual `cost_per_vial` values from your database
2. Use the formula above to calculate all 6 tier prices
3. Update the pricing tables in the HTML
4. Update product details (CAS, MW, etc.) from database

---

## Adding More Products

To add full pricing tables for more products (currently showing 3 examples):

1. **Copy a product section** (lines ~50-120 as template)
2. **Update product details:**
   - Product name and code (e.g., "TB-500 5 mg VC-006")
   - CAS number
   - Molecular weight
   - Purity options
3. **Calculate prices** using the formula above with actual `cost_per_vial`
4. **Paste into the appropriate page** (keep 2-3 products per page for readability)

---

## Current Contents - ALL 38 Products Included

### Page 1: Cover
- Model 1 branding
- Format description
- Validity period
- Company info

### Page 2: GLP-1 Agonists (8 products)
- Retatrutide 5mg + Kit
- Semaglutide 2mg, 4mg + Kit
- Tirzepatide 5mg + Kit

### Page 3: Peptide Therapeutics (8 products)
- BPC-157, TB-500, BPC+TB Mix
- Epithalon, PT-141, Melanotan 2
- Selank, Semax

### Page 4: Growth Hormone & Secretagogues (6 products)
- HGH Fragment, CJC-1295 DAC
- GHRP-2, GHRP-6, MOTS-C, GHK-Cu

### Page 5: SARMs & Modulators (5 products)
- GW-501516, Ostarine, Ligandrol
- Ibutamoren, Stenabolic

### Page 6: NAD+ & Advanced (8 products)
- NAD+ vial/lipo/caps, Bluemethyl
- SLU-PP-332, TUDCA, Yohimbine

### Page 7: Oral & Supplies (4 products)
- Oral BPC-157, Oral Epithalon
- Bacteriostatic Water 2mL & 10mL

### Page 8: Terms & Contact
- Product specifications & formats
- Ordering & delivery (~1 week)
- Payment terms, pricing info
- Quality & compliance
- Contact information (all emails)
- Company registration

**✅ NO COST INFORMATION SHOWN** - Client-facing document only shows final prices

---

## Customization Tips

### Update Issue Date:
Search for "January 2026" and update to current month/year

### Add Your Logo:
Add this after line 15 (in cover page):
```html
<img src="/logo.png" alt="ViraChem" style="max-width: 200px; margin-bottom: 32px;">
```

### Add Product Images:
In each product section, add:
```html
<div style="text-align: center; margin: 16px 0;">
    <img src="/structures/VC-001.svg" alt="Structure" style="max-width: 200px;">
</div>
```

### Change Colors:
All brand colors are defined in CSS variables (lines 28-36):
- `--navy: #0B1F3F`
- `--red: #C9364F`
- `--gold: #E8B341`
- `--teal: #5A8A8F`

---

## Print Settings for Best Results

When printing to PDF:
1. **Paper:** A4 (210mm × 297mm)
2. **Margins:** Default (browser handles this)
3. **Orientation:** Portrait
4. **Scale:** 100%
5. **Background graphics:** ON (important for colored headers)
6. **Headers/footers:** OFF (custom footer in HTML)

---

## Notes

- This is an **internal document** for price list generation
- NOT tracked in git (excluded via `.gitignore`)
- Update prices manually or generate from database
- Safe to modify for different product selections
- Can be used as template for other models (Model 0, Model 2)

---

**Created:** January 2026  
**Purpose:** Model 1 pricing reference for sales and partners  
**Maintenance:** Update quarterly or when prices change
