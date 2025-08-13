# Challenge 3: Pricing Cards with Animations 💳

**Difficulty:** Beginner  
**Estimated Time:** 2-3 hours  
**Focus Areas:** Card Layouts, Hover Effects, Responsive Design

## 📋 Challenge Overview
Create a beautiful pricing section with three tiers that showcases smooth animations and responsive design principles.

## 🎯 Requirements

### Pricing Tiers
1. **Basic Plan** - $9/month
   - 5 Projects
   - 10GB Storage  
   - Email Support
   - Basic Analytics

2. **Pro Plan** - $29/month (Popular - highlighted)
   - 50 Projects
   - 100GB Storage
   - Priority Support
   - Advanced Analytics
   - Team Collaboration

3. **Enterprise** - $99/month
   - Unlimited Projects
   - 1TB Storage
   - 24/7 Phone Support
   - Custom Analytics
   - Advanced Security
   - API Access

### Visual Requirements
- **Popular Badge**: "Most Popular" ribbon on Pro plan
- **Hover Effects**: Cards lift and shadow increases
- **Feature Icons**: Checkmark icons for included features
- **CTA Buttons**: Different button styles per tier
- **Responsive Layout**: Stack on mobile, row on desktop

### Animation Specs
- **Card Hover**: Scale to 1.05, shadow increase
- **Button Hover**: Color transitions and slight scale
- **Popular Plan**: Subtle pulse animation on badge
- **Loading States**: Button shows loading spinner when clicked

## 🛠️ Technical Specifications

### Card Structure
```html
<div class="pricing-card">
  <div class="plan-header">
    <h3 class="plan-name">Pro Plan</h3>
    <div class="plan-price">
      <span class="currency">$</span>
      <span class="amount">29</span>
      <span class="period">/month</span>
    </div>
  </div>
  <ul class="feature-list">
    <!-- Features with checkmarks -->
  </ul>
  <button class="cta-button">Get Started</button>
</div>
```

### Tailwind Classes to Master
- Card styling: `bg-white rounded-lg shadow-lg p-6`
- Hover effects: `hover:scale-105 hover:shadow-xl transition-all duration-300`
- Popular highlighting: `ring-2 ring-blue-500 relative`
- Button variants: Different colors and states per tier
- Responsive grid: `grid grid-cols-1 md:grid-cols-3 gap-8`

## ✨ Bonus Features
- Annual/Monthly toggle with price animations
- "Save 20%" badges for annual plans
- Comparison table view toggle
- Custom plan configurator

## 🎯 Success Criteria
- All three plans display correctly
- Hover animations are smooth (no jank)
- Responsive layout works on all devices
- Popular plan stands out visually
- CTA buttons are compelling and functional
