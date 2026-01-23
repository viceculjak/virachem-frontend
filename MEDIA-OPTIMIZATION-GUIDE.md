# Media Optimization Guide for ViraChem Homepage

## ✅ Code Changes Complete

The homepage code has been updated to use:
- **Next.js Image component** for the left panel (automatic optimization)
- **Optimized video attributes** for the right panel (better loading)

---

## 🔧 Required: Optimize Your Media Files

You now need to optimize the actual image and video files. Follow these steps:

---

## 📸 Image Optimization

### Current File
`/home/user/virachem-frontend/public/hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.png`

### Option 1: Online Tool (Easiest)

1. Go to **[Squoosh.app](https://squoosh.app/)**
2. Upload your image: `hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.png`
3. Settings:
   - **Format:** WebP or MozJPEG
   - **Quality:** 85
   - **Resize:** Max width 2000px (if larger)
4. **Download** the optimized version
5. **Replace** the original file in `/public/`

**Target:** < 300 KB

### Option 2: Command Line (Better Quality)

If you have ImageMagick installed:

```bash
cd /home/user/virachem-frontend/public/

# Convert to WebP (best compression)
convert hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.png \
  -resize 2000x2000\> \
  -quality 85 \
  hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.webp

# Or convert to optimized JPG
convert hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.png \
  -resize 2000x2000\> \
  -quality 85 \
  -sampling-factor 4:2:0 \
  hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.jpg
```

Then update the code to use `.webp` or `.jpg` extension.

---

## 🎥 Video Optimization

### Current File
`/home/user/virachem-frontend/public/signal-2026-01-17-162407.mp4`

### Install FFmpeg First

```bash
# Linux (Debian/Ubuntu)
sudo apt-get update && sudo apt-get install ffmpeg

# Linux (Fedora)
sudo dnf install ffmpeg

# macOS
brew install ffmpeg

# Verify installation
ffmpeg -version
```

### Optimize the Video

```bash
cd /home/user/virachem-frontend/public/

# Balanced optimization (recommended)
ffmpeg -i signal-2026-01-17-162407.mp4 \
  -vf "scale=1920:-2" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -movflags +faststart \
  -an \
  signal-2026-01-17-162407-optimized.mp4

# Aggressive optimization (smaller file, still good quality)
ffmpeg -i signal-2026-01-17-162407.mp4 \
  -vf "scale=1280:-2" \
  -c:v libx264 \
  -preset slow \
  -crf 32 \
  -movflags +faststart \
  -an \
  signal-2026-01-17-162407-web.mp4
```

**Parameters explained:**
- `scale=1920:-2` → Resize to 1920px width (Full HD), maintain aspect ratio
- `-crf 28` → Quality level (lower = better quality, higher = smaller file)
- `-preset slow` → Better compression (takes longer to encode)
- `-movflags +faststart` → **Critical!** Enables streaming (loads progressively)
- `-an` → Remove audio track (not needed for background video)

**Target:** 2-5 MB for a 10-second loop

### Replace the Original

```bash
# After optimization, replace original
mv signal-2026-01-17-162407-optimized.mp4 signal-2026-01-17-162407.mp4

# Or update code to use the new filename
```

### (Optional) Create Video Poster Image

Extract a frame for the `poster` attribute:

```bash
ffmpeg -i signal-2026-01-17-162407.mp4 \
  -ss 00:00:01 \
  -vframes 1 \
  -q:v 2 \
  video-poster.jpg
```

Then update the code to add `poster="/video-poster.jpg"` to the `<video>` tag.

---

## 📊 Check File Sizes

Before optimization:
```bash
ls -lh hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.png
ls -lh signal-2026-01-17-162407.mp4
```

After optimization:
```bash
ls -lh hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.webp
ls -lh signal-2026-01-17-162407-optimized.mp4
```

**Goal:**
- Image: < 300 KB
- Video: < 5 MB
- **Total:** < 5.5 MB (down from potentially 10-50 MB)

---

## 🧪 Test Performance

After optimization, test on slow connections:

**Chrome DevTools:**
1. Open DevTools (F12)
2. Network tab
3. Throttling → "Slow 3G"
4. Reload page
5. Check load times

**Target Load Time:** < 3 seconds on Slow 3G

---

## 🚀 Expected Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Image Size | ~2-5 MB | ~200-400 KB | **80-90%** |
| Video Size | ~10-50 MB | ~2-5 MB | **70-90%** |
| Page Load | 5-10s | <2s | **~75% faster** |
| Lighthouse Score | ~60-70 | ~90-95 | **+30 points** |

---

## ⚠️ Important Notes

1. **Keep backups** of original files before optimization
2. **Test on mobile** after changes (where performance matters most)
3. **Next.js Image will auto-optimize** the PNG even without manual conversion, but manual optimization is still recommended for best results
4. The `preload="auto"` on video helps, but file size reduction is most important

---

## 🔄 Update Code (if changing filenames)

If you rename files after optimization, update `src/app/page.tsx`:

```tsx
// For image (if you converted to WebP)
<Image 
  src="/hf_20260121_212606_f12576ea-33c1-4ec6-9a39-3d22a3acc736.webp"
  // ...rest of props
/>

// For video (if you renamed)
<source src="/signal-2026-01-17-162407-web.mp4" type="video/mp4" />

// Add poster if created
<video poster="/video-poster.jpg" ...>
```

---

## ✅ Verification Checklist

After optimization:

- [ ] Image file < 500 KB
- [ ] Video file < 5 MB  
- [ ] Homepage loads in < 3s on Slow 3G
- [ ] No layout shift when image loads
- [ ] Video starts playing smoothly
- [ ] Text overlays are readable on both panels
- [ ] Mobile performance is good

---

**Need help?** If FFmpeg commands fail, share the error and I can help debug!
