# Portfolio Photo Gallery

A beautiful, interactive photo gallery component built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Interactive Photo Gallery**: Drag and drop photos with smooth animations
- ✨ **Framer Motion**: Beautiful entrance animations and hover effects
- 🎯 **Responsive Design**: Works perfectly on all device sizes
- 🌙 **Dark Mode Support**: Built-in dark/light theme support
- 🧩 **shadcn/ui**: Modern, accessible UI components
- 📱 **Touch Friendly**: Optimized for both desktop and mobile interactions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with PhotoGallery
├── components/
│   └── ui/
│       ├── button.tsx       # Button component
│       └── gallery.tsx      # PhotoGallery component
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── package.json              # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Component Usage

### PhotoGallery Component

The main component that renders the interactive photo gallery:

```tsx
import { PhotoGallery } from "@/components/ui/gallery";

export default function MyPage() {
  return (
    <div>
      <PhotoGallery animationDelay={0.5} />
    </div>
  );
}
```

#### Props

- `animationDelay` (optional): Delay before animations start in seconds (default: 0.5)

### Photo Component

Individual photo component with drag and drop functionality:

```tsx
import { Photo } from "@/components/ui/gallery";

<Photo
  src="your-image-url.jpg"
  alt="Description"
  width={220}
  height={220}
  direction="left" // or "right"
/>
```

## Customization

### Adding New Photos

To add more photos, modify the `photos` array in `components/ui/gallery.tsx`:

```tsx
const photos = [
  {
    id: 6,
    order: 5,
    x: "480px",
    y: "18px",
    zIndex: 5,
    direction: "right" as Direction,
    src: "your-new-image-url.jpg",
  },
  // ... more photos
];
```

### Styling

The component uses Tailwind CSS classes and CSS variables. You can customize:

- Colors: Modify CSS variables in `app/globals.css`
- Layout: Adjust spacing and positioning in the component
- Animations: Tweak Framer Motion variants

### Image Sources

The component currently uses Pexels stock photos. Replace the `src` URLs in the photos array with your own images:

```tsx
src: "/images/your-photo.jpg" // Local images
src: "https://your-domain.com/image.jpg" // External images
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies

### Core Dependencies
- `next`: React framework
- `react`: UI library
- `react-dom`: React DOM rendering
- `framer-motion`: Animation library

### UI Dependencies
- `@radix-ui/react-slot`: Radix UI primitives
- `class-variance-authority`: Component variant system
- `clsx`: Conditional className utility
- `tailwind-merge`: Tailwind class merging utility

### Development Dependencies
- `typescript`: Type checking
- `tailwindcss`: CSS framework
- `autoprefixer`: CSS vendor prefixing
- `postcss`: CSS processing

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
