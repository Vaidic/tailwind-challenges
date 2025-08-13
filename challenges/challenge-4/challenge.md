# Challenge 4: Image Gallery with Lightbox 🖼️

**Difficulty:** Intermediate  
**Estimated Time:** 3-4 hours  
**Focus Areas:** Masonry Layouts, Modal Systems, Image Handling

## 📋 Challenge Overview
Build a Pinterest-style image gallery with category filtering and a full-screen lightbox modal system.

## 🎯 Requirements

### Gallery Layout
- **Masonry Grid**: Images of varying heights arranged efficiently
- **Categories**: Nature, Architecture, People, Abstract (filter buttons)
- **Hover Overlay**: Caption and photographer name appear on hover
- **Loading States**: Skeleton placeholders while images load

### Lightbox Features
- **Full-Screen Modal**: Click image to open lightbox
- **Image Navigation**: Previous/Next arrows and keyboard support
- **Image Counter**: "3 of 15" indicator
- **Close Options**: X button, ESC key, click outside
- **Zoom Functionality**: Click to zoom in/out
- **Image Information**: Title, photographer, camera settings

### Image Data Structure
```javascript
const images = [
  {
    id: 1,
    src: 'image1.jpg',
    thumbnail: 'thumb1.jpg',
    title: 'Mountain Sunset',
    photographer: 'John Doe',
    category: 'nature',
    width: 800,
    height: 1200
  }
  // ... more images
]
```

## 🛠️ Technical Challenges

### Masonry Implementation
- Use CSS Grid or flexbox for responsive masonry
- Calculate optimal column count based on screen size
- Maintain aspect ratios while fitting grid

### Modal System
- Portal-style modal that renders above all content
- Prevent body scrolling when modal open
- Smooth fade in/out transitions
- Handle browser back button

### Performance Optimizations
- Lazy load images as user scrolls
- Preload next/previous images in lightbox
- Use intersection observer for loading states
- Optimize image sizes for different viewports

## ✨ Advanced Features
- **Search Functionality**: Search by title or photographer
- **Infinite Scroll**: Load more images as user scrolls
- **Favorites System**: Heart images to save to favorites
- **Share Functionality**: Share individual images
- **Keyboard Shortcuts**: Arrow keys, spacebar, etc.

## 🎯 Success Criteria
- Smooth masonry layout that doesn't jump
- Fast-loading lightbox with no flickering
- Intuitive navigation and controls
- Mobile-friendly touch interactions
- Accessible keyboard navigation
