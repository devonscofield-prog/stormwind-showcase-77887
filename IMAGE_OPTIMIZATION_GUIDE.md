# Image Optimization Guide

## Converting Images to WebP Format

To optimize your images for better performance, you need to convert existing PNG/JPG files to WebP format and create multiple sizes for responsive loading.

### Recommended Tools

#### 1. **Squoosh (Online Tool)**
- Visit: https://squoosh.app/
- Drag and drop your images
- Select WebP format
- Adjust quality (80-85% recommended)
- Download optimized images

#### 2. **Sharp (Node.js CLI)**
Install globally:
```bash
npm install -g sharp-cli
```

Convert single image:
```bash
sharp -i input.jpg -o output.webp --webp
```

Batch convert all images in a directory:
```bash
sharp -i src/assets/*.{jpg,png} -o src/assets/ --webp
```

Create multiple sizes:
```bash
# Create 400px, 800px, and 1200px wide versions
sharp -i input.jpg -o output-400.webp --resize 400 --webp
sharp -i input.jpg -o output-800.webp --resize 800 --webp
sharp -i input.jpg -o output-1200.webp --resize 1200 --webp
```

#### 3. **ImageMagick (Command Line)**
Install: https://imagemagick.org/

Convert to WebP:
```bash
convert input.jpg -quality 85 output.webp
```

Batch convert:
```bash
for file in *.jpg *.png; do
  convert "$file" -quality 85 "${file%.*}.webp"
done
```

#### 4. **Vite Plugin (Automated)**
Add to your project for automatic optimization during build:

```bash
npm install vite-plugin-imagemin -D
```

Update `vite.config.ts`:
```typescript
import imagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: { plugins: [{ name: 'removeViewBox', active: false }] },
      webp: { quality: 85 }
    })
  ]
};
```

## Image Organization

### Recommended Structure
```
src/assets/
├── original/           # Keep originals here
├── images/
│   ├── logo.png       # Fallback format
│   ├── logo.webp      # WebP version
│   ├── hero-400.webp  # Small screens
│   ├── hero-800.webp  # Medium screens
│   ├── hero-1200.webp # Large screens
│   └── hero-1920.webp # Extra large
└── avatars/
    ├── instructor-1.png
    └── instructor-1.webp
```

## Responsive Image Sizes

### Recommended Breakpoints
- **Small**: 400px - Mobile devices
- **Medium**: 800px - Tablets
- **Large**: 1200px - Desktops
- **XL**: 1920px - Large displays

### Size Guidelines by Use Case

#### Hero Images (Full Width)
```
Sizes: 400w, 800w, 1200w, 1920w
Quality: 75-80%
```

#### Card Images (Grid)
```
Sizes: 300w, 600w, 900w
Quality: 80-85%
```

#### Avatar/Profile Images
```
Sizes: 64w, 128w, 256w
Quality: 85-90%
```

#### Thumbnails
```
Sizes: 150w, 300w
Quality: 85%
```

## Usage Examples

### Basic WebP with Fallback
```tsx
import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";

<OptimizedImage 
  src={logo}
  webpSrc={logoWebp}
  alt="Company Logo"
  width={200}
  height={50}
  loading="lazy"
/>
```

### Responsive with Multiple Sizes
```tsx
<OptimizedImage 
  src={heroImage}
  webpSrc={heroImageWebp}
  alt="Hero Banner"
  srcSet="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w, hero-1920.webp 1920w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  loading="lazy"
  className="w-full h-auto"
/>
```

### Avatar with Pixel Density
```tsx
<OptimizedImage 
  src={avatar}
  webpSrc={avatarWebp}
  srcSet="avatar-64.webp 1x, avatar-128.webp 2x, avatar-256.webp 3x"
  alt="User Avatar"
  width={64}
  height={64}
  loading="lazy"
  className="rounded-full"
/>
```

## Performance Tips

1. **Lazy Loading**: Already implemented with `loading="lazy"` on all images
2. **WebP Quality**: Use 80-85% quality for good balance
3. **Appropriate Sizing**: Don't serve images larger than they'll display
4. **Compression**: WebP provides 25-35% better compression than JPEG
5. **Browser Support**: WebP is supported by 95%+ of browsers (picture element provides fallback)

## Batch Conversion Script

Create `scripts/optimize-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'src/assets/original';
const outputDir = 'src/assets';
const sizes = [400, 800, 1200, 1920];

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    const name = path.parse(file).name;
    
    sizes.forEach(size => {
      sharp(path.join(inputDir, file))
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${name}-${size}.webp`));
    });
  }
});
```

Run with: `node scripts/optimize-images.js`

## Next Steps

1. Back up original images to `src/assets/original/`
2. Convert images using your preferred tool
3. Import both formats in your components
4. Use `OptimizedImage` component with both src and webpSrc props
5. Add srcset for responsive loading on large images

## Monitoring

Track loading performance with:
- Chrome DevTools Network tab
- Lighthouse performance audit
- WebPageTest.org

Target metrics:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Total image weight: < 500KB for initial page load
