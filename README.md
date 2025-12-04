# ViraChem - EU-Registered Research Chemical Distribution

**EDGE OF RESEARCH** | Split, Croatia 🇭🇷

A professional B2B platform for licensed intermediation in fine chemicals and biochemicals. ViraChem j.d.o.o. is a registered Croatian company serving research institutions across Europe and internationally.

## 🏢 Company Information

**ViraChem jednostavno društvo s ograničenom odgovornošću**  
- **Registration**: Trgovački sud u Splitu (Commercial Court in Split)
- **MBS**: 060500406
- **OIB**: 73782597071  
- **EUID**: HRSR.060500406
- **Activity Code**: 46.19.0 (Intermediation in wholesale trade)
- **Founded**: June 27, 2025
- **Location**: Pujanke 24A, 21000 Split, Croatia

## 🎨 Brand Identity

### Colors
- **Navy**: #0B1F3F (Primary brand, headings, molecular structure)
- **Red**: #C9364F (CTAs, "EDGE OF RESEARCH" tagline)
- **Gold**: #E8B341 (Badges, purity tags)
- **Teal**: #5A8A8F (Accents, hover states)
- **Grey**: #798996 (Secondary text)

### Typography
- **Font**: Urbanist (Google Fonts)
- **Logo**: VIRACHEM (split: VIRA in navy, CHEM in grey)
- **Tagline**: EDGE OF RESEARCH

## ✨ Features

- **Product Catalog**: Research chemicals with CAS numbers, molecular weights, purity options, and structure images
- **Search Functionality**: Real-time search by product name or CAS number
- **Quote System**: Professional quote request system with product pre-fill
- **Legal Compliance**: GDPR-compliant Privacy Policy, Terms & Conditions, research use disclaimers
- **Company Pages**: About Us with full registration details, Contact information
- **Professional Footer**: Company registration info on every page
- **EU Focus**: Registered Croatian business serving European research institutions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, ShadCN UI components
- **Backend**: Supabase (PostgreSQL, Row Level Security)
- **Deployment**: Vercel (frontend), Supabase Cloud (backend)
- **Tools**: RDKit (Python) for chemical structure SVG generation

## Prerequisites

- Node.js 18+ and npm
- A Supabase account and project
- Python 3.7+ with RDKit (optional, for generating structure images)

## Getting Started

### 1. Clone and Install Dependencies

```bash
cd virachem-frontend
npm install
```

### 2. Configure Environment Variables

⚠️ **IMPORTANT**: This step is required before running the app!

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

To get these values:
1. Go to [supabase.com](https://supabase.com) and create a new project (if you haven't already)
2. Navigate to **Settings → API**
3. Copy the **Project URL** (e.g., `https://xxxxx.supabase.co`) and **anon public** key
4. Paste them into your `.env.local` file

💡 **Tip**: See `SETUP-VERIFICATION.md` for detailed setup instructions and troubleshooting.

### 3. Set Up Database

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Open the `database-schema.sql` file in this project
4. Copy and paste the SQL into the editor
5. Run the query to create tables and sample data

The schema creates:
- `products` table: Chemical catalog items
- `quote_requests` table: Customer quote requests
- Sample products (Aspirin, Caffeine)

### 4. Generate Chemical Structure Images (Optional)

If you want to generate structure images from SMILES strings:

```bash
# Install RDKit
pip install rdkit

# Run the generator script
python scripts/generate-images.py
```

This will create SVG files in `public/structures/`. The sample products in the database already reference these images.

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
virachem-frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage with company branding
│   │   ├── layout.tsx            # Root layout with header & footer
│   │   ├── about/page.tsx        # About Us with company details
│   │   ├── privacy/page.tsx      # GDPR-compliant Privacy Policy
│   │   ├── terms/page.tsx        # Terms & Conditions
│   │   ├── products/
│   │   │   ├── page.tsx          # Product listing with search
│   │   │   └── [id]/page.tsx     # Product detail page
│   │   └── quote/page.tsx        # Quote request form
│   ├── components/
│   │   ├── footer.tsx            # Company footer with registration
│   │   └── ui/                   # ShadCN UI components
│   └── lib/
│       └── supabase.ts           # Supabase client
├── public/
│   ├── logo.png                  # ViraChem logo
│   └── structures/               # Chemical structure SVGs
├── assets/                       # Original logo files
├── scripts/
│   └── generate-images.py        # Structure generator (RDKit)
├── database-schema.sql           # Database setup
├── UPDATE-PRODUCTS.sql           # Product update script
├── .cursorrules                  # Cursor AI project context
└── .env.local                    # Environment variables (create this)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Backend (Supabase)

Your Supabase backend is already hosted in the cloud. No additional deployment needed.

## 🎨 Customization

### Brand Colors (ViraChem Official)

Defined in `src/app/globals.css`:
```css
--color-primary: #0B1F3F        /* Navy - brand primary */
--color-accent-red: #C9364F     /* Red - CTAs */
--color-accent-gold: #E8B341    /* Gold - badges */
--color-accent-teal: #5A8A8F    /* Teal - accents */
--color-dark: #0B1F3F           /* Navy - headings */
--color-text-secondary: #798996 /* Grey - secondary text */
```

### Adding Products

1. Add product data to Supabase `products` table:
   - Use `database-schema.sql` structure
   - Include CAS number, SMILES, molecular weight, purity options
2. Generate structure images:
   - Add SMILES to `scripts/generate-images.py`
   - Run: `python3 scripts/generate-images.py`
3. Products appear automatically in catalog with search functionality

### Logo

- Located in `public/logo.png` and `assets/`
- Text-based logo: **VIRACHEM** (VIRA = navy, CHEM = grey)
- Tagline: "EDGE OF RESEARCH" in red (#C9364F)

### Database Schema

To modify the database structure, update `database-schema.sql` and run the changes in your Supabase SQL editor. Remember to update TypeScript types in your components accordingly.

## Security Notes

- The current setup has public read/insert policies for MVP purposes
- For production, implement proper authentication and row-level security (RLS)
- Never commit `.env.local` to version control (already in .gitignore)
- Use Supabase service role key only for admin operations, never in client code

## Troubleshooting

### "Missing Supabase environment variables"
- Ensure `.env.local` exists with correct values
- Restart the development server after adding environment variables

### "Error loading products"
- Verify Supabase credentials are correct
- Check that you've run the `database-schema.sql` file
- Verify RLS policies are enabled (the schema does this automatically)

### Structure images not showing
- Run `python scripts/generate-images.py` to generate images
- Verify files exist in `public/structures/`
- Check image_url values in your products table match the generated filenames

## Contributing

This is a template project. Feel free to customize and extend it for your specific needs.

## License

MIT License - feel free to use this for your own projects.

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review [Next.js documentation](https://nextjs.org/docs)
3. Review [Supabase documentation](https://supabase.com/docs)

---

Built with Next.js, Supabase, and ShadCN UI
