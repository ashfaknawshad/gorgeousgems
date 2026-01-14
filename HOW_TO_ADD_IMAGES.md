# How to Add Gemstone Images

This guide will show you how to add your gemstone photos to the gallery and customize their descriptions.

## Step 1: Add Your Images

1. Place your gemstone images in the `/public/gems/` folder
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Recommended image size: 800x800 pixels or larger (square images work best)

## Step 2: Update the Gallery Data

Open the file: `app/gallery/page.tsx`

Find the `gems` array (around line 18) and update it with your gemstone information:

```tsx
const gems = [
  {
    id: 1,
    name: 'Blue Sapphire',              // Change the name
    description: 'Your description',     // Change the description
    image: '/gems/sapphire.jpg',         // Match your filename
    hasImage: true,                      // Change to true when image is added
  },
  // ... more gems
];
```

## Step 3: Customize Each Gem

For each gemstone in your collection:

1. **name**: The title that appears below the image
2. **description**: A short description of the gemstone
3. **image**: The path to your image (must start with `/gems/`)
4. **hasImage**: Set to `true` when you've added the actual image, `false` to show placeholder

## Example

If you have a file called `ruby-red.jpg` in `/public/gems/`:

```tsx
{
  id: 2,
  name: 'Premium Ruby',
  description: 'Rare Burmese ruby, 3.5 carats, vivid red color',
  image: '/gems/ruby-red.jpg',
  hasImage: true,  // Set to true!
}
```

## Adding More Gems

To add more than 9 gemstones, simply add more objects to the array:

```tsx
const gems = [
  // ... existing gems ...
  {
    id: 10,
    name: 'Tanzanite',
    description: 'Rare blue-violet tanzanite from Tanzania',
    image: '/gems/tanzanite.jpg',
    hasImage: true,
  },
];
```

## Removing Gems

To show fewer gemstones, simply delete the gem objects you don't want from the array.

## Tips

- Use descriptive filenames for your images (e.g., `blue-sapphire.jpg` instead of `img001.jpg`)
- Keep descriptions concise (1-2 lines)
- Images will automatically resize to fit the cards
- The gallery is responsive and will adjust to different screen sizes

## File Locations

- **Images folder**: `C:\Users\Ashfak\.gemini\antigravity\scratch\gorgeous-gems\public\gems\`
- **Gallery code**: `C:\Users\Ashfak\.gemini\antigravity\scratch\gorgeous-gems\app\gallery\page.tsx`

That's it! Your changes will appear automatically when you save the file (the dev server will hot-reload).
