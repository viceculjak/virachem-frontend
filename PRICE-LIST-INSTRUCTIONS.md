# Model 1 Price List Instructions

## File Created

`price-list-model1.html` - A printable/PDF-exportable price list for Model 1: Finished RUO Formats

**Note:** This file is excluded from git (added to `.gitignore`) and will NOT be pushed to GitHub.

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

### Pricing Formula (from your `pricing.ts`):

```
Price per unit = cost_per_vial / margin

Margins by tier:
- Tier 1 (1-5 units):     margin = 0.25  →  Price = cost / 0.25 = cost × 4.00
- Tier 2 (6-20 units):    margin = 0.35  →  Price = cost / 0.35 = cost × 2.86
- Tier 3 (21-50 units):   margin = 0.45  →  Price = cost / 0.45 = cost × 2.22
- Tier 4 (51-200 units):  margin = 0.53  →  Price = cost / 0.53 = cost × 1.89
- Tier 5 (201-500 units): margin = 0.58  →  Price = cost / 0.58 = cost × 1.72
- Tier 6 (501+ units):    margin = 0.65  →  Price = cost / 0.65 = cost × 1.54
```

### Example Calculation:

For **Retatrutide** with `cost_per_vial = €8.50`:
- Tier 1: €8.50 / 0.25 = **€34.00/unit**
- Tier 2: €8.50 / 0.35 = **€24.29/unit**
- Tier 3: €8.50 / 0.45 = **€18.89/unit**
- Tier 4: €8.50 / 0.53 = **€16.04/unit**
- Tier 5: €8.50 / 0.58 = **€14.66/unit**
- Tier 6: €8.50 / 0.65 = **€13.08/unit**

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

## Current Contents

### Page 1: Cover
- Model 1 branding
- Format description
- Validity period
- Company info

### Page 2: Sample Products with Full Pricing
- Retatrutide (VC-001)
- Semaglutide (VC-003)

### Page 3: More Products
- Tirzepatide (VC-004)
- BPC-157 (VC-005)

### Page 4: Product List
- All 27 additional products listed
- Reference to contact for detailed pricing

### Page 5: Terms & Conditions
- Product specifications
- Ordering & delivery
- Pricing & payment
- Quality & compliance
- Customer qualification
- Transition to Model 2

### Page 6: Contact Information
- Head office address
- Email contacts (sales, tech, compliance)
- Company registration details
- Online presence

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
