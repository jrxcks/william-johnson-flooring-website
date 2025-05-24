# Favicon Generation Instructions for William Johnson Flooring

## Important: Create a Square Favicon Design First!

Your company logo (`/public/images/logos/logo.svg`) is designed for branding and likely has a rectangular aspect ratio. For favicons, you need a **square design** that works well at tiny sizes (16x16px).

### Favicon Design Tips:
- **Keep it simple** - complex details disappear at small sizes
- **Use bold shapes** - thin lines become invisible
- **Consider just an icon** - maybe just the "W" or "J" from William Johnson, or a flooring-related symbol
- **High contrast** - ensure it's visible on both light and dark backgrounds
- **Square format** - 1:1 aspect ratio

## Required Favicon Files:

Once you have your square favicon design, create these files:

### 1. Modern Favicons:
- `favicon.svg` (SVG - scalable, best quality) ⭐ **Primary favicon**
- `favicon-32x32.png` (32x32 PNG - fallback)
- `favicon-16x16.png` (16x16 PNG - fallback)

### 2. Apple Touch Icons:
- `apple-touch-icon.png` (180x180 PNG)

### 3. Android Chrome Icons:
- `android-chrome-192x192.png` (192x192 PNG)
- `android-chrome-512x512.png` (512x512 PNG)

## How to Create Your Favicon:

### Step 1: Design Your Square Favicon
1. Create a square design (e.g., 512x512px) in:
   - Figma, Illustrator, Canva, or GIMP
   - Keep it simple and bold
   - Test how it looks when scaled down to 16x16px

### Step 2: Generate the Files
**Option 1: Online Generator (Recommended)**
1. Go to https://realfavicongenerator.net/
2. Upload your square favicon design
3. Download all generated files
4. Place them in `/public/` directory

**Option 2: Manual Export**
- Export your design as SVG for `favicon.svg`
- Export as PNG files for the various sizes listed above

## Alternative Simple Approach:
You could use just the PNG files and skip the SVG if you prefer:
- Start with a 512x512px PNG design
- Use an online tool to generate all sizes
- Remove the SVG reference from the code

## Current Status:
✅ Metadata configuration - Updated in layout.tsx
✅ site.webmanifest - Created  
⏳ Square favicon design - Need to create
⏳ Favicon files - Need to generate from your design

The old `favicon.ico` approach is now replaced with modern PNG/SVG files! 