

## Plan: Make Wistia Video Controls Disappear Faster

### The Issue
The Wistia player's playbar (green navigation/controls bar) at the bottom of the video stays visible too long during fullscreen mode before auto-hiding.

### Available Solutions

#### Option 1: Switch to Wistia JavaScript API (Recommended)
Switch from the iframe embed to Wistia's standard inline embed, which gives access to the JavaScript Player API for finer control over player behavior.

**What changes:**
- Replace the iframe with Wistia's native `<wistia-player>` web component
- Load Wistia's player script (`fast.wistia.com/player.js`)
- Use CSS to style the player controls and potentially hide them faster

**Benefits:**
- Access to the full Wistia JavaScript API
- Can programmatically control when controls appear/disappear
- Better integration with React lifecycle

---

#### Option 2: Minimize Playbar Visibility
Add Wistia parameters to reduce the playbar footprint:

**Parameters to add:**
- `playbar=false` - Removes the playbar entirely (users would need to click to pause/play)
- `smallPlayButton=true` - Uses a smaller play button
- `settingsControl=false` - Hides settings gear
- `volumeControl=false` - Hides volume control

**Tradeoff:** Removes useful controls, which may hurt user experience.

---

#### Option 3: Use Popover Embed Style
Use `popoverContent=html5` or `popoverContent=link` for a popover-style fullscreen that has different control behavior.

---

### Recommended Approach: Option 1

Switch to the Wistia JavaScript API embed for better control. This involves:

1. **Update `src/components/VideoEmbed.tsx`:**
   - Replace the iframe with Wistia's native `<wistia-player>` web component
   - Add script loading for the Wistia player
   - Configure player options including `controlsVisibleOnLoad: false`

2. **Add CSS styling** to potentially customize the playbar opacity transition timing

### Technical Details

**Current iframe approach (line 212):**
```
https://fast.wistia.net/embed/iframe/${videoId}?seo=true&videoFoam=true&controlsVisibleOnLoad=false
```

**New web component approach:**
```jsx
<wistia-player 
  media-id={videoId}
  aspect="1.7777777777777777"
  controlsVisibleOnLoad="false"
/>
```

**Required scripts (loaded dynamically):**
```html
<script src="https://fast.wistia.com/player.js" async></script>
<script src="https://fast.wistia.com/embed/${videoId}.js" async type="module"></script>
```

### Important Note
Wistia's auto-hide timing is controlled by their player internally. Even with the JavaScript API, there's no official `autoHideDelay` parameter. The best we can do is:
1. Start with controls hidden (`controlsVisibleOnLoad: false`) ✅ Already done
2. Use the native web component for slightly better default behavior
3. Consider removing some controls to reduce visual clutter

