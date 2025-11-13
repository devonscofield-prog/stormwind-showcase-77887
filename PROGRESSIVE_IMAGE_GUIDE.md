# Progressive Image Loading Guide

## Overview

Progressive image loading with blur-up placeholders (LQIP - Low Quality Image Placeholder) provides a better user experience by:
- Showing content immediately (no blank spaces)
- Creating smooth, professional transitions
- Reducing perceived loading time
- Improving Core Web Vitals scores

## How It Works

1. **Instant Display**: Tiny blurred placeholder (2-3KB) loads immediately
2. **Background Loading**: Full-resolution image loads asynchronously
3. **Smooth Transition**: Blur fades out when full image is ready
4. **Fallback Handling**: Gracefully handles loading errors

## Creating Placeholders

### Method 1: Manual Generation (Sharp CLI)

```bash
# Install Sharp
npm install -g sharp-cli

# Generate 20x20 placeholder
sharp -i image.jpg -o image-placeholder.jpg --resize 20 20 --jpeg-quality 10

# Batch process
for file in *.jpg; do
  sharp -i "$file" -o "${file%.jpg}-placeholder.jpg" --resize 20 --jpeg-quality 10
done
```

### Method 2: Online Tools

1. **Squoosh** (https://squoosh.app/)
   - Upload image
   - Resize to 20x20
   - Set quality to 10%
   - Download as `[name]-placeholder.jpg`

2. **LQIP Generator** (https://lqip-generator.vercel.app/)
   - Automatically generates placeholders
   - Multiple format options

### Method 3: Runtime Generation

Use the provided utility functions:

```typescript
import { generatePlaceholder } from "@/utils/generatePlaceholder";

// Generate from existing image
const placeholder = await generatePlaceholder(imageUrl);

// Or use solid color
const colorPlaceholder = generateColorPlaceholder(800, 600, '#e5e7eb');

// Or gradient
const gradientPlaceholder = generateGradientPlaceholder(800, 600);
```

## Usage Examples

### Basic Usage

```tsx
import { ProgressiveImage } from "@/components/ProgressiveImage";
import heroImage from "@/assets/hero.jpg";
import heroPlaceholder from "@/assets/hero-placeholder.jpg";

<ProgressiveImage 
  src={heroImage}
  placeholderSrc={heroPlaceholder}
  alt="Hero Banner"
  className="w-full h-64 object-cover rounded-lg"
/>
```

### With WebP Support

```tsx
import heroImage from "@/assets/hero.jpg";
import heroWebp from "@/assets/hero.webp";
import heroPlaceholder from "@/assets/hero-placeholder.jpg";

<ProgressiveImage 
  src={heroImage}
  webpSrc={heroWebp}
  placeholderSrc={heroPlaceholder}
  alt="Hero Banner"
  className="w-full h-64 object-cover"
  blurAmount={25}
  transitionDuration={700}
/>
```

### With Responsive Images

```tsx
<ProgressiveImage 
  src={heroImage}
  placeholderSrc={heroPlaceholder}
  srcSet="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 80vw"
  alt="Hero Banner"
  className="w-full h-auto"
/>
```

### Without Placeholder (Color Only)

```tsx
// Component will use the full image with blur effect during load
<ProgressiveImage 
  src={heroImage}
  alt="Hero Banner"
  className="w-full h-64 object-cover"
  blurAmount={30}
/>
```

### Custom Blur and Transition

```tsx
<ProgressiveImage 
  src={heroImage}
  placeholderSrc={heroPlaceholder}
  alt="Hero Banner"
  blurAmount={40}           // More blur (default: 20)
  transitionDuration={1000} // Slower transition (default: 500ms)
  className="w-full rounded-xl"
/>
```

## Best Practices

### Placeholder Size
- **Recommended**: 20x20 pixels (2-3KB)
- **Maximum**: 40x40 pixels (5-8KB)
- Keep file size under 5KB for best performance

### Blur Amount
- **Small images**: 10-15px
- **Medium images**: 20px (default)
- **Large images**: 25-40px

### Transition Duration
- **Fast**: 300ms - Good for small images
- **Standard**: 500ms (default) - Most cases
- **Smooth**: 700-1000ms - Large hero images

### When to Use

✅ **Use progressive loading for:**
- Hero images and banners
- Featured images in cards
- Gallery images
- Blog post covers
- Product images

❌ **Skip progressive loading for:**
- Icons and small UI elements
- Images under 50x50px
- SVG graphics
- Images in carousels (use skeleton instead)

## Placeholder Generation Script

Create `scripts/generate-placeholders.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'src/assets';
const placeholderSize = 20;
const placeholderQuality = 10;

async function generatePlaceholders() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;
    if (file.includes('-placeholder')) continue;
    
    const inputPath = path.join(inputDir, file);
    const name = path.parse(file).name;
    const ext = path.parse(file).ext;
    const outputPath = path.join(inputDir, `${name}-placeholder${ext}`);
    
    try {
      await sharp(inputPath)
        .resize(placeholderSize, placeholderSize, { fit: 'cover' })
        .jpeg({ quality: placeholderQuality })
        .toFile(outputPath);
      
      console.log(`✓ Generated placeholder for ${file}`);
    } catch (error) {
      console.error(`✗ Failed to generate placeholder for ${file}:`, error);
    }
  }
}

generatePlaceholders().then(() => {
  console.log('\n✓ All placeholders generated!');
});
```

Run with:
```bash
npm install sharp
node scripts/generate-placeholders.js
```

## Component Options

### ProgressiveImage Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Full-resolution image URL |
| `placeholderSrc` | string | optional | Low-quality placeholder image |
| `alt` | string | required | Alt text for accessibility |
| `webpSrc` | string | optional | WebP version of image |
| `srcSet` | string | optional | Responsive image sources |
| `sizes` | string | `"100vw"` | Size hints for responsive images |
| `blurAmount` | number | `20` | Blur intensity in pixels |
| `transitionDuration` | number | `500` | Transition time in milliseconds |
| `loading` | string | `"lazy"` | Native lazy loading attribute |
| `className` | string | optional | CSS classes |

## Performance Tips

1. **Inline Critical Placeholders**: For above-the-fold images, inline base64 placeholders
2. **Preload Hero Images**: Use `<link rel="preload">` for critical images
3. **Use WebP**: Combine with WebP format for maximum optimization
4. **Lazy Load Below Fold**: Use `loading="lazy"` for images below the fold
5. **Optimize Placeholder Size**: Keep under 5KB

## Examples in Context

### Card Grid

```tsx
<div className="grid grid-cols-3 gap-4">
  {courses.map(course => (
    <Card key={course.id}>
      <ProgressiveImage 
        src={course.image}
        placeholderSrc={course.placeholder}
        alt={course.title}
        className="w-full h-48 object-cover"
        blurAmount={20}
      />
      <CardContent>
        <h3>{course.title}</h3>
      </CardContent>
    </Card>
  ))}
</div>
```

### Hero Section

```tsx
<div className="relative h-screen">
  <ProgressiveImage 
    src={heroImage}
    placeholderSrc={heroPlaceholder}
    srcSet="hero-800.jpg 800w, hero-1200.jpg 1200w, hero-1920.jpg 1920w"
    sizes="100vw"
    alt="Welcome"
    className="absolute inset-0 w-full h-full object-cover"
    blurAmount={30}
    transitionDuration={800}
  />
  <div className="relative z-10">
    <h1>Welcome</h1>
  </div>
</div>
```

## Browser Support

- Modern browsers: Full support
- Safari: Full support (CSS blur)
- IE11: Graceful degradation (no blur, shows image)

## Measuring Impact

Check performance improvements with:
- Chrome DevTools Lighthouse
- WebPageTest.org
- Google PageSpeed Insights

Expected improvements:
- 20-30% better perceived performance
- Improved Cumulative Layout Shift (CLS)
- Better First Contentful Paint (FCP)
