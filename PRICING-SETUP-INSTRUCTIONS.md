# Model 1 Tiered Pricing - Setup Instructions

## ✅ Implementation Complete!

The tiered pricing system has been fully implemented in the codebase. All code changes have been committed and pushed to GitHub.

## 🔧 Required Manual Steps (Database Setup)

To activate the pricing system, you need to execute two SQL files in your Supabase database:

### Step 1: Run Schema Migration

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Navigate to: **SQL Editor** → **New Query**
3. Open the file: `database-pricing-migration.sql`
4. Copy all the SQL content and paste it into the Supabase SQL editor
5. Click **"Run"** to execute
6. Verify success message: "Pricing schema migration completed successfully!"

**What this does:**
- Adds `cost_per_vial` column to the `products` table
- Adds `unit_price`, `total_price`, and `price_tier` columns to `quote_requests` table
- Creates indexes for better query performance

### Step 2: Insert Product Costs

1. Still in Supabase SQL Editor, create another **New Query**
2. Open the file: `database-product-costs.sql`
3. Copy all the SQL content and paste it into the editor
4. Click **"Run"** to execute
5. Verify the results show all 37 products updated with their costs

**What this does:**
- Updates all 37 products with their cost per vial (in EUR)
- Enables pricing calculations on product pages

## 🎯 How It Works

### Pricing Tiers (Automatic Calculation)

| Quantity | Margin | Discount |
|----------|--------|----------|
| 1-5 | 75% | — |
| 6-20 | 65% | 29% off |
| 21-50 | 55% | 44% off |
| 51-200 | 47% | 53% off |
| 201-500 | 42% | 57% off |
| 500+ | 35% | 62% off |

### User Flow

1. **Product Page** (`/products/[id]`)
   - Customer sees full pricing table for all 6 tiers
   - Selects quantity using input field
   - Real-time calculator shows unit price and total
   - Selected tier is highlighted in the table
   - "Request Quote" button includes pricing data in URL

2. **Quote Form** (`/quote`)
   - Receives pricing data from URL parameters
   - Displays pricing summary card (quantity, tier, unit price, total)
   - Customer fills out contact details
   - Submits quote request

3. **Backend Processing** (`/api/quote`)
   - Saves quote with pricing data to database
   - Sends email to `quotes@virachemical.com` with:
     - Customer info
     - Product details
     - Pricing breakdown
     - Estimated total

4. **Email Notification**
   - Professional HTML email format
   - Includes pricing information in highlighted section
   - Shows unit price, total price, and price tier
   - Notes that pricing is estimated pending confirmation

## 📊 Testing the System

### After running the SQL files:

1. Visit any product page (e.g., `/products/[product-id]`)
2. You should see the new "Pricing & Order" section
3. Try changing the quantity:
   - Enter 3 → should show tier 1-5 pricing
   - Enter 10 → should show tier 6-20 pricing with savings
   - Enter 100 → should show tier 51-200 pricing
4. Click "Request Quote" button
5. Verify pricing summary appears on quote form
6. Submit a test quote
7. Check `quotes@virachemical.com` for email with pricing

## 🔍 Verifying Database Changes

To verify everything is set up correctly:

```sql
-- Check if cost_per_vial column exists and has data
SELECT name, cost_per_vial 
FROM products 
WHERE cost_per_vial IS NOT NULL
ORDER BY name;

-- Should return all 37 products with their costs

-- Check if pricing columns exist in quote_requests
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'quote_requests' 
AND column_name IN ('unit_price', 'total_price', 'price_tier');

-- Should return 3 rows
```

## 🎨 Features Included

✅ **Product Detail Pages:**
- Full 6-tier pricing table
- Quantity selector with validation
- Real-time price calculator
- Savings percentage display
- "Best Value" badge on 500+ tier
- Tier highlighting based on selected quantity
- Mobile-responsive design

✅ **Quote Form:**
- Automatic prefilling from product page
- Pricing summary card
- Price tier display
- All pricing data passed to backend

✅ **API & Email:**
- Pricing data stored in database
- Professional email formatting
- Highlighted pricing section
- Estimated price disclaimer

✅ **Calculations:**
- Reusable pricing utilities in `src/lib/pricing.ts`
- Consistent calculations across all pages
- EUR currency formatting

## 📝 Important Notes

1. **Prices shown are estimates** - Final pricing is confirmed in your manual quote response
2. **No automated payments** - This is a B2B quote request system, not e-commerce
3. **All pricing in EUR** - Displayed with € symbol
4. **Cost updates** - To change product costs, run SQL UPDATE commands directly on the `products` table

## 🚀 Next Steps

1. Execute both SQL files in Supabase (required)
2. Test the flow on your deployed site
3. Verify email notifications are received
4. Adjust pricing if needed by updating `cost_per_vial` values

## 💡 Future Enhancements (Optional)

- Admin dashboard to update costs without SQL
- Per-product custom pricing tiers
- Currency conversion (USD, GBP)
- Bulk discount codes
- Automated order confirmations

---

**Questions?** All code is committed and ready. Just need to run those 2 SQL files!
