# Animated Page Transitions with Framer Motion

## 🚀 Live Preview

**[View Live Demo →](https://1791-test-rapheal.vercel.app/)**

Experience the advanced page transitions in action with real-time performance monitoring and interactive controls.

---

A comprehensive example of smooth, professional page transitions using Framer Motion and Next.js App Router.

## Features

- **Multiple Transition Types**: Slide, fade, and scale transitions
- **Performance Optimized**: Smooth 60fps animations with proper cleanup
- **Accessibility Friendly**: Respects user preferences for reduced motion
- **Mobile Responsive**: Works seamlessly across all devices
- **Type Safe**: Full TypeScript support with proper type definitions

## Transition Types

### Slide Transitions
- Horizontal slide animations
- Directional navigation feedback
- Perfect for multi-step flows

### Fade Transitions
- Elegant opacity transitions
- Subtle and professional
- Ideal for content-focused sites

### Scale Transitions
- Dynamic zoom effects
- Creates depth perception
- Modern, app-like experience

## Implementation Details

### Core Components

1. **PageTransition Component**: Wraps pages with appropriate animations
2. **Layout Integration**: Seamlessly integrated with Next.js App Router
3. **Route-Based Logic**: Automatically selects transition based on route
4. **Performance Optimized**: Uses \`AnimatePresence\` with proper cleanup

### Key Features

- **Automatic Transition Selection**: Different transitions for different routes
- **Smooth Timing**: Carefully tuned duration and easing curves
- **Memory Efficient**: Proper cleanup prevents memory leaks
- **SEO Friendly**: Server-side rendering compatible

## Installation

1. Install dependencies:
\`\`\`bash
npm install framer-motion
\`\`\`

2. Copy the components to your project
3. Update your layout to include the PageTransition wrapper
4. Customize transition variants as needed

## Customization

### Adding New Transitions

\`\`\`typescript
const transitions = {
  // Add your custom transition
  custom: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 }
  }
}
\`\`\`

### Performance Tips

1. Use \`transform\` properties (x, y, scale) over layout properties
2. Set \`will-change: transform\` for better performance
3. Use \`AnimatePresence\` with \`mode="wait"\` to prevent layout shifts
4. Optimize images and reduce bundle size for smoother animations

## Browser Support

- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 79+

## Best Practices

1. **Keep animations short**: 200-500ms for optimal UX
2. **Use appropriate easing**: \`easeInOut\` for most transitions
3. **Test on mobile**: Ensure smooth performance on lower-end devices
4. **Respect accessibility**: Honor \`prefers-reduced-motion\`
5. **Optimize bundle size**: Import only needed Framer Motion features

## Performance Considerations

- Animations run at 60fps on modern devices
- Uses hardware acceleration when available
- Minimal JavaScript bundle impact
- Efficient memory usage with proper cleanup
