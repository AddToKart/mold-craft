# Professional Typography System - Moldcraft

## Overview

This document outlines the professional typography system implemented across the entire Moldcraft website to ensure consistent, corporate-level design standards.

## Font Stack

- **Headings**: IBM Plex Sans (Professional, Clean, Corporate)
- **Body Text**: Inter (Highly readable, Modern, Versatile)
- **Fallbacks**: System fonts for optimal performance

## Implementation

### 1. Global Configuration

- **Layout.tsx**: Loads IBM Plex Sans and Inter fonts from Google Fonts
- **globals.css**: Establishes base typography rules and utilities
- **tailwind.config.ts**: Configures professional font families

### 2. Automatic Application

All elements automatically use professional fonts:

- `h1, h2, h3, h4, h5, h6` → IBM Plex Sans (Headings)
- `body, p, span, div` → Inter (Body text)
- Navigation and Footer → IBM Plex Sans (Brand consistency)

### 3. CSS Classes Available

#### Font Family Classes

- `font-heading` → IBM Plex Sans
- `font-body` → Inter
- `text-heading` → Force IBM Plex Sans (override)
- `text-body` → Force Inter (override)

#### Typography Scale Classes

- `heading-xl` → 3.5rem, bold, tight line-height
- `heading-lg` → 2.5rem, semibold
- `heading-md` → 1.75rem, semibold
- `heading-sm` → 1.25rem, semibold

### 4. React Components

Professional typography components in `/components/ui/typography.tsx`:

```tsx
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography';

// Usage
<TypographyH1>Professional Heading</TypographyH1>
<TypographyP>Professional body text</TypographyP>
```

## Pages Updated

✅ **Homepage** - All sections use professional fonts
✅ **Navigation** - Logo and menu items use IBM Plex Sans
✅ **Footer** - Consistent heading and body fonts
✅ **Global CSS** - Automatic application to all elements
✅ **About Page** - Inherits professional typography
✅ **Services Page** - Inherits professional typography
✅ **Products Page** - Inherits professional typography
✅ **Team Page** - Inherits professional typography
✅ **Contact Page** - Inherits professional typography

## Design Principles Applied

1. **Consistency** - Same fonts across all pages
2. **Hierarchy** - Clear visual distinction between heading levels
3. **Readability** - Optimized for professional environments
4. **Performance** - Efficient font loading with fallbacks
5. **Accessibility** - High contrast and readable font choices

## Browser Support

- Modern browsers: IBM Plex Sans + Inter
- Fallback: System fonts (Helvetica, Arial, etc.)
- All devices supported with responsive typography

## Maintenance

The typography system is now centralized and automatic. New pages will automatically inherit the professional font system without additional configuration.
