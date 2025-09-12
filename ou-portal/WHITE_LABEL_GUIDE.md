# White-Label University Homepage

A fully customizable React-based homepage for universities and educational institutions.

## Features

- 🎨 **Fully Customizable**: Easy theme and content customization
- 📱 **Responsive Design**: Works on all devices
- 🚀 **Modern Tech Stack**: React, TypeScript, React Bootstrap, React Router
- ⚡ **Performance Optimized**: Fast loading and smooth animations
- 🔧 **Easy Configuration**: Simple JSON-based configuration

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## White-Label Customization

### 1. Theme Customization

Edit `src/config/theme.ts` to customize colors, fonts, and styling:

```typescript
export const customTheme: ThemeConfig = {
  colors: {
    primary: '#YOUR_PRIMARY_COLOR',
    secondary: '#YOUR_SECONDARY_COLOR',
    accent: '#YOUR_ACCENT_COLOR',
    // ... other colors
  },
  fonts: {
    primary: 'Your Font, sans-serif',
    secondary: 'Your Secondary Font, sans-serif'
  },
  // ... other configurations
};
```

### 2. Content Customization

Update the content in `src/config/theme.ts`:

```typescript
content: {
  schoolName: 'YOUR SCHOOL NAME',
  schoolNameEn: 'YOUR SCHOOL NAME IN ENGLISH',
  coreValuesTitle: 'YOUR CORE VALUES TITLE',
  coreValuesText: 'YOUR CORE VALUES TEXT',
  // ... other content
}
```

### 3. Images Replacement

Replace images in the `public` folder:

- `logo.png` - School logo
- `hero-bg.jpg` - Hero section background
- `principal.jpg` - Principal's photo
- `gallery/` - Gallery images

### 4. Navigation Customization

Update navigation items in the theme configuration:

```typescript
navigation: {
  items: [
    { label: 'Home', path: '/', active: true },
    { label: 'About', path: '/about' },
    // ... add your navigation items
  ]
}
```

## File Structure

```
src/
├── components/
│   ├── Header/           # Navigation header
│   ├── HeroSection/      # Hero section with background
│   ├── AboutSection/     # About and info cards
│   ├── GallerySection/   # Image gallery
│   └── Footer/           # Footer with contact info
├── config/
│   └── theme.ts          # Theme and content configuration
├── App.tsx               # Main app component
└── App.css              # Global styles
```

## Available Components

### Header Component
- Customizable logo and school name
- Responsive navigation menu
- Active page highlighting

### Hero Section
- Background image with overlay
- Core values display
- Call-to-action button

### About Section
- Principal's message with photo
- School introduction
- Information cards (facilities, history, achievements, address)

### Gallery Section
- Responsive image grid
- Hover effects
- Lazy loading

### Footer Component
- Contact information
- Navigation links
- Social media links
- Copyright information

## Color Scheme

The default color scheme uses:
- **Primary**: #2BA7E2 (Blue)
- **Secondary**: #0193DC (Darker Blue)
- **Accent**: #F8C301 (Yellow)
- **Background**: #F9FBFD (Light Gray)
- **Text**: #0C101A (Dark Gray)

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: > 991px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Image Optimization**: Use WebP format for better compression
2. **Lazy Loading**: Images load only when needed
3. **Code Splitting**: Components are loaded on demand
4. **CSS Variables**: Efficient theme switching

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `build` folder to your web server

## Customization Examples

### Example 1: Red Theme
```typescript
colors: {
  primary: '#DC2626',
  secondary: '#B91C1C',
  accent: '#F59E0B'
}
```

### Example 2: Green Theme
```typescript
colors: {
  primary: '#059669',
  secondary: '#047857',
  accent: '#F59E0B'
}
```

## Support

For customization help or questions, please refer to the component documentation or create an issue in the repository.

## License

This project is licensed under the MIT License.
