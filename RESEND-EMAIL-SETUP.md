# Resend Email Setup Guide

This guide will walk you through setting up email notifications for quote requests using Resend.

---

## 📋 What You'll Need

- Resend account (free tier: 3,000 emails/month, 100/day)
- Domain verification (or use Resend test email for development)
- 15 minutes of your time

---

## 🚀 Step-by-Step Setup

### **Step 1: Create Resend Account (2 minutes)**

1. Go to [https://resend.com/signup](https://resend.com/signup)
2. Sign up with your email
3. Verify your email address

---

### **Step 2: Get Your API Key (1 minute)**

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Name it: `ViraChem Production`
4. Copy the API key (starts with `re_...`)
5. **IMPORTANT**: Save this key somewhere safe - you can't see it again!

---

### **Step 3: Verify Your Domain (5 minutes)**

**Option A: For Production (Recommended)**

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter: `virachemical.com`
4. Resend will show you DNS records to add
5. Add these DNS records in your domain registrar:
   - **SPF Record** (TXT)
   - **DKIM Record** (TXT)
   - **DMARC Record** (TXT)
6. Wait 5-10 minutes for DNS propagation
7. Click **Verify** in Resend dashboard

**Option B: For Testing (Instant)**

Use Resend's test email: `onboarding@resend.dev`

**Note**: With test email, you can send emails, but the "from" address will show as `onboarding@resend.dev` instead of `quotes@virachemical.com`

---

### **Step 4: Add API Key to Your Local Environment (30 seconds)**

1. Open your `.env.local` file in the project root
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
3. Replace `re_your_actual_key_here` with your actual API key from Step 2
4. Save the file

**Your `.env.local` should now look like this:**
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
RESEND_API_KEY=re_abc123xyz...
```

---

### **Step 5: Add API Key to Vercel (2 minutes)**

1. Go to [https://vercel.com](https://vercel.com) and open your project
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (from Step 2)
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**

---

### **Step 6: Test Locally (2 minutes)**

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000/quote](http://localhost:3000/quote)

3. Fill out and submit the quote form

4. Check your inbox at `quotes@virachemical.com`
   - **Note**: If using test email, check the Resend dashboard → **Emails** to see sent emails

---

### **Step 7: Deploy to Vercel (1 minute)**

```bash
git add .
git commit -m "Add Resend email notifications for quotes"
git push origin main
```

Vercel will automatically deploy your changes.

---

## ✅ What Happens Now

When someone submits a quote request:

1. **Form Submission** → User fills out quote form on your website
2. **API Call** → Next.js calls `/api/quote` endpoint (on Vercel)
3. **Database Save** → Quote is saved to Supabase `quote_requests` table
4. **Email Sent** → Resend sends formatted email to `quotes@virachemical.com`
5. **User Confirmation** → User sees success message with toast notification

---

## 📧 Email Preview

You'll receive emails that look like this:

**Subject:** `New Quote Request - Dr. Jane Smith (University Research Lab)`

**From:** `ViraChem Quotes <quotes@virachemical.com>`

**Reply-To:** Customer's email (so you can hit reply directly)

**Body:**
- 🧪 New Quote Request badge
- Contact information (name, email, institution)
- Product information (if quote is for specific product)
- Order details (quantity, vial size, purity)
- Formulation requirements (if provided)
- Additional comments (if provided)
- Professional ViraChem footer with company details

---

## 🔧 Troubleshooting

### **Email not arriving:**

1. **Check Resend Dashboard** → Go to **Emails** tab to see if email was sent
2. **Check Spam Folder** → Emails might be in spam (especially with test email)
3. **Verify Domain** → If using production domain, ensure DNS records are verified
4. **Check API Key** → Ensure `RESEND_API_KEY` is set correctly in Vercel
5. **Check Logs** → In Vercel, go to **Deployments** → Click latest deployment → **Functions** tab → Check `/api/quote` logs

### **"Failed to submit quote request" error:**

1. **Check Browser Console** → Open DevTools → Console tab for error details
2. **Check Vercel Logs** → Go to Vercel dashboard → Your project → **Functions** tab
3. **Verify Environment Variable** → Ensure `RESEND_API_KEY` is set in Vercel settings

### **Email sends but quote not saved to database:**

1. **Check Supabase Credentials** → Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. **Check Database Policies** → Ensure `quote_requests` table has INSERT policy enabled
3. **Check Vercel Logs** → Look for database error messages

---

## 💰 Pricing

**Resend Free Tier:**
- 3,000 emails/month
- 100 emails/day
- Unlimited API keys
- Email support

**Resend Pro ($20/month):**
- 50,000 emails/month
- Unlimited daily sending
- Priority support
- Custom domains: unlimited

For most startups, the **free tier is more than enough**.

---

## 🔒 Security Notes

- ✅ **Never commit `.env.local`** - It's already in `.gitignore`
- ✅ **Keep API keys secret** - Don't share them publicly
- ✅ **Use environment variables** - Never hardcode API keys in code
- ✅ **Resend API keys are server-side only** - They're not exposed to the browser

---

## 📞 Support

**Resend Issues:**
- Email: support@resend.com
- Docs: https://resend.com/docs

**ViraChem Issues:**
- Check browser console for frontend errors
- Check Vercel function logs for backend errors
- Check Supabase logs for database errors

---

## 🎉 You're Done!

Your quote system is now fully set up with professional email notifications. Every quote request will:

1. ✅ Be saved to your Supabase database
2. ✅ Send an email notification to `quotes@virachemical.com`
3. ✅ Show a success message to the customer
4. ✅ Be tracked for follow-up

**Next Steps:**
- Test the quote form thoroughly
- Set up email filters/labels in your inbox
- Monitor Resend dashboard for email delivery stats
- Consider setting up automated quote responses

---

**Last Updated**: December 4, 2025
