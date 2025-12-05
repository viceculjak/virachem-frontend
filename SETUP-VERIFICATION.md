# Virachem Setup Verification Checklist

This document helps you verify that your Virachem project is configured correctly and ready to run.

## Environment Variables

### 1. Check `.env.local` exists
```bash
ls -la .env.local
```

### 2. Required variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Get these values from Supabase:
1. Go to [supabase.com](https://supabase.com)
2. Open your project
3. Navigate to **Settings → API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key (NOT service role) → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Important**: Never commit `.env.local` to git (already in `.gitignore`)

---

## Database Setup

### 1. Execute the database schema:
1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Open `database-schema.sql` from this project
5. Copy and paste the entire contents into the SQL editor
6. Click **Run** to execute

### 2. Verify tables were created:
Go to **Table Editor** in Supabase and check for:
- `products` table (7 columns)
- `quote_requests` table (10 columns)

### 3. Verify sample data:
Check that the `products` table has 2 sample products:
- Retatrutide (CAS: 2381089-83-2)
- GHK-Cu (CAS: 49557-75-7)

### 4. Verify RLS policies:
Go to **Authentication → Policies** and check for:
- "Allow public read access to products"
- "Allow public insert to quote_requests"
- "Allow public read to quote_requests"

---

## Chemical Structure Images

### 1. Verify images were generated:
```bash
ls -la public/structures/
```

Expected files:
- `VC-001.svg` (Retatrutide structure)
- `VC-002.svg` (GHK-Cu structure)

### 2. If images are missing:
```bash
# Install RDKit (if not already installed)
pip3 install rdkit

# Generate images
python3 scripts/generate-images.py
```

---

## Dependencies

### 1. Verify all npm packages are installed:
```bash
npm install
```

### 2. Key dependencies should be present:
- `next` (16.0.7+)
- `react` (19.2.0+)
- `@supabase/supabase-js` (2.86.2+)
- `tailwindcss` (4.0+)
- ShadCN UI components
- `lucide-react` (icons)

---

## Test the Application

### 1. Start the development server:
```bash
npm run dev
```

### 2. Test these pages:

#### Homepage (`http://localhost:3000`)
- [ ] ViraChem branding displays (molecule icon + VIRACHEM text)
- [ ] Large search bar visible in hero section
- [ ] "Browse All Products" button works
- [ ] "Request Quote" button works
- [ ] Trust badges show (EU, LICENSED, RESEARCH, GLOBAL)
- [ ] Services section displays with colored left borders (no emojis)
- [ ] No emojis visible anywhere

#### Products Page (`http://localhost:3000/products`)
- [ ] Products load from Supabase
- [ ] Search bar is visible at top
- [ ] Can search by name (try "Retatrutide")
- [ ] Can search by CAS (try "2381089-83-2")
- [ ] Chemical structure images display (Retatrutide, GHK-Cu)
- [ ] CAS numbers show as badges with monospace font
- [ ] Purity tags display correctly
- [ ] Disclaimers use "WARNING:" text (no emoji)
- [ ] Clicking a product navigates to detail page

#### Product Detail Page (`http://localhost:3000/products/[id]`)
- [ ] Product information displays
- [ ] Chemical structure image displays
- [ ] SMILES string shows in gray box
- [ ] CAS number displays
- [ ] Molecular weight displays
- [ ] Purity options display as tags
- [ ] "Request Quote" button works and passes product_id

#### Quote Form (`http://localhost:3000/quote`)
- [ ] Form displays with all fields
- [ ] All fields validate properly
- [ ] Can submit a quote request
- [ ] Success message displays after submission

#### Quote Form with Product (`http://localhost:3000/quote?product_id=<uuid>`)
- [ ] Product information banner displays at top
- [ ] Shows product name, CAS, MW
- [ ] Shows purity options
- [ ] "View Details" link works
- [ ] Form submits with product_id

#### Quote Form from Homepage
- [ ] Type product name in homepage search
- [ ] Click Search button
- [ ] Should redirect to products page with filtered results
- [ ] URL should contain ?search= parameter

---

## Database Connection Test

### 1. Check if Supabase connection works:

Open browser console on any page and run:
```javascript
// This will test the connection
fetch('http://localhost:3000/products')
```

If you see products load, the connection is working!

### 2. Common issues:

❌ **"Missing Supabase environment variables"**
- Check `.env.local` file exists and has correct values
- Restart dev server after adding env variables

**"Error loading products"**
- Verify Supabase credentials are correct
- Check that `database-schema.sql` was executed
- Verify RLS policies are enabled

❌ **Images not showing**
- Run `python3 scripts/generate-images.py`
- Check `public/structures/` folder exists
- Verify image URLs in database match filenames

---

## Build for Production

### 1. Test production build:
```bash
npm run build
```

**Note**: The build will fail if `.env.local` is not configured with valid Supabase credentials. This is expected behavior. Make sure you've completed the environment variables setup first.

Should complete without errors once environment variables are configured.

### 2. Test production server:
```bash
npm start
```

Visit `http://localhost:3000` and test all pages.

---

## Ready to Deploy!

Once all checks pass, you're ready to deploy:

### Deploy to Vercel:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or push to GitHub and connect to Vercel dashboard.

### Configure Vercel Environment Variables:
In your Vercel project settings, add:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Quick Setup Summary

For a brand new setup, run these commands in order:

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env.local  # then edit with your values

# 3. Generate structure images
pip3 install rdkit
python3 scripts/generate-images.py

# 4. Execute database-schema.sql in Supabase

# 5. Start dev server
npm run dev
```

---

## Getting Help

If you encounter issues:
1. Check this verification checklist
2. Review error messages in terminal and browser console
3. Check [Next.js docs](https://nextjs.org/docs)
4. Check [Supabase docs](https://supabase.com/docs)

---

**Last Updated**: December 4, 2025
**Project**: Virachem Research Chemical Catalog
**Tech Stack**: Next.js 14 + Supabase + TailwindCSS + ShadCN UI
