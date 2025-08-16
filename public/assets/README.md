# Assets Folder

This folder contains the images and videos used in the photo gallery component.

## Required Images:

1. **3.jpg** - Young man with climbing gear on mountain ledge
2. **1 (2).jpg** - Man in winter gear with snow-capped mountains  
3. **yellow-flowers.jpg** - Man with climbing gear surrounded by yellow flowers
4. **2 (2).jpg** - Friends around black taxi on city street
5. **5.jpg** - Climber on rocky ledge overlooking deep valley

## Required Videos:

1. **backdrop.mp4** - Primary background video
2. **backdrop-2.mp4** - Secondary background video
3. **backdrop-3.mp4** - Tertiary background video
4. **backdrop-4.mp4** - Quaternary background video

## Video Specifications:

### **Format & Quality:**
- **Format**: MP4 (.mp4)
- **Codec**: H.264 for maximum compatibility
- **Quality**: High quality (1080p or 4K recommended)
- **Bitrate**: 5-15 Mbps for optimal quality/size balance

### **Aspect Ratio & Dimensions:**
- **Aspect Ratio**: 16:9 (landscape) or 21:9 (ultrawide)
- **Recommended Resolutions**:
  - 1920x1080 (Full HD)
  - 2560x1440 (2K)
  - 3840x2160 (4K)
  - 2560x1080 (Ultrawide)

### **Content Guidelines:**
- **Duration**: 10-30 seconds per video (for smooth cycling)
- **Content**: Abstract, ambient, or nature scenes that work as backgrounds
- **Movement**: Slow, subtle movements work best
- **Colors**: Neutral or complementary to your color scheme

### **Technical Requirements:**
- **File Size**: Keep under 50MB per video for fast loading
- **Frame Rate**: 24fps, 30fps, or 60fps
- **Audio**: No audio (muted) - videos play silently
- **Looping**: Videos will cycle automatically when they end

## Image Specifications:
- **Format**: JPEG (.jpg)
- **Recommended size**: 800x800px or larger
- **Quality**: High quality for best visual experience
- **Aspect ratio**: Square (1:1) recommended for consistent gallery layout

## Notes:
- These assets are referenced in `components/ui/gallery.tsx`
- Videos will automatically cycle through in sequence
- The gallery component expects these files to be available at `/assets/[filename]`
- Make sure all videos are properly optimized for web use
- Test videos in different browsers for compatibility
