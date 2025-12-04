# Virachem - Research Chemical Catalog

A modern B2B web application for browsing and requesting quotes on high-purity research chemicals. Built with Next.js 14, Supabase, and ShadCN UI with a clean urban design aesthetic.

## Features

- **Product Catalog**: Browse research chemicals with detailed information including CAS numbers, molecular weights, and chemical structures
- **Quote System**: Request custom quotes for specific products with flexible quantities and purity options
- **Modern UI**: Beautiful, responsive design using ShadCN UI components with Urbanist font
- **Real-time Data**: Powered by Supabase for real-time product data and quote management
- **Structure Visualization**: SVG chemical structure images generated from SMILES strings

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, ShadCN UI components
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Deployment**: Vercel (frontend), Supabase Cloud (backend)
- **Tools**: RDKit (Python) for structure generation

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

## Project Structure

```
virachem-frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── products/
│   │   │   ├── page.tsx          # Product listing
│   │   │   └── [id]/page.tsx     # Product detail
│   │   └── quote/
│   │       └── page.tsx          # Quote request form
│   ├── components/
│   │   └── ui/                   # ShadCN UI components
│   └── lib/
│       └── supabase.ts           # Supabase client
├── public/
│   └── structures/               # Chemical structure SVGs
├── scripts/
│   └── generate-images.py        # Structure generator
├── database-schema.sql           # Database setup
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

## Customization

### Adding Products

1. Add product data to your Supabase `products` table via the dashboard
2. (Optional) Add SMILES string to `scripts/generate-images.py` and regenerate images
3. Products will automatically appear in the catalog

### Styling

- Brand colors defined in `src/app/globals.css`:
  - Primary: `#FF4215` (orange-red)
  - Dark: `#531003` (dark brown)
  - Background: `#FFFAF7` (off-white)
- Font: Urbanist (Google Fonts)
- Modify these in the globals.css file to match your brand

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
