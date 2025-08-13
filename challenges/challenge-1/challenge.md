# Challenge 1: Quote Cards & Bento Grid 🎨

**Difficulty:** Intermediate  
**Estimated Time:** 3-4 hours  
**Focus Areas:** Grid Layouts, Animations, Interactive Transformations

## 📋 Challenge Overview

Create an interactive quote cards system that transforms from a Pinterest-style bento grid into a swipeable carousel. This challenge will test your understanding of complex layouts, state management, and smooth animations.

## 🎯 Requirements

### Phase 1: Quote Cards
Create individual quote cards with the following features:

#### Card Structure
- **Quote Text**: Prominent typography with proper contrast
- **Author Information**: Name and optional title/source
- **Background**: Choose between:
  - Gradient backgrounds (minimum 3 different gradients)
  - Background images with overlay for text readability
- **Footer Section** containing:
  - Like button with count (heart icon)
  - Share button (share icon)
  - Tags (2-4 tags per card)

#### Visual Requirements
- **Shadow**: Subtle drop shadow that increases on hover
- **Hover Animation**: Scale slightly (1.02-1.05) with smooth transition
- **Typography**: Use different font weights and sizes for hierarchy
- **Contrast**: Ensure text is readable on all backgrounds

### Phase 2: Bento Grid Layout
Implement a Pinterest-style masonry grid:

#### Grid Specifications
- **Desktop**: 4 columns with variable heights
- **Tablet**: 3 columns
- **Mobile**: 2 columns
- **Card Sizes**: Mix of regular (1x1) and tall (1x2) cards
- **Gap**: Consistent 1rem spacing between cards
- **Auto-placement**: Cards should fill available space efficiently

#### Responsive Behavior
- Smooth transitions when screen size changes
- Maintain aspect ratios across breakpoints
- Cards should not overlap or create awkward gaps

### Phase 3: Carousel Transformation
When any card is clicked, transform the entire grid:

#### Transformation Sequence
1. **Grid Collapse**: All cards animate to center of screen
2. **Stack Formation**: Cards stack on top of each other (z-index layering)
3. **Carousel Mode**: Enable swipe/drag functionality
4. **Navigation**: Add previous/next buttons and dots indicator

#### Interaction Features
- **Swipe Support**: Touch/mouse drag to navigate
- **Keyboard Navigation**: Arrow keys support
- **Auto-play**: Optional 5-second auto-advance
- **Return to Grid**: Escape key or close button returns to bento layout

## 🛠️ Technical Specifications

### HTML Structure
```html
<div class="quote-container">
  <div class="grid-view" id="gridView">
    <!-- Quote cards go here -->
  </div>
  <div class="carousel-view hidden" id="carouselView">
    <!-- Carousel structure -->
  </div>
</div>
```

### Required Interactions
1. **Card Click**: Triggers grid-to-carousel transformation
2. **Like Button**: Toggle state with animation
3. **Share Button**: Show share options modal
4. **Tag Click**: Filter cards by tag (bonus feature)
5. **Carousel Navigation**: Swipe, click arrows, or keyboard

### Animation Requirements
- **Grid to Carousel**: 800ms ease-in-out transition
- **Hover Effects**: 200ms transitions
- **Like Button**: Bounce animation when clicked
- **Card Entrance**: Stagger animation when page loads

## 🎨 Design Guidelines

### Color Palette Options
- **Option 1**: Blue gradients (`from-blue-400 to-purple-600`)
- **Option 2**: Warm gradients (`from-orange-400 to-red-600`)
- **Option 3**: Nature gradients (`from-green-400 to-teal-600`)
- **Option 4**: Sunset gradients (`from-pink-400 to-yellow-600`)

### Typography Scale
- **Quote Text**: `text-lg md:text-xl font-medium`
- **Author**: `text-sm font-semibold`
- **Tags**: `text-xs font-medium`
- **Buttons**: `text-sm`

### Icons
Use Lucide React icons or similar:
- Heart (regular/filled for likes)
- Share-2 (sharing)
- ChevronLeft/ChevronRight (carousel navigation)
- X (close carousel)

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - 2 column grid
- **Tablet**: `640px - 1024px` - 3 column grid  
- **Desktop**: `> 1024px` - 4 column grid
- **Large**: `> 1280px` - Consider 5 columns

## ✨ Bonus Features

1. **Tag Filtering**: Click tags to filter cards
2. **Search Functionality**: Search quotes by content or author
3. **Favorite System**: Save favorite quotes locally
4. **Theme Switching**: Light/dark mode support
5. **Export Feature**: Share individual cards as images
6. **Infinite Scroll**: Load more quotes dynamically

## 🧪 Testing Checklist

### Functionality Tests
- [ ] All cards display correctly in grid
- [ ] Hover animations work smoothly
- [ ] Grid transforms to carousel on card click
- [ ] Carousel navigation works (swipe, arrows, keyboard)
- [ ] Return to grid functionality works
- [ ] Like buttons toggle properly
- [ ] Share buttons show options

### Responsive Tests
- [ ] Grid adjusts columns at each breakpoint
- [ ] Cards maintain readability on mobile
- [ ] Touch interactions work on mobile devices
- [ ] Carousel is usable on touch devices

### Performance Tests
- [ ] Smooth animations (60fps target)
- [ ] No layout shift during transitions
- [ ] Images load efficiently
- [ ] Minimal JavaScript execution time

## 📚 Learning Outcomes

After completing this challenge, you'll have mastered:
- Complex CSS Grid layouts with Tailwind
- Transform and transition utilities
- State-based styling and animations
- Touch/swipe interaction handling
- Responsive design patterns
- Advanced positioning techniques

## 🎯 Success Criteria

**Minimum Viable Product:**
- ✅ Quote cards with all required elements
- ✅ Functional bento grid layout
- ✅ Basic grid-to-carousel transformation
- ✅ Responsive design

**Excellent Implementation:**
- ✅ All MVP features plus smooth animations
- ✅ Touch/swipe support
- ✅ Keyboard navigation
- ✅ Polished visual design
- ✅ At least 2 bonus features

Ready to start building? Open your `index.html` file and begin crafting this interactive experience! 🚀